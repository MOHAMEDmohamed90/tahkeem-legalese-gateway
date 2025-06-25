
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, FileText, Users, AlertCircle, Clock, Globe } from 'lucide-react';

interface StepSixProps {
  form: UseFormReturn<any>;
}

const serviceLabels = {
  simulation: 'محاكاة الحكم',
  mediation: 'الوساطة',
  arbitration: 'التحكيم',
};

const domainLabels = {
  commercial: 'القانون التجاري',
  civil: 'القانون المدني',
  labor: 'قانون العمل',
  family: 'قانون الأسرة',
  'real-estate': 'قانون العقارات',
  intellectual: 'الملكية الفكرية',
  contracts: 'قانون العقود',
  banking: 'القانون المصرفي',
  insurance: 'قانون التأمين',
  other: 'أخرى',
};

const roleLabels = {
  plaintiff: 'المدعي',
  defendant: 'المدعى عليه',
  witness: 'شاهد',
};

const urgencyLabels = {
  low: 'منخفضة',
  medium: 'متوسطة',
  high: 'عالية',
};

const languageLabels = {
  arabic: 'العربية',
  english: 'الإنجليزية',
  both: 'كلا اللغتين',
};

export const StepSix: React.FC<StepSixProps> = ({ form }) => {
  const formData = form.getValues();

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <CheckCircle className="w-12 h-12 mx-auto text-green-600" />
        <h3 className="text-xl font-semibold arabic-text">مراجعة وإرسال القضية</h3>
        <p className="text-muted-foreground">
          راجع المعلومات قبل الإرسال النهائي
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 arabic-text">
            <FileText className="w-5 h-5" />
            معلومات الخدمة
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">نوع الخدمة:</span>
            <Badge variant="default">
              {serviceLabels[formData.serviceType as keyof typeof serviceLabels]}
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">المجال القانوني:</span>
            <span className="font-medium">
              {domainLabels[formData.legalDomain as keyof typeof domainLabels]}
            </span>
          </div>
          <div className="flex justify-between items-start">
            <span className="text-muted-foreground">عنوان القضية:</span>
            <span className="font-medium text-right max-w-[60%]">
              {formData.caseTitle}
            </span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 arabic-text">
            <Users className="w-5 h-5" />
            الأطراف المعنية
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {formData.parties?.map((party: any, index: number) => (
              <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium">{party.name}</p>
                  {party.contact && (
                    <p className="text-xs text-muted-foreground">{party.contact}</p>
                  )}
                </div>
                <Badge variant="outline">
                  {roleLabels[party.role as keyof typeof roleLabels]}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="arabic-text">تفاصيل النزاع</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h5 className="font-medium mb-2">وصف النزاع:</h5>
            <p className="text-sm text-muted-foreground text-right leading-relaxed">
              {formData.conflictDescription}
            </p>
          </div>
          <Separator />
          <div>
            <h5 className="font-medium mb-2">النتيجة المتوقعة:</h5>
            <p className="text-sm text-muted-foreground text-right leading-relaxed">
              {formData.expectedOutcome}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 arabic-text">
              <AlertCircle className="w-5 h-5" />
              مستوى الإلحاح
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Badge 
              variant={formData.urgency === 'high' ? 'destructive' : 
                     formData.urgency === 'medium' ? 'default' : 'secondary'}
            >
              {urgencyLabels[formData.urgency as keyof typeof urgencyLabels]}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 arabic-text">
              <Globe className="w-5 h-5" />
              اللغة المفضلة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="outline">
              {languageLabels[formData.preferredLanguage as keyof typeof languageLabels]}
            </Badge>
          </CardContent>
        </Card>
      </div>

      <Card className="border-green-200 bg-green-50/50">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
            <div className="space-y-2">
              <h5 className="font-medium text-green-900 arabic-text">
                جاهز للإرسال
              </h5>
              <p className="text-sm text-green-700">
                تم تعبئة جميع المعلومات المطلوبة بنجاح. سيتم مراجعة قضيتك والرد عليك خلال 24-48 ساعة.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
