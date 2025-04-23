'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

interface Message {
  sender: string;
  content: string;
}

export default function AskTrevorBotPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function sendMessage() {
    if (!input.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.details || data.error || `HTTP error! status: ${res.status}`);
      }

      setMessages([
        ...messages,
        { sender: 'You', content: input },
        { sender: 'Trevor Bot', content: data.reply }
      ]);
      setInput('');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              <Link href="/">Trevor Rawls</Link>
            </div>
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/experience">Experience</Link></li>
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/ask-trevor-bot" className="active">Talk to Trevor Bot</Link></li>
            </ul>
            <div className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </div>
      </header>

      <section className={styles.chatPage}>
        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <h1>Talk to Trevor Bot</h1>
            <p>Ask me anything about my experience, skills, or background!</p>
          </div>

          <div className={styles.chatMessages}>
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`${styles.message} ${msg.sender === 'You' ? styles.userMessage : styles.botMessage}`}
              >
                <div className={styles.messageSender}>{msg.sender}</div>
                <div className={styles.messageContent}>{msg.content}</div>
              </div>
            ))}
            {isLoading && <div className={styles.loading}>Thinking...</div>}
            {error && (
              <div className={styles.error}>
                <div className={styles.errorTitle}>Error</div>
                <div>{error}</div>
              </div>
            )}
          </div>

          <div className={styles.inputContainer}>
            <input
              className={styles.inputField}
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask me about my experience..."
              disabled={isLoading}
              onKeyPress={e => e.key === 'Enter' && sendMessage()}
            />
            <button 
              className={styles.sendButton}
              onClick={sendMessage}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
} 