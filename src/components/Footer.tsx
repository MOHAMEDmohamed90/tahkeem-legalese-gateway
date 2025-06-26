
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-tahkeem-blue-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* CTA Section */}
        <div className="text-center mb-16 py-12 border-b border-tahkeem-blue-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 arabic-text">
            ابدأ رحلتك القانونية معنا اليوم
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto arabic-text leading-relaxed">
            انضم إلى آلاف العملاء الذين يثقون في منصة E-Tahkeem لحل قضاياهم القانونية
          </p>
          <Button 
            size="lg" 
            className="bg-tahkeem-gold-500 hover:bg-tahkeem-gold-600 text-white px-12 py-4 text-xl font-semibold arabic-text transition-all duration-300 transform hover:scale-105"
          >
              <Link to="/auth">إنشاء حساب مجاني</Link>
          </Button>
        </div>

        {/* Footer Links */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 arabic-text">E-Tahkeem</h3>
            <p className="text-tahkeem-blue-200 arabic-text leading-relaxed">
              منصة رائدة في مجال الخدمات القانونية الرقمية في الشرق الأوسط
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 arabic-text">الخدمات</h4>
            <ul className="space-y-2 text-tahkeem-blue-200">
              <li><a href="#" className="hover:text-white transition-colors arabic-text">التحكيم</a></li>
              <li><a href="#" className="hover:text-white transition-colors arabic-text">الوساطة</a></li>
              <li><a href="#" className="hover:text-white transition-colors arabic-text">محاكاة الأحكام</a></li>
              <li><a href="#" className="hover:text-white transition-colors arabic-text">الاستشارات القانونية</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 arabic-text">الشركة</h4>
            <ul className="space-y-2 text-tahkeem-blue-200">
              <li><a href="#" className="hover:text-white transition-colors arabic-text">من نحن</a></li>
              <li><a href="#" className="hover:text-white transition-colors arabic-text">فريق العمل</a></li>
              <li><a href="#" className="hover:text-white transition-colors arabic-text">الأخبار</a></li>
              <li><a href="#" className="hover:text-white transition-colors arabic-text">وظائف</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 arabic-text">الدعم</h4>
            <ul className="space-y-2 text-tahkeem-blue-200">
              <li><a href="#" className="hover:text-white transition-colors arabic-text">مركز المساعدة</a></li>
              <li><a href="#" className="hover:text-white transition-colors arabic-text">تواصل معنا</a></li>
              <li><a href="#" className="hover:text-white transition-colors arabic-text">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-white transition-colors arabic-text">الدعم الفني</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-tahkeem-blue-700 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-tahkeem-blue-200 arabic-text">
              © 2024 E-Tahkeem. جميع الحقوق محفوظة
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-tahkeem-blue-200 hover:text-white transition-colors arabic-text">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-tahkeem-blue-200 hover:text-white transition-colors arabic-text">
                شروط الاستخدام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
