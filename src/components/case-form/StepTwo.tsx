
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-react';

interface StepTwoProps {
  form: UseFormReturn<any>;
}

const legalDomains = [
  { value: 'commercial', label: 'القانون التجاري', labelEn: 'Commercial Law' },
  { value: 'civil', label: 'القانون المدني', labelEn: 'Civil Law' },
  { value: 'labor', label: 'قانون العمل', labelEn: 'Labor Law' },
  { value: 'family', label: 'قانون الأسرة', labelEn: 'Family Law' },
  { value: 'real-estate', label: 'قانون العقارات', labelEn: 'Real Estate Law' },
  { value: 'intellectual', label: 'الملكية الفكرية', labelEn: 'Intellectual Property' },
  { value: 'contracts', label: 'قانون العقود', labelEn: 'Contract Law' },
  { value: 'banking', label: 'القانون المصرفي', labelEn: 'Banking Law' },
  { value: 'insurance', label: 'قانون التأمين', labelEn: 'Insurance Law' },
  { value: 'other', label: 'أخرى', labelEn: 'Other' },
];

export const StepTwo: React.FC<StepTwoProps> = ({ form }) => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold arabic-text">تفاصيل القضية الأساسية</h3>
        <p className="text-muted-foreground">
          حدد المجال القانوني وعنوان القضية
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 arabic-text">
            المجال القانوني
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="w-4 h-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>اختر المجال القانوني الأنسب لقضيتك</p>
              </TooltipContent>
            </Tooltip>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormField
            control={form.control}
            name="legalDomain"
            render={({ field }) => (
              <FormItem>
                <FormLabel>نوع القضية *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر المجال القانوني" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {legalDomains.map((domain) => (
                      <SelectItem key={domain.value} value={domain.value}>
                        <div className="flex justify-between w-full">
                          <span>{domain.label}</span>
                          <span className="text-xs text-muted-foreground ml-2">
                            {domain.labelEn}
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

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 arabic-text">
            عنوان القضية
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="w-4 h-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>اكتب عنواناً واضحاً ومختصراً للقضية</p>
              </TooltipContent>
            </Tooltip>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormField
            control={form.control}
            name="caseTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>عنوان القضية *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="مثال: نزاع تجاري حول عقد الإيجار"
                    {...field}
                    className="text-right"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
      </Card>
    </div>
  );
};
