
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { HelpCircle, AlertCircle, Clock, Globe } from 'lucide-react';

interface StepFourProps {
  form: UseFormReturn<any>;
}

const urgencyLevels = [
  { value: 'low', label: 'منخفضة', labelEn: 'Low', color: 'text-green-600' },
  { value: 'medium', label: 'متوسطة', labelEn: 'Medium', color: 'text-yellow-600' },
  { value: 'high', label: 'عالية', labelEn: 'High', color: 'text-red-600' },
];

const languages = [
  { value: 'arabic', label: 'العربية', labelEn: 'Arabic' },
  { value: 'english', label: 'الإنجليزية', labelEn: 'English' },
  { value: 'both', label: 'كلا اللغتين', labelEn: 'Both' },
];

export const StepFour: React.FC<StepFourProps> = ({ form }) => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold arabic-text">تفاصيل النزاع</h3>
        <p className="text-muted-foreground">
          اشرح تفاصيل النزاع والنتيجة المتوقعة
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 arabic-text">
            وصف النزاع
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="w-4 h-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>اشرح تفاصيل النزاع بوضوح مع ذكر الوقائع والأسباب</p>
              </TooltipContent>
            </Tooltip>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormField
            control={form.control}
            name="conflictDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>تفاصيل النزاع *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="اشرح تفاصيل النزاع، الوقائع، الأسباب، والخلفية..."
                    className="min-h-[120px] text-right"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 arabic-text">
            النتيجة المتوقعة
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="w-4 h-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>ما هي النتيجة التي تتوقعها أو تسعى للحصول عليها؟</p>
              </TooltipContent>
            </Tooltip>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormField
            control={form.control}
            name="expectedOutcome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>النتيجة المرجوة *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="اشرح النتيجة التي تسعى للحصول عليها من هذه القضية..."
                    className="min-h-[80px] text-right"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 arabic-text">
              <Clock className="w-5 h-5" />
              مستوى الإلحاح
            </CardTitle>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="urgency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>درجة الأولوية</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {urgencyLevels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          <div className="flex items-center justify-between w-full">
                            <span>{level.label}</span>
                            <AlertCircle className={`w-4 h-4 ml-2 ${level.color}`} />
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <FormField
              control={form.control}
              name="preferredLanguage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>لغة التواصل</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.value} value={lang.value}>
                          <div className="flex justify-between w-full">
                            <span>{lang.label}</span>
                            <span className="text-xs text-muted-foreground ml-2">
                              {lang.labelEn}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
