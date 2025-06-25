
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { HelpCircle, Scale, Users, FileText } from 'lucide-react';

interface StepOneProps {
  form: UseFormReturn<any>;
}

const serviceOptions = [
  {
    value: 'simulation',
    title: 'محاكاة الحكم',
    titleEn: 'Judgment Simulation',
    description: 'محاكاة النتائج المحتملة للقضية قبل المضي قدماً',
    icon: FileText,
    features: ['تحليل سريع', 'توقع النتائج', 'تكلفة منخفضة'],
  },
  {
    value: 'mediation',
    title: 'الوساطة',
    titleEn: 'Mediation',
    description: 'حل النزاعات بمساعدة وسيط محايد',
    icon: Users,
    features: ['حل ودي', 'سرية تامة', 'تكلفة معقولة'],
  },
  {
    value: 'arbitration',
    title: 'التحكيم',
    titleEn: 'Arbitration',
    description: 'إصدار قرار ملزم من قبل محكم مختص',
    icon: Scale,
    features: ['قرار ملزم', 'سرعة في الإجراءات', 'خبرة متخصصة'],
  },
];

export const StepOne: React.FC<StepOneProps> = ({ form }) => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold arabic-text">اختر نوع الخدمة المطلوبة</h3>
        <p className="text-muted-foreground">
          حدد الخدمة الأنسب لحالتك القانونية
        </p>
      </div>

      <FormField
        control={form.control}
        name="serviceType"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid gap-4 md:grid-cols-3"
              >
                {serviceOptions.map((option) => (
                  <div key={option.value}>
                    <FormItem>
                      <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                        <FormControl>
                          <RadioGroupItem
                            value={option.value}
                            className="sr-only"
                          />
                        </FormControl>
                        <Card className="cursor-pointer transition-all hover:shadow-md">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <option.icon className="w-6 h-6 text-primary" />
                              <Tooltip>
                                <TooltipTrigger>
                                  <HelpCircle className="w-4 h-4 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">{option.description}</p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                            <CardTitle className="text-lg arabic-text">
                              {option.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                              {option.description}
                            </p>
                            <div className="space-y-1">
                              {option.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2 text-xs">
                                  <div className="w-1 h-1 bg-primary rounded-full" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </FormLabel>
                    </FormItem>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
