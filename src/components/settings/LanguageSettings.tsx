
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Globe, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const LanguageSettings: React.FC = () => {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = useState('ar');
  const [isLoading, setIsLoading] = useState(false);

  const languages = [
    {
      code: 'ar',
      name: 'العربية',
      nativeName: 'العربية',
      flag: '🇦🇪'
    },
    {
      code: 'en',
      name: 'English',
      nativeName: 'English',
      flag: '🇺🇸'
    },
    {
      code: 'fr',
      name: 'Français',
      nativeName: 'Français',
      flag: '🇫🇷'
    }
  ];

  const handleLanguageChange = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const selectedLang = languages.find(lang => lang.code === selectedLanguage);
    
    toast({
      title: "تم التحديث بنجاح",
      description: `تم تغيير اللغة إلى ${selectedLang?.name}`,
    });
    
    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 arabic-text">
            <Globe className="w-5 h-5" />
            اختيار اللغة
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup value={selectedLanguage} onValueChange={setSelectedLanguage}>
            {languages.map((language) => (
              <div key={language.code} className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value={language.code} id={language.code} />
                <Label htmlFor={language.code} className="flex items-center gap-3 cursor-pointer flex-1">
                  <span className="text-2xl">{language.flag}</span>
                  <div className="flex-1">
                    <div className="font-medium">{language.nativeName}</div>
                    <div className="text-sm text-muted-foreground">{language.name}</div>
                  </div>
                  {selectedLanguage === language.code && (
                    <Check className="w-4 h-4 text-green-600" />
                  )}
                </Label>
              </div>
            ))}
          </RadioGroup>

          <Button onClick={handleLanguageChange} disabled={isLoading} className="arabic-text">
            {isLoading ? 'جاري التحديث...' : 'حفظ اللغة المختارة'}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="arabic-text">معلومات اللغات</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-800 arabic-text mb-2">العربية</h4>
              <p className="text-sm text-blue-700 arabic-text">
                اللغة الأساسية للمنصة، مع دعم كامل للكتابة من اليمين إلى اليسار
              </p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-medium text-green-800 arabic-text mb-2">الإنجليزية</h4>
              <p className="text-sm text-green-700 arabic-text">
                متوفرة لجميع الوظائف والميزات، مناسبة للمستخدمين الدوليين
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-medium text-purple-800 arabic-text mb-2">الفرنسية</h4>
              <p className="text-sm text-purple-700 arabic-text">
                دعم أساسي متوفر، مع ترجمة للواجهات الرئيسية
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
