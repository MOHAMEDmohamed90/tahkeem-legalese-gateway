
import { Card } from "@/components/ui/card";

const Partners = () => {
  const partners = [
    "مجلس القضاء الأعلى",
    "وزارة العدل",
    "نقابة المحامين",
    "غرفة التجارة",
    "جامعة الملك سعود",
    "مركز الرياض للتحكيم التجاري",
    "مؤسسة النقد العربي السعودي",
    "الهيئة العامة للاستثمار"
  ];

  return (
    <section className="py-20 px-4 gradient-section">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tahkeem-blue-900 arabic-text">
            شركاؤنا المتميزون
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text leading-relaxed">
            نفتخر بشراكتنا مع أفضل المؤسسات القانونية والحكومية في المنطقة
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {partners.map((partner, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm"
            >
              <div className="h-16 w-16 bg-tahkeem-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-tahkeem-blue-600 rounded"></div>
              </div>
              <h3 className="font-semibold text-tahkeem-blue-900 arabic-text text-sm">
                {partner}
              </h3>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 arabic-text">
            + أكثر من 100 مؤسسة وشركة شريكة أخرى
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
