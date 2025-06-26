
import React, { useState } from 'react';
import { OnboardingLayout } from './OnboardingLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Scale, 
  Shield, 
  Award, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  BookOpen,
  Gavel
} from 'lucide-react';

const steps = [
  {
    title: "أهلاً وسهلاً بسعادة المحكم المحترم",
    subtitle: "نشكركم على انضمامكم لمنصة E-Tahkeem",
    content: "welcome"
  },
  {
    title: "التحقق من الهوية المهنية",
    subtitle: "أدخل بياناتك المهنية للتحقق من أهليتك",
    content: "verification"
  },
  {
    title: "مجالات الخبرة والتوفر",
    subtitle: "حدد تخصصاتك ومتى تكون متاحاً",
    content: "expertise"
  },
  {
    title: "المبادئ الأخلاقية ومعايير الاختيار",
    subtitle: "اطلع على القواعد والمعايير المهنية",
    content: "ethics"
  },
  {
    title: "مرحباً بك في مجتمع المحكمين",
    subtitle: "أصبحت جاهزاً لممارسة دورك كمحكم",
    content: "completion"
  }
];

export const JudgeOnboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    formerCourt: '',
    yearsOfService: '',
    retirementYear: '',
    expertise: '',
    availability: 'full',
    specialization: '',
    bio: ''
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('Judge profile data:', formData);
      window.location.href = '/dashboard';
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    const step = steps[currentStep];

    switch (step.content) {
      case 'welcome':
        return (
          <div className="text-center space-y-6">
            <div className="w-28 h-28 mx-auto bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center">
              <Gavel className="w-14 h-14 text-purple-700" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 arabic-text">{step.title}</h3>
              <p className="text-lg text-muted-foreground arabic-text leading-relaxed">
                نحن فخورون بانضمامكم إلى منصة E-Tahkeem كمحكم معتمد. خبرتكم القضائية ستساهم في تحقيق العدالة الرقمية
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Scale className="w-10 h-10 mx-auto text-purple-600 mb-2" />
                <h4 className="font-semibold arabic-text text-lg">العدالة</h4>
                <p className="text-sm text-muted-foreground arabic-text">
                  قرارات عادلة ومتوازنة
                </p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Shield className="w-10 h-10 mx-auto text-blue-600 mb-2" />
                <h4 className="font-semibold arabic-text text-lg">النزاهة</h4>
                <p className="text-sm text-muted-foreground arabic-text">
                  أعلى معايير المهنية
                </p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Award className="w-10 h-10 mx-auto text-green-600 mb-2" />
                <h4 className="font-semibold arabic-text text-lg">الخبرة</h4>
                <p className="text-sm text-muted-foreground arabic-text">
                  سنوات من التجربة القضائية
                </p>
              </div>
            </div>
          </div>
        );

      case 'verification':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center arabic-text">{step.title}</h3>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                <div>
                  <p className="text-sm text-amber-800 arabic-text">
                    سيتم التحقق من جميع البيانات المدخلة مع الجهات المختصة لضمان الشفافية والمصداقية
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="formerCourt" className="arabic-text text-base">المحكمة السابقة *</Label>
                <Input
                  id="formerCourt"
                  value={formData.formerCourt}
                  onChange={(e) => setFormData({...formData, formerCourt: e.target.value})}
                  placeholder="مثال: محكمة النقض - دبي"
                  className="text-right text-base"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="yearsOfService" className="arabic-text text-base">سنوات الخدمة القضائية *</Label>
                  <Input
                    id="yearsOfService"
                    value={formData.yearsOfService}
                    onChange={(e) => setFormData({...formData, yearsOfService: e.target.value})}
                    placeholder="مثال: 25 سنة"
                    className="text-right text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="retirementYear" className="arabic-text text-base">سنة التقاعد *</Label>
                  <Input
                    id="retirementYear"
                    value={formData.retirementYear}
                    onChange={(e) => setFormData({...formData, retirementYear: e.target.value})}
                    placeholder="مثال: 2020"
                    className="text-right text-base"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialization" className="arabic-text text-base">التخصص القضائي الرئيسي *</Label>
                <Input
                  id="specialization"
                  value={formData.specialization}
                  onChange={(e) => setFormData({...formData, specialization: e.target.value})}
                  placeholder="مثال: القضايا التجارية والمدنية"
                  className="text-right text-base"
                />
              </div>
            </div>
          </div>
        );

      case 'expertise':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center arabic-text">{step.title}</h3>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <Label className="arabic-text text-base">مدى التوفر للعمل كمحكم *</Label>
                <RadioGroup
                  value={formData.availability}
                  onValueChange={(value) => setFormData({...formData, availability: value})}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2 space-x-reverse p-4 border rounded-lg">
                    <RadioGroupItem value="full" id="full" />
                    <div className="flex-1">
                      <label htmlFor="full" className="text-base font-medium arabic-text cursor-pointer">
                        متوفر بدوام كامل
                      </label>
                      <p className="text-sm text-muted-foreground arabic-text">
                        يمكنني قبول قضايا متعددة والعمل بشكل مستمر
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 space-x-reverse p-4 border rounded-lg">
                    <RadioGroupItem value="partial" id="partial" />
                    <div className="flex-1">
                      <label htmlFor="partial" className="text-base font-medium arabic-text cursor-pointer">
                        متوفر بدوام جزئي
                      </label>
                      <p className="text-sm text-muted-foreground arabic-text">
                        يمكنني قبول عدد محدود من القضايا شهرياً
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 space-x-reverse p-4 border rounded-lg">
                    <RadioGroupItem value="limited" id="limited" />
                    <div className="flex-1">
                      <label htmlFor="limited" className="text-base font-medium arabic-text cursor-pointer">
                        متوفر حسب الحاجة
                      </label>
                      <p className="text-sm text-muted-foreground arabic-text">
                        يمكنني قبول القضايا المعقدة أو المتخصصة فقط
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="expertise" className="arabic-text text-base">مجالات الخبرة المتخصصة</Label>
                <Textarea
                  id="expertise"
                  value={formData.expertise}
                  onChange={(e) => setFormData({...formData, expertise: e.target.value})}
                  placeholder="اذكر المجالات القانونية التي تملك فيها خبرة عميقة..."
                  className="text-right min-h-[120px] text-base"
                />
              </div>
            </div>
          </div>
        );

      case 'ethics':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center arabic-text">{step.title}</h3>
            
            <div className="space-y-4">
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                    <CardTitle className="arabic-text">مبادئ التحكيم الأساسية</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <p className="text-sm arabic-text">الحياد التام والاستقلالية في اتخاذ القرارات</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <p className="text-sm arabic-text">السرية المطلقة لجميع معلومات القضية</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <p className="text-sm arabic-text">العدالة والمساواة بين جميع الأطراف</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <p className="text-sm arabic-text">الإفصاح عن أي تضارب محتمل في المصالح</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-purple-600" />
                    <CardTitle className="arabic-text">معايير الاختيار</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <p className="text-sm arabic-text">الخبرة في المجال القانوني للقضية</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <p className="text-sm arabic-text">التوفر لإنجاز القضية في الوقت المحدد</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <p className="text-sm arabic-text">عدم وجود تضارب في المصالح</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <p className="text-sm arabic-text">الموافقة من جميع الأطراف المتنازعة</p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground arabic-text leading-relaxed">
                  بالمتابعة، أؤكد التزامي بجميع المبادئ الأخلاقية ومعايير الاختيار المذكورة أعلاه، 
                  وأتعهد بممارسة دوري كمحكم بأعلى مستويات المهنية والنزاهة.
                </p>
              </div>
            </div>
          </div>
        );

      case 'completion':
        return (
          <div className="text-center space-y-6">
            <div className="w-28 h-28 mx-auto bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
              <CheckCircle className="w-14 h-14 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 arabic-text">أهلاً بك في مجتمع محكمي E-Tahkeem</h3>
              <p className="text-lg text-muted-foreground arabic-text leading-relaxed">
                تم تسجيل بياناتك بنجاح. سيتم مراجعة ملفك والتواصل معك خلال 24 ساعة لاستكمال عملية التحقق
              </p>
            </div>
            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="font-semibold mb-2 arabic-text text-lg">الخطوات التالية:</h4>
              <ul className="text-muted-foreground arabic-text space-y-2 text-base">
                <li>• مراجعة المستندات والتحقق من البيانات</li>
                <li>• إعداد ملفك الشخصي على المنصة</li>
                <li>• بدء استقبال طلبات التحكيم</li>
              </ul>
              <Button className="arabic-text mt-4 text-base px-8 py-3" onClick={() => window.location.href = '/dashboard'}>
                <Scale className="w-5 h-5 ml-2" />
                انتقل إلى لوحة التحكم
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <OnboardingLayout
      currentStep={currentStep}
      totalSteps={steps.length}
      onNext={handleNext}
      onPrevious={handlePrevious}
      nextLabel={currentStep === steps.length - 1 ? "إنهاء التسجيل" : "التالي"}
      title={steps[currentStep].title}
      subtitle={steps[currentStep].subtitle}
      showSkip={false}
      canGoNext={currentStep === 1 ? Boolean(formData.formerCourt && formData.yearsOfService && formData.retirementYear && formData.specialization) : true}
    >
      {renderStepContent()}
    </OnboardingLayout>
  );
};
