
import { Card, CardContent } from "@/components/ui/card";

const Mission = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tahkeem-blue-900 arabic-text">
              رسالتنا
            </h2>
            <p className="text-xl text-gray-600 mb-8 arabic-text leading-relaxed">
              نسعى لتطوير نظام العدالة في المنطقة العربية من خلال تقديم حلول تقنية متطورة
              تجعل الخدمات القانونية أكثر سهولة وشفافية وعدالة للجميع.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-tahkeem-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-tahkeem-blue-900 mb-2 arabic-text text-lg">
                    الابتكار التقني
                  </h3>
                  <p className="text-gray-600 arabic-text">
                    استخدام أحدث التقنيات لتبسيط الإجراءات القانونية
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-tahkeem-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-tahkeem-blue-900 mb-2 arabic-text text-lg">
                    الشفافية والعدالة
                  </h3>
                  <p className="text-gray-600 arabic-text">
                    ضمان الشفافية في جميع الإجراءات وتحقيق العدالة للجميع
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-tahkeem-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-tahkeem-blue-900 mb-2 arabic-text text-lg">
                    إمكانية الوصول
                  </h3>
                  <p className="text-gray-600 arabic-text">
                    جعل الخدمات القانونية متاحة للجميع بسهولة وبتكلفة معقولة
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Card className="bg-gradient-to-br from-tahkeem-blue-50 to-tahkeem-gold-50 border-0 shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="text-6xl font-bold text-tahkeem-blue-600 mb-2">10,000+</div>
                  <p className="text-tahkeem-blue-900 arabic-text font-semibold">قضية تم حلها</p>
                </div>
                <div className="mb-6">
                  <div className="text-6xl font-bold text-tahkeem-gold-600 mb-2">500+</div>
                  <p className="text-tahkeem-blue-900 arabic-text font-semibold">محكم ووسيط معتمد</p>
                </div>
                <div>
                  <div className="text-6xl font-bold text-tahkeem-blue-600 mb-2">50+</div>
                  <p className="text-tahkeem-blue-900 arabic-text font-semibold">مؤسسة شريكة</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
