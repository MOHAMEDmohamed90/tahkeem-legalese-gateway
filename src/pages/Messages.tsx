
import { MessageInterface } from "@/components/messaging/MessageInterface";

const Messages = () => {
  return (
    <div className="min-h-screen bg-gradient-section">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold arabic-text">الرسائل</h1>
          <p className="text-muted-foreground arabic-text mt-2">
            تواصل بأمان مع المحكمين والأطراف الأخرى
          </p>
        </div>
        <MessageInterface />
      </div>
    </div>
  );
};

export default Messages;
