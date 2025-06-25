
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StepOne } from './case-form/StepOne';
import { StepTwo } from './case-form/StepTwo';
import { StepThree } from './case-form/StepThree';
import { StepFour } from './case-form/StepFour';
import { StepFive } from './case-form/StepFive';
import { StepSix } from './case-form/StepSix';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const formSchema = z.object({
  serviceType: z.enum(['simulation', 'mediation', 'arbitration']),
  legalDomain: z.string().min(1, 'يرجى اختيار المجال القانوني'),
  caseTitle: z.string().min(5, 'يجب أن يكون عنوان القضية 5 أحرف على الأقل'),
  parties: z.array(z.object({
    name: z.string().min(1, 'الاسم مطلوب'),
    role: z.enum(['plaintiff', 'defendant', 'witness']),
    contact: z.string().optional(),
  })).min(2, 'يجب إضافة طرفين على الأقل'),
  conflictDescription: z.string().min(50, 'يجب أن يكون وصف النزاع 50 حرف على الأقل'),
  expectedOutcome: z.string().min(20, 'يرجى وصف النتيجة المتوقعة'),
  documents: z.array(z.any()).optional(),
  urgency: z.enum(['low', 'medium', 'high']),
  preferredLanguage: z.enum(['arabic', 'english', 'both']),
});

type FormData = z.infer<typeof formSchema>;

const steps = [
  { id: 1, title: 'نوع الخدمة', titleEn: 'Service Type' },
  { id: 2, title: 'تفاصيل القضية', titleEn: 'Case Details' },
  { id: 3, title: 'الأطراف المعنية', titleEn: 'Involved Parties' },
  { id: 4, title: 'تفاصيل النزاع', titleEn: 'Conflict Details' },
  { id: 5, title: 'المستندات', titleEn: 'Documents' },
  { id: 6, title: 'المراجعة والإرسال', titleEn: 'Review & Submit' },
];

export const CaseSubmissionForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceType: 'mediation',
      parties: [],
      documents: [],
      urgency: 'medium',
      preferredLanguage: 'arabic',
    },
  });

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await form.trigger(fieldsToValidate);
    
    if (isValid && currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getFieldsForStep = (step: number): (keyof FormData)[] => {
    switch (step) {
      case 1: return ['serviceType'];
      case 2: return ['legalDomain', 'caseTitle'];
      case 3: return ['parties'];
      case 4: return ['conflictDescription', 'expectedOutcome'];
      case 5: return [];
      case 6: return [];
      default: return [];
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      // Handle successful submission
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <StepOne form={form} />;
      case 2: return <StepTwo form={form} />;
      case 3: return <StepThree form={form} />;
      case 4: return <StepFour form={form} />;
      case 5: return <StepFive form={form} />;
      case 6: return <StepSix form={form} />;
      default: return null;
    }
  };

  const progress = (currentStep / steps.length) * 100;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl arabic-text text-center">
            تقديم قضية جديدة
          </CardTitle>
          <div className="space-y-4">
            <Progress value={progress} className="w-full" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>الخطوة {currentStep} من {steps.length}</span>
              <span>{steps[currentStep - 1]?.title}</span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {renderStep()}
              
              <div className="flex justify-between pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  السابق
                </Button>
                
                {currentStep < steps.length ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-2"
                  >
                    التالي
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2"
                  >
                    {isSubmitting ? 'جاري الإرسال...' : 'إرسال القضية'}
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
