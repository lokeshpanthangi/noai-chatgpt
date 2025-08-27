interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

export const ChatMessage = ({ message, isUser }: ChatMessageProps) => {
  return (
    <div className={`flex w-full mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[70%] px-4 py-3 rounded-2xl transition-all duration-200 ${
          isUser
            ? 'bg-chat-user-bg text-chat-user-text rounded-br-md'
            : 'bg-chat-ai-bg text-chat-ai-text border border-border rounded-bl-md shadow-sm'
        }`}
        style={{
          background: isUser ? 'var(--gradient-message)' : 'hsl(var(--chat-ai-bg))',
          boxShadow: 'var(--shadow-message)'
        }}
      >
        <p className="text-sm leading-relaxed">{message}</p>
      </div>
    </div>
  );
};