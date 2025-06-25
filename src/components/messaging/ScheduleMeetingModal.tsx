
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock, Video, Users } from "lucide-react";

interface ScheduleMeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleMeetingModal = ({ isOpen, onClose }: ScheduleMeetingModalProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingDescription, setMeetingDescription] = useState("");
  const [meetingType, setMeetingType] = useState<"video" | "audio">("video");

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
  ];

  const handleSchedule = () => {
    const meetingData = {
      title: meetingTitle,
      description: meetingDescription,
      date: selectedDate,
      time: selectedTime,
      type: meetingType
    };
    
    console.log("Scheduling meeting:", meetingData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="arabic-text flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            جدولة اجتماع
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Meeting Type */}
          <div>
            <Label className="arabic-text">نوع الاجتماع</Label>
            <div className="flex gap-2 mt-2">
              <Button
                variant={meetingType === "video" ? "default" : "outline"}
                size="sm"
                onClick={() => setMeetingType("video")}
                className="arabic-text"
              >
                <Video className="w-4 h-4 ml-2" />
                مكالمة فيديو
              </Button>
              <Button
                variant={meetingType === "audio" ? "default" : "outline"}
                size="sm"
                onClick={() => setMeetingType("audio")}
                className="arabic-text"
              >
                <Users className="w-4 h-4 ml-2" />
                مكالمة صوتية
              </Button>
            </div>
          </div>

          {/* Meeting Title */}
          <div>
            <Label htmlFor="title" className="arabic-text">عنوان الاجتماع</Label>
            <Input
              id="title"
              value={meetingTitle}
              onChange={(e) => setMeetingTitle(e.target.value)}
              placeholder="مناقشة تفاصيل القضية..."
              className="arabic-text"
            />
          </div>

          {/* Meeting Description */}
          <div>
            <Label htmlFor="description" className="arabic-text">وصف الاجتماع</Label>
            <Textarea
              id="description"
              value={meetingDescription}
              onChange={(e) => setMeetingDescription(e.target.value)}
              placeholder="تفاصيل إضافية حول الاجتماع..."
              className="arabic-text"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date Selection */}
            <div>
              <Label className="arabic-text">اختر التاريخ</Label>
              <div className="mt-2">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                  disabled={(date) => date < new Date()}
                />
              </div>
            </div>

            {/* Time Selection */}
            <div>
              <Label className="arabic-text">اختر الوقت</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTime(time)}
                    className="flex items-center gap-2"
                  >
                    <Clock className="w-3 h-3" />
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Meeting Summary */}
          {selectedDate && selectedTime && meetingTitle && (
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium arabic-text mb-2">ملخص الاجتماع</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Badge variant={meetingType === "video" ? "default" : "secondary"}>
                    {meetingType === "video" ? "فيديو" : "صوتي"}
                  </Badge>
                  <span className="arabic-text">{meetingTitle}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{selectedDate.toLocaleDateString('ar-SA')}</span>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>{selectedTime}</span>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={onClose}>
              إلغاء
            </Button>
            <Button 
              onClick={handleSchedule}
              disabled={!selectedDate || !selectedTime || !meetingTitle}
            >
              جدولة الاجتماع
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
