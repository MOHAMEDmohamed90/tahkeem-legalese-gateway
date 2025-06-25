
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";

export const TimeSlotBooking = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  const timeSlots = [
    { time: "09:00", available: true },
    { time: "10:30", available: true },
    { time: "12:00", available: false },
    { time: "14:00", available: true },
    { time: "15:30", available: true },
    { time: "17:00", available: false },
  ];

  return (
    <div className="space-y-6">
      {/* Pricing Card */}
      <Card>
        <CardHeader>
          <CardTitle className="arabic-text flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            الأسعار
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="arabic-text">استشارة أولية</span>
            <span className="font-semibold">500 درهم</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="arabic-text">جلسة تحكيم</span>
            <span className="font-semibold">2,000 درهم</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="arabic-text">جلسة وساطة</span>
            <span className="font-semibold">1,500 درهم</span>
          </div>
        </CardContent>
      </Card>

      {/* Booking Card */}
      <Card>
        <CardHeader>
          <CardTitle className="arabic-text flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            حجز موعد
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm arabic-text">
            <p className="text-muted-foreground mb-2">اختر التاريخ:</p>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
              disabled={(date) => date < new Date()}
            />
          </div>
          
          {selectedDate && (
            <div>
              <p className="text-sm text-muted-foreground mb-3 arabic-text">
                الأوقات المتاحة:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot.time}
                    variant={slot.available ? "outline" : "secondary"}
                    size="sm"
                    disabled={!slot.available}
                    className="flex items-center gap-2"
                  >
                    <Clock className="w-3 h-3" />
                    {slot.time}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          <Button className="w-full arabic-text">
            طلب موعد
          </Button>
          
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Badge variant="secondary" className="arabic-text">
              استجابة سريعة
            </Badge>
            <Badge variant="secondary" className="arabic-text">
              متاح عبر الإنترنت
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
