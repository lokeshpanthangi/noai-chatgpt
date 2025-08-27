import { useState, useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { ChatHeader } from './ChatHeader';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    text: 'Hello! How can I assist you today?',
    isUser: false,
  },
];

const AI_RESPONSES = [
  "That's an interesting question! Let me think about that.",
  "I understand what you're asking. Here's my perspective on that.",
  "Great point! I'd be happy to help you with that.",
  "That's a thoughtful question. Let me provide some insights.",
  "I see what you mean. Here's how I would approach that.",
  "Thanks for asking! I think the key here is to consider...",
  "That's a common question, and here's what I think...",
];

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: AI_RESPONSES[Math.floor(Math.random() * AI_RESPONSES.length)],
        isUser: false,
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <ChatHeader />
      
      <div 
        className="flex-1 overflow-y-auto p-4 space-y-4"
        style={{ background: 'var(--gradient-bg)' }}
      >
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.text}
            isUser={message.isUser}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};