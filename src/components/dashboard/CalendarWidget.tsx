
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

export function CalendarWidget() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card>
      <CardHeader>
        <CardTitle className="arabic-text">التقويم</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border pointer-events-auto"
        />
        <div className="mt-4 space-y-2">
          <h4 className="font-semibold arabic-text">المواعيد القادمة</h4>
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span className="arabic-text">جلسة تحكيم</span>
              <span>15 يناير</span>
            </div>
            <div className="flex justify-between">
              <span className="arabic-text">مراجعة وثائق</span>
              <span>20 يناير</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
