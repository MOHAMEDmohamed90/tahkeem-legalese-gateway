
import React, { useState } from 'react';
import { OnboardingLayout } from './OnboardingLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Users, 
  BarChart3, 
  CreditCard, 
  AlertTriangle, 
  Settings,
  CheckCircle,
  Globe,
  FileCheck,
  DollarSign
} from 'lucide-react';

const steps = [
  {
    title: "مرحباً بك كمدير نظام E-Tahkeem",
    subtitle: "الوصول الكامل لإدارة المنصة",
    content: "welcome"
  },
  {
    title: "لوحات الإدارة الرئيسية",
    subtitle: "تعرف على أدوات إدارة المنصة",
    content: "dashboards"
  },
  {
    title: "إدارة المستخدمين والتحقق",
    subtitle: "أدوات مراقبة وإدارة حسابات المستخدمين",
    content: "user-management"
  },
  {
    title: "إدارة المدفوعات والامتثال",
    subtitle: "مراقبة المعاملات المالية والامتثال القانوني",
    content: "payments-compliance"
  },
  {
    title: "أنت جاهز لإدارة المنصة",
    subtitle: "ابدأ في استخدام أدوات الإدارة",
    content: "completion"
  }
];

export const AdminOnboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
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
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center">
              <Shield className="w-12 h-12 text-red-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 arabic-text">{step.title}</h3>
              <p className="text-lg text-muted-foreground arabic-text leading-relaxed">
                لديك الآن صلاحيات إدارية كاملة لمراقبة وإدارة جميع جوانب منصة E-Tahkeem
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="w-12 h-12 mx-auto text-blue-600 mb-2" />
                <h4 className="font-semibold arabic-text">إدارة المستخدمين</h4>
                <p className="text-sm text-muted-foreground arabic-text">
                  مراقبة وإدارة حسابات جميع المستخدمين
                </p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <BarChart3 className="w-12 h-12 mx-auto text-green-600 mb-2" />
                <h4 className="font-semibold arabic-text">تقارير وإحصائيات</h4>
                <p className="text-sm text-muted-foreground arabic-text">
                  مراقبة أداء المنصة والإحصائيات
                </p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <CreditCard className="w-12 h-12 mx-auto text-purple-600 mb-2" />
                <h4 className="font-semibold arabic-text">إدارة المدفوعات</h4>
                <p className="text-sm text-muted-foreground arabic-text">
                  مراقبة المعاملات المالية
                </p>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <AlertTriangle className="w-12 h-12 mx-auto text-amber-600 mb-2" />
                <h4 className="font-semibold arabic-text">الامتثال والأمان</h4>
                <p className="text-sm text-muted-foreground arabic-text">
                  مراقبة الامتثال والأمان
                </p>
              </div>
            </div>
          </div>
        );

      case 'dashboards':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center arabic-text">{step.title}</h3>
            <div className="grid gap-4">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-6 h-6 text-blue-600" />
                      <CardTitle className="arabic-text">لوحة الإحصائيات العامة</CardTitle>
                    </div>
                    <Badge variant="secondary" className="arabic-text">رئيسية</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground arabic-text mb-3">
                    مراقبة KPIs الرئيسية للمنصة والنشاط اليومي
                  </p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-2 arabic-text">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      عدد القضايا النشطة والمكتملة
                    </li>
                    <li className="flex items-center gap-2 arabic-text">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      إحصائيات المستخدمين الجدد
                    </li>
                    <li className="flex items-center gap-2 arabic-text">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      الإيرادات والمعاملات المالية
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Users className="w-6 h-6 text-green-600" />
                      <CardTitle className="arabic-text">لوحة إدارة المستخدمين</CardTitle>
                    </div>
                    <Badge variant="secondary" className="arabic-text">أساسية</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground arabic-text mb-3">
                    إدارة شاملة لجميع أنواع المستخدمين
                  </p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-2 arabic-text">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      إدارة الأطراف والمحامين والمحكمين
                    </li>
                    <li className="flex items-center gap-2 arabic-text">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      عمليات التحقق والموافقة
                    </li>
                    <li className="flex items-center gap-2 arabic-text">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      إدارة الصلاحيات والأدوار
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Settings className="w-6 h-6 text-purple-600" />
                      <CardTitle className="arabic-text">لوحة إدارة النظام</CardTitle>
                    </div>
                    <Badge variant="secondary" className="arabic-text">متقدمة</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground arabic-text mb-3">
                    إعدادات النظام والتكوين المتقدم
                  </p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-2 arabic-text">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      إعدادات الأمان والحماية
                    </li>
                    <li className="flex items-center gap-2 arabic-text">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      إدارة النسخ الاحتياطية
                    </li>
                    <li className="flex items-center gap-2 arabic-text">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      تحديثات النظام والصيانة
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'user-management':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center arabic-text">{step.title}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileCheck className="w-6 h-6 text-blue-600" />
                    <CardTitle className="arabic-text">التحقق من الهوية</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground arabic-text text-sm">
                    مراجعة وموافقة طلبات التحقق من المحامين والمحكمين
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-amber-50 rounded">
                      <span className="text-sm arabic-text">طلبات التحقق المعلقة</span>
                      <Badge variant="secondary">12</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                      <span className="text-sm arabic-text">تم التحقق منها اليوم</span>
                      <Badge variant="secondary">8</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-green-600" />
                    <CardTitle className="arabic-text">إدارة الحسابات</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground arabic-text text-sm">
                    تعديل بيانات المستخدمين وإدارة الصلاحيات
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                      <span className="text-sm arabic-text">إجمالي المستخدمين</span>
                      <Badge variant="secondary">1,247</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-purple-50 rounded">
                      <span className="text-sm arabic-text">المستخدمون النشطون</span>
                      <Badge variant="secondary">892</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                    <CardTitle className="arabic-text">التحذيرات والمخالفات</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground arabic-text text-sm">
                    مراقبة الأنشطة المشبوهة والمخالفات
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                      <span className="text-sm arabic-text">تحذيرات جديدة</span>
                      <Badge variant="destructive">3</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                      <span className="text-sm arabic-text">تحت المراجعة</span>
                      <Badge variant="secondary">7</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Globe className="w-6 h-6 text-purple-600" />
                    <CardTitle className="arabic-text">الدعم متعدد اللغات</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground arabic-text text-sm">
                    إدارة المحتوى بالعربية والإنجليزية والفرنسية
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="arabic-text">العربية</Badge>
                    <Badge variant="outline">English</Badge>
                    <Badge variant="outline">Français</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'payments-compliance':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center arabic-text">{step.title}</h3>
            <div className="grid gap-4">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-6 h-6 text-green-600" />
                    <CardTitle className="arabic-text">مراقبة المدفوعات متعددة العملات</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground arabic-text mb-4">
                    مراقبة المعاملات المالية بالعملات المحلية والعالمية
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-muted/50 rounded">
                      <p className="text-lg font-bold">TND</p>
                      <p className="text-sm text-muted-foreground arabic-text">دينار تونسي</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded">
                      <p className="text-lg font-bold">DZD</p>
                      <p className="text-sm text-muted-foreground arabic-text">دينار جزائري</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded">
                      <p className="text-lg font-bold">MAD</p>
                      <p className="text-sm text-muted-foreground arabic-text">درهم مغربي</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-6 h-6 text-blue-600" />
                      <CardTitle className="arabic-text">تقرير المعاملات</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="arabic-text">معاملات اليوم</span>
                        <Badge variant="secondary">47</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="arabic-text">إجمالي الأسبوع</span>
                        <Badge variant="secondary">312</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="arabic-text">معاملات مشفرة</span>
                        <Badge variant="secondary">15%</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-purple-600" />
                      <CardTitle className="arabic-text">الامتثال القانوني</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="arabic-text">تقارير AML</span>
                        <Badge variant="outline" className="text-green-600">مطابق</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="arabic-text">KYC</span>
                        <Badge variant="outline" className="text-green-600">محدث</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="arabic-text">تدقيق شهري</span>
                        <Badge variant="outline" className="text-amber-600">قريباً</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
              <h3 className="text-2xl font-bold mb-4 arabic-text">أصبحت جاهزاً لإدارة المنصة!</h3>
              <p className="text-lg text-muted-foreground arabic-text leading-relaxed">
                لديك الآن الوصول الكامل لجميع أدوات الإدارة وإدارة منصة E-Tahkeem
              </p>
            </div>
            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="font-semibold mb-4 arabic-text">نصائح سريعة للبدء:</h4>
              <ul className="text-muted-foreground arabic-text space-y-2 text-sm">
                <li>• راجع لوحة الإحصائيات العامة يومياً</li>
                <li>• تحقق من طلبات التحقق المعلقة</li>
                <li>• راقب التحذيرات والتنبيهات الأمنية</li>
                <li>• راجع تقارير المدفوعات أسبوعياً</li>
              </ul>
              <Button className="arabic-text mt-4" onClick={() => window.location.href = '/dashboard'}>
                <Settings className="w-4 h-4 ml-2" />
                بدء إدارة المنصة
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
      nextLabel={currentStep === steps.length - 1 ? "بدء الإدارة" : "التالي"}
      title={steps[currentStep].title}
      subtitle={steps[currentStep].subtitle}
      showSkip={false}
    >
      {renderStepContent()}
    </OnboardingLayout>
  );
};
