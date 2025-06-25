
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "التسجيل",
      description: "قم بإنشاء حساب جديد وإكمال عملية التحقق"
    },
    {
      number: "02", 
      title: "اختيار الخدمة",
      description: "حدد نوع الخدمة المطلوبة (تحكيم، وساطة، أو محاكاة)"
    },
    {
      number: "03",
      title: "رفع المستندات",
      description: "قم برفع المستندات والملفات ذات الصلة بالقضية"
    },
    {
      number: "04",
      title: "اختيار المحكم/الوسيط",
      description: "اختر المحكم أو الوسيط المناسب من قائمة المعتمدين"
    },
    {
      number: "05",
      title: "متابعة القضية",
      description: "تابع سير القضية والجلسات من خلال المنصة"
    },
    {
      number: "06",
      title: "الحصول على النتيجة",
      description: "احصل على القرار النهائي والتقارير المفصلة"
    }
  ];

  return (
    <section className="py-20 px-4 gradient-section">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tahkeem-blue-900 arabic-text">
            كيف نعمل
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text leading-relaxed">
            عملية مبسطة وواضحة من البداية إلى النهاية لضمان أفضل تجربة للعملاء
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-tahkeem-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold english-text">
                  {step.number}
                </div>
                <CardTitle className="text-xl font-bold text-tahkeem-blue-900 arabic-text">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 arabic-text leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
