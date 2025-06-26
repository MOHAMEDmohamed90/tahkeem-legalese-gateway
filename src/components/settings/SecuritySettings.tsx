
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Shield, Key, Smartphone, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const SecuritySettings: React.FC = () => {
  const { toast } = useToast();
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "خطأ في كلمة المرور",
        description: "كلمة المرور الجديدة وتأكيدها غير متطابقين",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "تم التحديث بنجاح",
      description: "تم تغيير كلمة المرور بنجاح",
    });
    
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    setIsLoading(false);
  };

  const handleToggle2FA = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIs2FAEnabled(!is2FAEnabled);
    
    toast({
      title: is2FAEnabled ? "تم إلغاء التفعيل" : "تم التفعيل بنجاح",
      description: is2FAEnabled 
        ? "تم إلغاء تفعيل المصادقة الثنائية" 
        : "تم تفعيل المصادقة الثنائية لحسابك",
    });
    
    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
      {/* Password Change Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 arabic-text">
            <Key className="w-5 h-5" />
            تغيير كلمة المرور
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword" className="arabic-text">كلمة المرور الحالية *</Label>
              <Input
                id="currentPassword"
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData(prev => ({
                  ...prev,
                  currentPassword: e.target.value
                }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="newPassword" className="arabic-text">كلمة المرور الجديدة *</Label>
              <Input
                id="newPassword"
                type="password"
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData(prev => ({
                  ...prev,
                  newPassword: e.target.value
                }))}
                required
              />
              <p className="text-xs text-muted-foreground arabic-text">
                يجب أن تحتوي على 8 أحرف على الأقل مع أرقام ورموز
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="arabic-text">تأكيد كلمة المرور *</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) => setPasswordData(prev => ({
                  ...prev,
                  confirmPassword: e.target.value
                }))}
                required
              />
            </div>

            <Button type="submit" disabled={isLoading} className="arabic-text">
              {isLoading ? 'جاري التحديث...' : 'تحديث كلمة المرور'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Two-Factor Authentication */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 arabic-text">
            <Smartphone className="w-5 h-5" />
            المصادقة الثنائية (2FA)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium arabic-text">تفعيل المصادقة الثنائية</p>
              <p className="text-sm text-muted-foreground arabic-text">
                أضف طبقة حماية إضافية لحسابك
              </p>
            </div>
            <Switch
              checked={is2FAEnabled}
              onCheckedChange={handleToggle2FA}
              disabled={isLoading}
            />
          </div>

          {is2FAEnabled && (
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-800 arabic-text">
                  المصادقة الثنائية مفعلة
                </span>
              </div>
              <p className="text-sm text-green-700 arabic-text">
                سيتم إرسال رمز التحقق إلى هاتفك عند تسجيل الدخول
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Security Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 arabic-text">
            <AlertTriangle className="w-5 h-5" />
            نصائح الأمان
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="text-sm arabic-text">
                استخدم كلمة مرور قوية تحتوي على أحرف كبيرة وصغيرة وأرقام ورموز
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="text-sm arabic-text">
                لا تشارك معلومات تسجيل الدخول مع أي شخص آخر
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="text-sm arabic-text">
                تأكد من تسجيل الخروج عند استخدام أجهزة مشتركة
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="text-sm arabic-text">
                فعّل المصادقة الثنائية لحماية إضافية
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
