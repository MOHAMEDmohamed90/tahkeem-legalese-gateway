
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageBubble } from "./MessageBubble";
import { FileUploadArea } from "./FileUploadArea";
import { ScheduleMeetingModal } from "./ScheduleMeetingModal";
import { Video, Calendar, Paperclip, Send, MoreVertical } from "lucide-react";

interface ChatWindowProps {
  conversationId: string;
  onVideoCall: () => void;
}

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

export const ChatWindow = ({ conversationId, onVideoCall }: ChatWindowProps) => {
  const [message, setMessage] = useState("");
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const messages: Message[] = [
    {
      id: "1",
      content: "السلام عليكم، تم استلام مستندات القضية وسأقوم بمراجعتها",
      sender: "other",
      timestamp: "منذ 30 دقيقة",
      type: "text",
    },
    {
      id: "2",
      content: "شكراً لك دكتور، متى يمكنك مناقشة النقاط الرئيسية؟",
      sender: "me",
      timestamp: "منذ 25 دقيقة",
      type: "text",
    },
    {
      id: "3",
      content: "contract-review.pdf",
      sender: "me",
      timestamp: "منذ 20 دقيقة",
      type: "file",
      fileData: {
        name: "contract-review.pdf",
        size: "2.4 MB",
        type: "PDF",
      },
    },
    {
      id: "4",
      content: "تم تحديد اجتماع للغد الساعة 2:00 ظهراً",
      sender: "other",
      timestamp: "منذ 15 دقيقة",
      type: "meeting",
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b bg-muted/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>أم</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium arabic-text">د. أحمد المنصوري</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm text-muted-foreground arabic-text">متصل الآن</span>
                <Badge variant="default" className="text-xs arabic-text">محكم</Badge>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={onVideoCall}>
              <Video className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setShowScheduleModal(true)}>
              <Calendar className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </div>

      {/* File Upload Area */}
      {showFileUpload && (
        <div className="p-4 border-t bg-muted/30">
          <FileUploadArea onClose={() => setShowFileUpload(false)} />
        </div>
      )}

      {/* Message Input */}
      <div className="p-4 border-t bg-muted/30">
        <div className="flex items-end gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowFileUpload(!showFileUpload)}
          >
            <Paperclip className="w-4 h-4" />
          </Button>
          
          <div className="flex-1">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="اكتب رسالتك هنا..."
              className="arabic-text"
            />
          </div>
          
          <Button onClick={handleSendMessage} disabled={!message.trim()}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <ScheduleMeetingModal
        isOpen={showScheduleModal}
        onClose={() => setShowScheduleModal(false)}
      />
    </div>
  );
};
