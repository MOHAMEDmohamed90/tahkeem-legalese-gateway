
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Languages, Calendar, Award, CheckCircle } from "lucide-react";

export const ArbitratorProfileCard = () => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <Avatar className="w-32 h-32">
              <AvatarImage src="/placeholder.svg" alt="Dr. Ahmed Al-Mansouri" />
              <AvatarFallback className="text-2xl">AA</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold arabic-text">
                د. أحمد المنصوري
              </h1>
              <CheckCircle className="w-6 h-6 text-green-500" />
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                محكم معتمد
              </Badge>
            </div>
            
            <p className="text-lg text-muted-foreground arabic-text">
              Dr. Ahmed Al-Mansouri
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="arabic-text">دبي، الإمارات العربية المتحدة</span>
              </div>
              <div className="flex items-center gap-2">
                <Languages className="w-4 h-4" />
                <span className="arabic-text">العربية، الإنجليزية، الفرنسية</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="arabic-text">15+ سنة خبرة</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-8">
        {/* Qualifications */}
        <div>
          <h3 className="text-xl font-semibold mb-4 arabic-text flex items-center gap-2">
            <Award className="w-5 h-5" />
            المؤهلات والشهادات
          </h3>
          <div className="space-y-3">
            <div className="p-4 bg-tahkeem-blue-50 rounded-lg">
              <h4 className="font-medium arabic-text">دكتوراه في القانون التجاري</h4>
              <p className="text-sm text-muted-foreground arabic-text">جامعة القاهرة - 2005</p>
            </div>
            <div className="p-4 bg-tahkeem-blue-50 rounded-lg">
              <h4 className="font-medium arabic-text">شهادة محكم معتمد</h4>
              <p className="text-sm text-muted-foreground arabic-text">المركز الدولي للتحكيم التجاري - 2008</p>
            </div>
            <div className="p-4 bg-tahkeem-blue-50 rounded-lg">
              <h4 className="font-medium arabic-text">عضو نقابة المحامين</h4>
              <p className="text-sm text-muted-foreground arabic-text">دولة الإمارات العربية المتحدة</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-xl font-semibold mb-4 arabic-text">الخبرة المهنية</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-tahkeem-blue-500 pl-4">
              <h4 className="font-medium arabic-text">محكم رئيسي</h4>
              <p className="text-sm text-muted-foreground arabic-text">
                أكثر من 200 قضية تحكيم في المنازعات التجارية والمالية
              </p>
            </div>
            <div className="border-l-4 border-tahkeem-blue-500 pl-4">
              <h4 className="font-medium arabic-text">مستشار قانوني</h4>
              <p className="text-sm text-muted-foreground arabic-text">
                خبرة واسعة في قانون الشركات والعقود التجارية
              </p>
            </div>
            <div className="border-l-4 border-tahkeem-blue-500 pl-4">
              <h4 className="font-medium arabic-text">وسيط معتمد</h4>
              <p className="text-sm text-muted-foreground arabic-text">
                تسوية أكثر من 150 نزاع من خلال الوساطة
              </p>
            </div>
          </div>
        </div>

        {/* Jurisdiction */}
        <div>
          <h3 className="text-xl font-semibold mb-4 arabic-text">مجالات التخصص</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="arabic-text">القانون التجاري</Badge>
            <Badge variant="outline" className="arabic-text">المنازعات المالية</Badge>
            <Badge variant="outline" className="arabic-text">عقود الإنشاءات</Badge>
            <Badge variant="outline" className="arabic-text">التحكيم الدولي</Badge>
            <Badge variant="outline" className="arabic-text">الملكية الفكرية</Badge>
            <Badge variant="outline" className="arabic-text">قانون الشركات</Badge>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4 arabic-text">نبذة شخصية</h3>
          <p className="text-muted-foreground arabic-text leading-relaxed">
            يتمتع الدكتور أحمد المنصوري بخبرة واسعة في مجال التحكيم والوساطة، حيث عمل كمحكم رئيسي في أكثر من 200 قضية تحكيم. 
            يحمل شهادة الدكتوراه في القانون التجاري ومعتمد من المركز الدولي للتحكيم التجاري. يتقن اللغتين العربية والإنجليزية، 
            كما يتحدث الفرنسية بطلاقة، مما يمكنه من التعامل مع القضايا المحلية والدولية بكفاءة عالية.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
