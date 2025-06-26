
import React, { useState } from 'react';
import { OnboardingLayout } from './OnboardingLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  GraduationCap, 
  Globe, 
  Scale, 
  Calendar, 
  MessageSquare, 
  FileText,
  CheckCircle,
  Upload,
  User
} from 'lucide-react';

const steps = [
  {
    title: "مرحباً بك أيها المحامي المحترم",
    subtitle: "انضم إلى شبكة المحامين المتميزين",
    content: "welcome"
  },
  {
    title: "إعداد ملفك المهني",
    subtitle: "أضف مؤهلاتك وخبراتك القانونية",
    content: "profile-setup"
  },
  {
    title: "تخصصاتك ولغاتك",
    subtitle: "حدد مجالات خبرتك واللغات التي تتقنها",
    content: "specializations"
  },
  {
    title: "أدوات المحامي الرقمية",
    subtitle: "تعرف على الأدوات المتاحة لك",
    content: "tools"
  },
  {
    title: "ابدأ ممارسة عملك",
    subtitle: "أصبحت جاهزاً لاستقبال القضايا",
    content: "completion"
  }
];

export const LawyerOnboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    barNumber: '',
    experience: '',
    bio: '',
    specializations: [] as string[],
    languages: [] as string[],
    jurisdiction: ''
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Save profile and navigate to dashboard
      console.log('Lawyer profile data:', formData);
      window.location.href = '/dashboard';
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const specializations = [
    'القانون التجاري',
    'القانون المدني',
    'قانون العمل',
    'قانون الأسرة',
    'قانون العقارات',
    'الملكية الفكرية',
    'قانون العقود',
    'القانون المصرفي'
  ];

  const languages = ['العربية', 'الإنجليزية', 'الفرنسية', 'الإسبانية'];

  const renderStepContent = () => {
    const step = steps[currentStep];

    switch (step.content) {
      case 'welcome':
        return (
          <div className="text-center space-y-6">
            <div className="w-24 h-24 mx-auto bg-tahkeem-blue-100 rounded-full flex items-center justify-center">
              <GraduationCap className="w-12 h-12 text-tahkeem-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 arabic-text">{step.title}</h3>
              <p className="text-lg text-muted-foreground arabic-text leading-relaxed">
                انضم إلى منصة E-Tahkeem وساعد العملاء في حل قضاياهم القانونية بكفاءة ومهنية عالية
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Scale className="w-12 h-12 mx-auto text-blue-600 mb-2" />
                <h4 className="font-semibold arabic-text">قضايا متنوعة</h4>
                <p className="text-sm text-muted-foreground arabic-text">
                  وساطة، تحكيم، ومحاكاة أحكام
                </p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Globe className="w-12 h-12 mx-auto text-green-600 mb-2" />
                <h4 className="font-semibold arabic-text">عملاء دوليون</h4>
                <p className="text-sm text-muted-foreground arabic-text">
                  من جميع أنحاء الشرق الأوسط
                </p>
              </div>
            </div>
          </div>
        );

      case 'profile-setup':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center arabic-text">{step.title}</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="barNumber" className="arabic-text">رقم العضوية في نقابة المحامين *</Label>
                <Input
                  id="barNumber"
                  value={formData.barNumber}
                  onChange={(e) => setFormData({...formData, barNumber: e.target.value})}
                  placeholder="أدخل رقم العضوية"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience" className="arabic-text">سنوات الخبرة *</Label>
                <Input
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  placeholder="مثال: 10 سنوات"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="jurisdiction" className="arabic-text">الولاية القضائية *</Label>
                <Input
                  id="jurisdiction"
                  value={formData.jurisdiction}
                  onChange={(e) => setFormData({...formData, jurisdiction: e.target.value})}
                  placeholder="مثال: الإمارات العربية المتحدة"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio" className="arabic-text">نبذة مهنية</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => setFormData({...formData, bio: e.target.value})}
                  placeholder="اكتب نبذة مختصرة عن خبرتك وتخصصاتك..."
                  className="text-right min-h-[100px]"
                />
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Upload className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium arabic-text">المستندات المطلوبة</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="arabic-text">• شهادة العضوية في نقابة المحامين</li>
                  <li className="arabic-text">• شهادة التخرج في القانون</li>
                  <li className="arabic-text">• شهادات الخبرة (اختياري)</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'specializations':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center arabic-text">{step.title}</h3>
            
            <div className="space-y-4">
              <div>
                <Label className="arabic-text mb-3 block">التخصصات القانونية *</Label>
                <div className="grid grid-cols-2 gap-3">
                  {specializations.map((spec) => (
                    <div key={spec} className="flex items-center space-x-2 space-x-reverse">
                      <Checkbox
                        id={spec}
                        checked={formData.specializations.includes(spec)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setFormData({
                              ...formData,
                              specializations: [...formData.specializations, spec]
                            });
                          } else {
                            setFormData({
                              ...formData,
                              specializations: formData.specializations.filter(s => s !== spec)
                            });
                          }
                        }}
                      />
                      <label htmlFor={spec} className="text-sm arabic-text">
                        {spec}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="arabic-text mb-3 block">اللغات *</Label>
                <div className="grid grid-cols-2 gap-3">
                  {languages.map((lang) => (
                    <div key={lang} className="flex items-center space-x-2 space-x-reverse">
                      <Checkbox
                        id={lang}
                        checked={formData.languages.includes(lang)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setFormData({
                              ...formData,
                              languages: [...formData.languages, lang]
                            });
                          } else {
                            setFormData({
                              ...formData,
                              languages: formData.languages.filter(l => l !== lang)
                            });
                          }
                        }}
                      />
                      <label htmlFor={lang} className="text-sm arabic-text">
                        {lang}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'tools':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center arabic-text">{step.title}</h3>
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <CardTitle className="arabic-text">تقويم القضايا</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground arabic-text">
                    إدارة مواعيدك وجلساتك القانونية بسهولة
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                    <CardTitle className="arabic-text">التواصل الآمن</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground arabic-text">
                    تواصل مع العملاء والمحكمين بشكل مشفر وآمن
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-purple-600" />
                    <CardTitle className="arabic-text">إدارة الملفات</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground arabic-text">
                    تنظيم وإدارة مستندات القضايا بكل سهولة
                  </p>
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
              <h3 className="text-2xl font-bold mb-4 arabic-text">مرحباً بك في فريق E-Tahkeem!</h3>
              <p className="text-lg text-muted-foreground arabic-text leading-relaxed">
                تم إعداد ملفك المهني بنجاح. أصبحت جاهزاً لاستقبال القضايا والعمل مع العملاء
              </p>
            </div>
            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="font-semibold mb-2 arabic-text">الخطوة التالية:</h4>
              <p className="text-muted-foreground arabic-text mb-4">
                ستصلك إشعارات بالقضايا المناسبة لتخصصاتك
              </p>
              <Button className="arabic-text" onClick={() => window.location.href = '/dashboard'}>
                <User className="w-4 h-4 ml-2" />
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
      nextLabel={currentStep === steps.length - 1 ? "ابدأ العمل" : "التالي"}
      title={steps[currentStep].title}
      subtitle={steps[currentStep].subtitle}
      showSkip={currentStep < steps.length - 2}
      onSkip={() => window.location.href = '/dashboard'}
      canGoNext={currentStep === 1 ? formData.barNumber && formData.experience && formData.jurisdiction : true}
    >
      {renderStepContent()}
    </OnboardingLayout>
  );
};
