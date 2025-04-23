import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { promises as fs } from 'fs';
import path from 'path';

// Log environment variable status
console.log('Checking OpenAI API key...');
console.log('OPENAI_API_KEY exists:', !!process.env.OPENAI_API_KEY);
console.log('OPENAI_API_KEY length:', process.env.OPENAI_API_KEY?.length);

if (!process.env.OPENAI_API_KEY) {
  console.error('OpenAI API key is missing!');
  throw new Error('OpenAI API key is missing');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Function to read the experience data
async function getExperienceData() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'trevor_experience.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  return JSON.parse(jsonData);
}

// Function to read the profile data
async function getProfileData() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'trevor_profile.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  return JSON.parse(jsonData);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Received request body:', body);

    if (!body.message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Get both experience and profile data
    const [experienceData, profileData] = await Promise.all([
      getExperienceData(),
      getProfileData()
    ]);

    // Create a system message that includes both work history and profile context
    const systemMessage = `You are a helpful assistant that answers questions about Trevor's work experience and background. 
Here is Trevor's profile and work history:

Profile:
${JSON.stringify(profileData, null, 2)}

Work Experience:
${JSON.stringify(experienceData, null, 2)}

Please use this information to answer questions about Trevor's work experience, skills, education, and background. 
If asked about specific time periods, companies, roles, or skills, refer to the provided data.
If the question is not related to Trevor's professional experience or background, politely let the user know that you can only answer questions about Trevor's professional experience.`;

    console.log('Making OpenAI API call...');
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: body.message }
      ],
      model: "gpt-3.5-turbo",
    });

    console.log('OpenAI response:', completion);

    if (!completion.choices?.[0]?.message?.content) {
      throw new Error('Invalid response from OpenAI API');
    }

    return NextResponse.json({ 
      reply: completion.choices[0].message.content 
    });
  } catch (error) {
    console.error('Detailed error in chat API:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to process your request',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 