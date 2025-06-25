
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  avatar: string;
  status: "online" | "offline";
  role: "arbitrator" | "mediator" | "party";
}

interface ConversationListProps {
  selectedConversation: string | null;
  onSelectConversation: (id: string) => void;
}

export const ConversationList = ({
  selectedConversation,
  onSelectConversation,
}: ConversationListProps) => {
  const conversations: Conversation[] = [
    {
      id: "1",
      name: "د. أحمد المنصوري",
      lastMessage: "سأراجع المستندات وأعود إليك قريباً",
      timestamp: "منذ 5 دقائق",
      unreadCount: 2,
      avatar: "/placeholder.svg",
      status: "online",
      role: "arbitrator",
    },
    {
      id: "2",
      name: "المحامي سارة الزهراني",
      lastMessage: "هل يمكننا تحديد موعد للاجتماع؟",
      timestamp: "منذ ساعة",
      unreadCount: 0,
      avatar: "/placeholder.svg",
      status: "offline",
      role: "party",
    },
    {
      id: "3",
      name: "الوسيط محمد العلي",
      lastMessage: "تم تحديد موعد الجلسة القادمة",
      timestamp: "أمس",
      unreadCount: 1,
      avatar: "/placeholder.svg",
      status: "online",
      role: "mediator",
    },
  ];

  const getRoleBadge = (role: string) => {
    const badges = {
      arbitrator: { text: "محكم", variant: "default" as const },
      mediator: { text: "وسيط", variant: "secondary" as const },
      party: { text: "طرف", variant: "outline" as const },
    };
    return badges[role as keyof typeof badges];
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold arabic-text">المحادثات</h2>
          <Button size="sm" variant="ghost">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="البحث في المحادثات..."
            className="pl-10 arabic-text"
          />
        </div>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => {
          const badge = getRoleBadge(conversation.role);
          return (
            <div
              key={conversation.id}
              className={`p-4 border-b cursor-pointer hover:bg-muted/50 transition-colors ${
                selectedConversation === conversation.id ? "bg-muted" : ""
              }`}
              onClick={() => onSelectConversation(conversation.id)}
            >
              <div className="flex items-start gap-3">
                <div className="relative">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={conversation.avatar} />
                    <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${
                      conversation.status === "online" ? "bg-green-500" : "bg-gray-400"
                    }`}
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium arabic-text truncate">
                      {conversation.name}
                    </h3>
                    <span className="text-xs text-muted-foreground arabic-text">
                      {conversation.timestamp}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant={badge.variant} className="text-xs arabic-text mb-1">
                      {badge.text}
                    </Badge>
                    {conversation.unreadCount > 0 && (
                      <Badge variant="destructive" className="text-xs">
                        {conversation.unreadCount}
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground arabic-text truncate">
                    {conversation.lastMessage}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
