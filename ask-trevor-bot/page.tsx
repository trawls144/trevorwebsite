'use client';
import { useState } from 'react';

export default function AskTrevorBotPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  async function sendMessage() {
    if (!input.trim()) return;

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    setMessages([...messages, `You: ${input}`, `Bot: ${data.reply}`]);
    setInput('');
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Ask Trevor Bot</h1>
      <div className="space-y-2 bg-gray-100 p-4 rounded h-64 overflow-y-auto">
        {messages.map((msg, i) => (
          <p key={i}>{msg}</p>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <input
          className="border p-2 flex-1 rounded"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask me about my experience..."
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}