
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageSquare, Flag } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "التحكيم",
      titleEn: "Arbitration",
      description: "حلول التحكيم الرقمية مع محكمين معتمدين وإجراءات مبسطة وآمنة",
      features: ["محكمون معتمدون", "إجراءات رقمية", "أمان عالي", "سرعة في البت"]
    },
    {
      icon: MessageSquare,
      title: "الوساطة",
      titleEn: "Mediation",
      description: "خدمات الوساطة المهنية لحل النزاعات بطريقة ودية وفعالة",
      features: ["وسطاء مؤهلون", "حلول مرنة", "سرية تامة", "توفير في التكلفة"]
    },
    {
      icon: Flag,
      title: "محاكاة الأحكام",
      titleEn: "Judgment Simulation",
      description: "تقنيات متطورة لمحاكاة الأحكام القضائية ومساعدة اتخاذ القرارات",
      features: ["ذكاء اصطناعي", "تحليل قانوني", "توقع النتائج", "استشارات فورية"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tahkeem-blue-900 arabic-text">
            خدماتنا المتميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text leading-relaxed">
            نقدم مجموعة شاملة من الخدمات القانونية الرقمية لتلبية احتياجاتكم المتنوعة
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-tahkeem-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-tahkeem-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-tahkeem-blue-900 arabic-text">
                  {service.title}
                </CardTitle>
                <p className="text-sm text-gray-500 english-text font-medium">
                  {service.titleEn}
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 arabic-text leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-tahkeem-blue-700 arabic-text font-medium">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
