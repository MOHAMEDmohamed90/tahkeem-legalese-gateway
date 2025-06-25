
import { CaseCard } from "./CaseCard";
import { CalendarWidget } from "./CalendarWidget";
import { DocumentUpload } from "./DocumentUpload";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activeCases = [
  {
    id: "CASE-001",
    title: "نزاع تجاري - شركة الأمل",
    status: "جاري المراجعة",
    deadline: "2024-01-15",
    arbitrator: "د. أحمد محمد",
    type: "تحكيم",
    progress: 65,
  },
  {
    id: "CASE-002", 
    title: "نزاع عقاري - مشروع النور",
    status: "في انتظار الوثائق",
    deadline: "2024-01-20",
    mediator: "أ. فاطمة أحمد",
    type: "وساطة",
    progress: 30,
  },
  {
    id: "CASE-003",
    title: "محاكاة حكم - قضية عمالية",
    status: "مكتملة",
    deadline: "2024-01-10",
    arbitrator: "د. محمد علي",
    type: "محاكاة",
    progress: 100,
  },
];

export function DashboardContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Cases Section */}
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="arabic-text">القضايا النشطة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeCases.map((caseItem) => (
              <CaseCard key={caseItem.id} caseData={caseItem} />
            ))}
          </CardContent>
        </Card>

        <DocumentUpload />
      </div>

      {/* Right Sidebar */}
      <div className="space-y-6">
        <CalendarWidget />
        
        <Card>
          <CardHeader>
            <CardTitle className="arabic-text">إحصائيات سريعة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="arabic-text">القضايا النشطة</span>
              <span className="text-2xl font-bold text-tahkeem-blue-600">3</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="arabic-text">القضايا المكتملة</span>
              <span className="text-2xl font-bold text-green-600">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="arabic-text">الرسائل الجديدة</span>
              <span className="text-2xl font-bold text-tahkeem-gold-500">5</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
