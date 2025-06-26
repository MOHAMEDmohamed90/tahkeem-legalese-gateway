import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
const Hero = () => {
  return <section className="gradient-hero text-white py-20 px-4 text-center">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 arabic-text">
            E-Tahkeem
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 arabic-text">
            منصة التحكيم القانونية الرقمية
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed arabic-text">
            حلول قانونية متطورة للتحكيم والوساطة ومحاكاة الأحكام القضائية بأحدث التقنيات
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-tahkeem-gold-500 hover:bg-tahkeem-gold-600 text-white px-8 py-4 text-lg font-semibold arabic-text transition-all duration-300 transform hover:scale-105">
              <Link to="/auth">لوحة التحكم</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white hover:bg-white hover:text-tahkeem-blue-900 px-8 py-4 text-lg font-semibold arabic-text transition-all duration-300 text-slate-700">
              اكتشف المزيد
            </Button>
          </div>
          <div className="text-center">
            <ArrowDown className="mx-auto h-8 w-8 animate-bounce opacity-70" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;