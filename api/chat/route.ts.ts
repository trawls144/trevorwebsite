import { OpenAI } from 'openai';
import experience from '@/data/trevor_experience.json';
import profile from '@/data/trevor_profile.json';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { message } = await req.json();
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const systemPrompt = `You are a helpful assistant trained on Trevor Rawls' experience and background.\nExperience: ${JSON.stringify(experience)}\nProfile: ${JSON.stringify(profile)}`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: message }
    ]
  });

  return Response.json({ reply: response.choices[0].message.content });
}