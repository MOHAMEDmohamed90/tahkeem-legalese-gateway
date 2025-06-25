
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "أحمد المحامي",
      title: "شريك في مكتب الأحكام القانونية",
      content: "منصة E-Tahkeem غيرت طريقة تعاملنا مع قضايا التحكيم. الواجهة سهلة الاستخدام والخدمة سريعة ومهنية.",
      rating: 5
    },
    {
      name: "فاطمة السالم",
      title: "مستشارة قانونية",
      content: "الوساطة من خلال هذه المنصة كانت تجربة ممتازة. تم حل النزاع بطريقة سلمية وفي وقت قياسي.",
      rating: 5
    },
    {
      name: "محمد التاجر",
      title: "رجل أعمال",
      content: "خدمة محاكاة الأحكام ساعدتني على فهم موقفي القانوني قبل اتخاذ قرارات مهمة. أنصح بها بشدة.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tahkeem-blue-900 arabic-text">
            آراء عملائنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text leading-relaxed">
            تعرف على تجارب عملائنا وكيف ساعدتهم منصة E-Tahkeem في حل قضاياهم القانونية
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-tahkeem-blue-50 to-white"
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-tahkeem-gold-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 arabic-text leading-relaxed text-lg italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-bold text-tahkeem-blue-900 arabic-text text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 arabic-text">
                    {testimonial.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
