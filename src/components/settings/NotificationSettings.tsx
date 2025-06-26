
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bell, Mail, MessageSquare, Calendar, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const NotificationSettings: React.FC = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    caseUpdates: true,
    messageNotifications: true,
    calendarReminders: true,
    marketingEmails: false,
    frequency: 'immediate'
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
      description: "تم حفظ إعدادات الإشعارات بنجاح",
    });
    
    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
      {/* General Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 arabic-text">
            <Bell className="w-5 h-5" />
            الإشعارات العامة
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="arabic-text">الإشعارات عبر البريد الإلكتروني</Label>
              <p className="text-sm text-muted-foreground arabic-text">
                استقبال الإشعارات المهمة عبر البريد الإلكتروني
              </p>
            </div>
            <Switch
              checked={settings.emailNotifications}
              onCheckedChange={() => handleToggle('emailNotifications')}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="arabic-text">الإشعارات الفورية</Label>
              <p className="text-sm text-muted-foreground arabic-text">
                إشعارات فورية على المتصفح والتطبيق
              </p>
            </div>
            <Switch
              checked={settings.pushNotifications}
              onCheckedChange={() => handleToggle('pushNotifications')}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="arabic-text">الرسائل النصية (SMS)</Label>
              <p className="text-sm text-muted-foreground arabic-text">
                إشعارات عاجلة عبر الرسائل النصية
              </p>
            </div>
            <Switch
              checked={settings.smsNotifications}
              onCheckedChange={() => handleToggle('smsNotifications')}
            />
          </div>
        </CardContent>
      </Card>

      {/* Content Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 arabic-text">
            <MessageSquare className="w-5 h-5" />
            إشعارات المحتوى
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1 flex items-center gap-3">
              <AlertCircle className="w-4 h-4 text-blue-600" />
              <div>
                <Label className="arabic-text">تحديثات القضايا</Label>
                <p className="text-sm text-muted-foreground arabic-text">
                  إشعارات عند تحديث حالة القضايا
                </p>
              </div>
            </div>
            <Switch
              checked={settings.caseUpdates}
              onCheckedChange={() => handleToggle('caseUpdates')}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1 flex items-center gap-3">
              <Mail className="w-4 h-4 text-green-600" />
              <div>
                <Label className="arabic-text">الرسائل الجديدة</Label>
                <p className="text-sm text-muted-foreground arabic-text">
                  إشعار عند وصول رسائل جديدة
                </p>
              </div>
            </div>
            <Switch
              checked={settings.messageNotifications}
              onCheckedChange={() => handleToggle('messageNotifications')}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1 flex items-center gap-3">
              <Calendar className="w-4 h-4 text-purple-600" />
              <div>
                <Label className="arabic-text">تذكير المواعيد</Label>
                <p className="text-sm text-muted-foreground arabic-text">
                  تذكير بالجلسات والمواعيد المهمة
                </p>
              </div>
            </div>
            <Switch
              checked={settings.calendarReminders}
              onCheckedChange={() => handleToggle('calendarReminders')}
            />
          </div>
        </CardContent>
      </Card>

      {/* Notification Frequency */}
      <Card>
        <CardHeader>
          <CardTitle className="arabic-text">تكرار الإشعارات</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="arabic-text">كم مرة تريد استقبال الإشعارات؟</Label>
            <Select value={settings.frequency} onValueChange={(value) => 
              setSettings(prev => ({ ...prev, frequency: value }))
            }>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">فوري</SelectItem>
                <SelectItem value="hourly">كل ساعة</SelectItem>
                <SelectItem value="daily">يومي</SelectItem>
                <SelectItem value="weekly">أسبوعي</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="arabic-text">الرسائل التسويقية</Label>
              <p className="text-sm text-muted-foreground arabic-text">
                استقبال نشرة إخبارية وعروض خاصة
              </p>
            </div>
            <Switch
              checked={settings.marketingEmails}
              onCheckedChange={() => handleToggle('marketingEmails')}
            />
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSave} disabled={isLoading} className="w-full arabic-text">
        {isLoading ? 'جاري الحفظ...' : 'حفظ إعدادات الإشعارات'}
      </Button>
    </div>
  );
};
