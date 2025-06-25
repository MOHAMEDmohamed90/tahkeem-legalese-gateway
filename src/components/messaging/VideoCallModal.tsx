
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Video, VideoOff, Mic, MicOff, Phone, Settings } from "lucide-react";

interface VideoCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  participantName: string;
}

export const VideoCallModal = ({ isOpen, onClose, participantName }: VideoCallModalProps) => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [callDuration, setCallDuration] = useState(0);
  const [callStatus, setCallStatus] = useState<"connecting" | "connected" | "ended">("connecting");

  useEffect(() => {
    if (isOpen) {
      setCallStatus("connecting");
      // Simulate connection
      const timer = setTimeout(() => {
        setCallStatus("connected");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (callStatus === "connected") {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [callStatus]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndCall = () => {
    setCallStatus("ended");
    setCallDuration(0);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[80vh] p-0">
        <div className="h-full flex flex-col bg-gray-900 text-white rounded-lg overflow-hidden">
          {/* Header */}
          <DialogHeader className="p-4 bg-black/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>أم</AvatarFallback>
                </Avatar>
                <div>
                  <DialogTitle className="arabic-text text-white">{participantName}</DialogTitle>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={callStatus === "connected" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {callStatus === "connecting" && "جاري الاتصال..."}
                      {callStatus === "connected" && formatDuration(callDuration)}
                      {callStatus === "ended" && "انتهى الاتصال"}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </DialogHeader>

          {/* Video Area */}
          <div className="flex-1 relative bg-gray-800 flex items-center justify-center">
            {callStatus === "connecting" ? (
              <div className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="text-2xl">أم</AvatarFallback>
                </Avatar>
                <p className="text-lg arabic-text">جاري الاتصال...</p>
                <div className="flex justify-center mt-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full relative">
                {/* Main video placeholder */}
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="text-4xl">أم</AvatarFallback>
                  </Avatar>
                </div>
                
                {/* Self video preview */}
                <div className="absolute top-4 right-4 w-48 h-36 bg-gray-600 rounded-lg border-2 border-white/20 flex items-center justify-center">
                  {isVideoOn ? (
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>أنت</AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="text-center">
                      <VideoOff className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm">الكاميرا مغلقة</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="p-6 bg-black/40">
            <div className="flex items-center justify-center gap-4">
              <Button
                variant={isAudioOn ? "secondary" : "destructive"}
                size="lg"
                className="rounded-full w-14 h-14"
                onClick={() => setIsAudioOn(!isAudioOn)}
              >
                {isAudioOn ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
              </Button>

              <Button
                variant={isVideoOn ? "secondary" : "destructive"}
                size="lg"
                className="rounded-full w-14 h-14"
                onClick={() => setIsVideoOn(!isVideoOn)}
              >
                {isVideoOn ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
              </Button>

              <Button
                variant="destructive"
                size="lg"
                className="rounded-full w-14 h-14"
                onClick={handleEndCall}
              >
                <Phone className="w-6 h-6" />
              </Button>
            </div>
            
            <p className="text-center mt-4 text-sm text-gray-300 arabic-text">
              المكالمات مشفرة ومؤمنة بالكامل
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
