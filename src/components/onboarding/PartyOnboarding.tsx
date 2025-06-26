
import React, { useState } from 'react';
import { OnboardingLayout } from './OnboardingLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Users, 
  Scale, 
  Upload, 
  MessageSquare, 
  BarChart3,
  CheckCircle,
  Play
} from 'lucide-react';

const steps = [
  {
    title: "مرحباً بك في E-Tahkeem",
    subtitle: "منصتك الرقمية للحلول القانونية",
    content: "welcome"
  },
  {
    title: "أنواع الخدمات المتاحة",
    subtitle: "اختر الخدمة الأنسب لحالتك",
    content: "services"
  },
  {
    title: "كيفية بدء قضية جديدة",
    subtitle: "خطوات بسيطة لتقديم قضيتك",
    content: "case-creation"
  },
  {
    title: "التواصل والمتابعة",
    subtitle: "ابق على اطلاع دائم بقضيتك",
    content: "communication"
  },
  {
    title: "ابدأ رحلتك القانونية",
    subtitle: "كل شيء جاهز الآن",
    content: "completion"
  }
];

export const PartyOnboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Navigate to dashboard or case creation
      window.location.href = '/case-submission';
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
            <div className="w-24 h-24 mx-auto bg-tahkeem-blue-100 rounded-full flex items-center justify-center">
              <Scale className="w-12 h-12 text-tahkeem-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 arabic-text">{step.title}</h3>
              <p className="text-lg text-muted-foreground arabic-text leading-relaxed">
                نحن هنا لمساعدتك في حل قضاياك القانونية بطريقة سريعة وآمنة ومناسبة التكلفة
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-sm arabic-text">سريع وآمن</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-sm arabic-text">خبراء قانونيون</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-2">
                  <Scale className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-sm arabic-text">قرارات عادلة</p>
              </div>
            </div>
          </div>
        );

      case 'services':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center arabic-text">{step.title}</h3>
            <div className="grid gap-4">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-blue-600" />
                    <CardTitle className="arabic-text">محاكاة الحكم</CardTitle>
                    <Badge variant="secondary" className="arabic-text">سريع</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground arabic-text">
                    احصل على تقييم سريع لقضيتك وتوقع النتائج المحتملة قبل المضي قدماً
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-green-600" />
                    <CardTitle className="arabic-text">الوساطة</CardTitle>
                    <Badge variant="secondary" className="arabic-text">ودي</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground arabic-text">
                    حل النزاع بمساعدة وسيط محايد للوصول إلى اتفاق مقبول من جميع الأطراف
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Scale className="w-6 h-6 text-purple-600" />
                    <CardTitle className="arabic-text">التحكيم</CardTitle>
                    <Badge variant="secondary" className="arabic-text">ملزم</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground arabic-text">
                    قرار نهائي وملزم من محكم مختص في المجال القانوني لقضيتك
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'case-creation':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center arabic-text">{step.title}</h3>
            <div className="grid gap-4">
              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="w-8 h-8 bg-tahkeem-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold arabic-text mb-1">اختر نوع الخدمة</h4>
                  <p className="text-sm text-muted-foreground arabic-text">
                    حدد ما إذا كنت تريد محاكاة أو وساطة أو تحكيم
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="w-8 h-8 bg-tahkeem-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold arabic-text mb-1">أدخل تفاصيل القضية</h4>
                  <p className="text-sm text-muted-foreground arabic-text">
                    املأ المعلومات الأساسية ووصف النزاع
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="w-8 h-8 bg-tahkeem-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <h4 className="font-semibold arabic-text mb-1">ارفع المستندات</h4>
                    <p className="text-sm text-muted-foreground arabic-text">
                      أضف الوثائق والأدلة المطلوبة
                    </p>
                  </div>
                  <Upload className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="w-8 h-8 bg-tahkeem-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold arabic-text mb-1">ادفع الرسوم</h4>
                  <p className="text-sm text-muted-foreground arabic-text">
                    اختر طريقة الدفع المناسبة وأكمل العملية
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'communication':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center arabic-text">{step.title}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                    <CardTitle className="arabic-text">التواصل الآمن</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground arabic-text mb-4">
                    تواصل مع المحامين والمحكمين بشكل مباشر وآمن
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 arabic-text">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      رسائل مشفرة
                    </li>
                    <li className="flex items-center gap-2 arabic-text">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      إشعارات فورية
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                    <CardTitle className="arabic-text">متابعة التقدم</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground arabic-text mb-4">
                    تابع حالة قضيتك في الوقت الفعلي
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 arabic-text">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      تحديثات مباشرة
                    </li>
                    <li className="flex items-center gap-2 arabic-text">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      تقارير دورية
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'completion':
        return (
          <div className="text-center space-y-6">
            <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 arabic-text">مرحباً بك في E-Tahkeem!</h3>
              <p className="text-lg text-muted-foreground arabic-text leading-relaxed">
                أصبحت جاهزاً الآن لبدء رحلتك القانونية معنا
              </p>
            </div>
            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="font-semibold mb-2 arabic-text">الخطوة التالية:</h4>
              <p className="text-muted-foreground arabic-text mb-4">
                ابدأ بإنشاء قضيتك الأولى أو تصفح الخدمات المتاحة
              </p>
              <Button className="arabic-text" onClick={() => window.location.href = '/case-submission'}>
                <Play className="w-4 h-4 ml-2" />
                إنشاء قضية جديدة
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
      nextLabel={currentStep === steps.length - 1 ? "ابدأ الآن" : "التالي"}
      title={steps[currentStep].title}
      subtitle={steps[currentStep].subtitle}
      showSkip={currentStep < steps.length - 2}
      onSkip={() => window.location.href = '/dashboard'}
    >
      {renderStepContent()}
    </OnboardingLayout>
  );
};
