
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Calendar, Video } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "me" | "other";
  timestamp: string;
  type: "text" | "file" | "meeting";
  fileData?: {
    name: string;
    size: string;
    type: string;
  };
}

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isMe = message.sender === "me";

  const renderMessageContent = () => {
    switch (message.type) {
      case "file":
        return (
          <div className="flex items-center gap-3 p-3 bg-muted rounded-lg max-w-xs">
            <FileText className="w-8 h-8 text-blue-500" />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate arabic-text">
                {message.fileData?.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {message.fileData?.type} • {message.fileData?.size}
              </p>
            </div>
            <Button variant="ghost" size="sm">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        );
      
      case "meeting":
        return (
          <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg max-w-xs">
            <Calendar className="w-6 h-6 text-blue-500" />
            <div>
              <p className="font-medium text-sm arabic-text">{message.content}</p>
              <Button variant="link" size="sm" className="p-0 h-auto text-blue-600">
                <Video className="w-3 h-3 ml-1" />
                انضمام للاجتماع
              </Button>
            </div>
          </div>
        );
      
      default:
        return (
          <p className="arabic-text leading-relaxed">{message.content}</p>
        );
    }
  };

  return (
    <div className={`flex gap-3 ${isMe ? "flex-row-reverse" : ""}`}>
      {!isMe && (
        <Avatar className="w-8 h-8">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>أم</AvatarFallback>
        </Avatar>
      )}
      
      <div className={`flex flex-col ${isMe ? "items-end" : "items-start"} max-w-[70%]`}>
        <div
          className={`px-4 py-2 rounded-2xl ${
            isMe
              ? "bg-primary text-primary-foreground"
              : "bg-muted"
          } ${message.type !== "text" ? "p-2" : ""}`}
        >
          {renderMessageContent()}
        </div>
        
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-muted-foreground arabic-text">
            {message.timestamp}
          </span>
          {isMe && (
            <Badge variant="secondary" className="text-xs">
              تم الإرسال
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};
