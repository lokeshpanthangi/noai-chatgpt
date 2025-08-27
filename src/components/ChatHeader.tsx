import { MessageCircle } from 'lucide-react';

export const ChatHeader = () => {
  return (
    <header className="flex items-center gap-3 p-4 bg-chat-header-bg border-b border-border">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
        <MessageCircle className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h1 className="text-lg font-semibold text-foreground">ChatBot</h1>
      </div>
    </header>
  );
};