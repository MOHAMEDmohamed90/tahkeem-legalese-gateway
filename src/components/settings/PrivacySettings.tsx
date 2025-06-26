
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Lock, Eye, Shield, Trash2, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const PrivacySettings: React.FC = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
    dataCollection: true,
    analyticsTracking: true,
    thirdPartySharing: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = (key: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "تم التحديث بنجاح",
      description: "تم حفظ إعدادات الخصوصية بنجاح",
    });
    
    setIsLoading(false);
  };

  const handleDataExport = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "تم إنشاء ملف البيانات",
      description: "سيتم إرسال رابط التحميل إلى بريدك الإلكتروني خلال 24 ساعة",
    });
    
    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
      {/* Profile Visibility */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 arabic-text">
            <Eye className="w-5 h-5" />
            رؤية الملف الشخصي
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="arabic-text">من يمكنه رؤية ملفك الشخصي؟</Label>
            <Select 
              value={settings.profileVisibility} 
              onValueChange={(value) => 
                setSettings(prev => ({ ...prev, profileVisibility: value }))
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">عام - يمكن للجميع الرؤية</SelectItem>
                <SelectItem value="users">المستخدمين المسجلين فقط</SelectItem>
                <SelectItem value="connections">اتصالاتي فقط</SelectItem>
                <SelectItem value="private">خاص - لا أحد</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="arabic-text">إظهار البريد الإلكتروني</Label>
              <p className="text-sm text-muted-foreground arabic-text">
                عرض بريدك الإلكتروني في الملف العام
              </p>
            </div>
            <Switch
              checked={settings.showEmail}
              onCheckedChange={() => handleToggle('showEmail')}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="arabic-text">إظهار رقم الهاتف</Label>
              <p className="text-sm text-muted-foreground arabic-text">
                عرض رقم هاتفك في الملف العام
              </p>
            </div>
            <Switch
              checked={settings.showPhone}
              onCheckedChange={() => handleToggle('showPhone')}
            />
          </div>
        </CardContent>
      </Card>

      {/* Data Collection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 arabic-text">
            <Shield className="w-5 h-5" />
            جمع البيانات والتتبع
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="arabic-text">جمع بيانات الاستخدام</Label>
              <p className="text-sm text-muted-foreground arabic-text">
                السماح بجمع بيانات لتحسين الخدمة
              </p>
            </div>
            <Switch
              checked={settings.dataCollection}
              onCheckedChange={() => handleToggle('dataCollection')}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="arabic-text">تتبع التحليلات</Label>
              <p className="text-sm text-muted-foreground arabic-text">
                استخدام أدوات التحليل لفهم سلوك المستخدمين
              </p>
            </div>
            <Switch
              checked={settings.analyticsTracking}
              onCheckedChange={() => handleToggle('analyticsTracking')}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="arabic-text">مشاركة البيانات مع أطراف ثالثة</Label>
              <p className="text-sm text-muted-foreground arabic-text">
                مشاركة البيانات المجهولة مع شركاء موثوقين
              </p>
            </div>
            <Switch
              checked={settings.thirdPartySharing}
              onCheckedChange={() => handleToggle('thirdPartySharing')}
            />
          </div>
        </CardContent>
      </Card>

      {/* Data Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 arabic-text">
            <Lock className="w-5 h-5" />
            إدارة البيانات
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-blue-800 arabic-text">تصدير البيانات</h4>
                  <p className="text-sm text-blue-700 arabic-text">
                    احصل على نسخة من جميع بياناتك الشخصية
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleDataExport}
                  disabled={isLoading}
                  className="arabic-text"
                >
                  <Download className="w-4 h-4 ml-2" />
                  تصدير
                </Button>
              </div>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-red-800 arabic-text">حذف الحساب</h4>
                  <p className="text-sm text-red-700 arabic-text">
                    حذف نهائي للحساب وجميع البيانات المرتبطة به
                  </p>
                </div>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  className="arabic-text"
                >
                  <Trash2 className="w-4 h-4 ml-2" />
                  حذف الحساب
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSave} disabled={isLoading} className="w-full arabic-text">
        {isLoading ? 'جاري الحفظ...' : 'حفظ إعدادات الخصوصية'}
      </Button>
    </div>
  );
};
