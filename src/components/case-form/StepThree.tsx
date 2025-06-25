
import React from 'react';
import { UseFormReturn, useFieldArray } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { HelpCircle, Plus, Trash2, User } from 'lucide-react';

interface StepThreeProps {
  form: UseFormReturn<any>;
}

const partyRoles = [
  { value: 'plaintiff', label: 'المدعي', labelEn: 'Plaintiff' },
  { value: 'defendant', label: 'المدعى عليه', labelEn: 'Defendant' },
  { value: 'witness', label: 'شاهد', labelEn: 'Witness' },
];

export const StepThree: React.FC<StepThreeProps> = ({ form }) => {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'parties',
  });

  const addParty = () => {
    append({ name: '', role: 'plaintiff', contact: '' });
  };

  const removeParty = (index: number) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  // Initialize with at least two parties if empty
  React.useEffect(() => {
    if (fields.length === 0) {
      append({ name: '', role: 'plaintiff', contact: '' });
      append({ name: '', role: 'defendant', contact: '' });
    }
  }, [fields.length, append]);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold arabic-text">الأطراف المعنية</h3>
        <p className="text-muted-foreground">
          أضف معلومات جميع الأطراف المشاركين في النزاع
        </p>
      </div>

      <div className="space-y-4">
        {fields.map((field, index) => (
          <Card key={field.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="arabic-text">الطرف {index + 1}</span>
                </div>
                {fields.length > 2 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeParty(index)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name={`parties.${index}.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>الاسم الكامل *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="اسم الشخص أو الشركة"
                          {...field}
                          className="text-right"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`parties.${index}.role`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        الصفة *
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="w-4 h-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>حدد دور هذا الطرف في النزاع</p>
                          </TooltipContent>
                        </Tooltip>
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {partyRoles.map((role) => (
                            <SelectItem key={role.value} value={role.value}>
                              <div className="flex justify-between w-full">
                                <span>{role.label}</span>
                                <span className="text-xs text-muted-foreground ml-2">
                                  {role.labelEn}
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
              </div>

              <FormField
                control={form.control}
                name={`parties.${index}.contact`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>معلومات الاتصال (اختياري)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="رقم الهاتف أو البريد الإلكتروني"
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
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={addParty}
          className="w-full flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          إضافة طرف آخر
        </Button>
      </div>
    </div>
  );
};
