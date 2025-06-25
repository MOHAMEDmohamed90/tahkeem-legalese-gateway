
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ConversationList } from "./ConversationList";
import { ChatWindow } from "./ChatWindow";
import { VideoCallModal } from "./VideoCallModal";

export const MessageInterface = () => {
  const [selectedConversation, setSelectedConversation] = useState<string | null>("1");
  const [isVideoCallOpen, setIsVideoCallOpen] = useState(false);

  return (
    <div className="h-[600px] lg:h-[700px]">
      <Card className="h-full flex overflow-hidden">
        {/* Conversation List */}
        <div className="w-full md:w-80 border-r bg-muted/30">
          <ConversationList
            selectedConversation={selectedConversation}
            onSelectConversation={setSelectedConversation}
          />
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <ChatWindow
              conversationId={selectedConversation}
              onVideoCall={() => setIsVideoCallOpen(true)}
            />
          ) : (
            <div className="flex-1 flex items-center justify-center text-muted-foreground arabic-text">
              اختر محادثة للبدء
            </div>
          )}
        </div>
      </Card>

      <VideoCallModal
        isOpen={isVideoCallOpen}
        onClose={() => setIsVideoCallOpen(false)}
        participantName="د. أحمد المنصوري"
      />
    </div>
  );
};
