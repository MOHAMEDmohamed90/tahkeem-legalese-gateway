
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, User } from "lucide-react";

interface CaseData {
  id: string;
  title: string;
  status: string;
  deadline: string;
  arbitrator?: string;
  mediator?: string;
  type: string;
  progress: number;
}

interface CaseCardProps {
  caseData: CaseData;
}

export function CaseCard({ caseData }: CaseCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "جاري المراجعة":
        return "bg-blue-100 text-blue-800";
      case "في انتظار الوثائق":
        return "bg-yellow-100 text-yellow-800";
      case "مكتملة":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "تحكيم":
        return "bg-tahkeem-blue-100 text-tahkeem-blue-800";
      case "وساطة":
        return "bg-tahkeem-gold-100 text-tahkeem-gold-800";
      case "محاكاة":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg arabic-text">{caseData.title}</CardTitle>
            <p className="text-sm text-gray-600 mt-1">#{caseData.id}</p>
          </div>
          <div className="flex gap-2">
            <Badge className={getTypeColor(caseData.type)}>{caseData.type}</Badge>
            <Badge className={getStatusColor(caseData.status)}>{caseData.status}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4" />
            <span className="arabic-text">موعد الانتهاء:</span>
            <span>{new Date(caseData.deadline).toLocaleDateString('ar-SA')}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <User className="h-4 w-4" />
            <span className="arabic-text">المحكم/الوسيط:</span>
            <span className="arabic-text">{caseData.arbitrator || caseData.mediator}</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="arabic-text">التقدم</span>
              <span>{caseData.progress}%</span>
            </div>
            <Progress value={caseData.progress} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
