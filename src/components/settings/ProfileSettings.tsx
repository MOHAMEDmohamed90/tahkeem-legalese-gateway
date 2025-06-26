
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Save, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ProfileSettings: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: 'أحمد',
    lastName: 'محمد',
    email: 'ahmed@example.com',
    phone: '+971501234567',
    bio: 'محامي متخصص في القانون التجاري',
    organization: 'مكتب المحاماة الدولي'
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "تم التحديث بنجاح",
      description: "تم حفظ معلوماتك الشخصية بنجاح",
    });
    
    setIsLoading(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="arabic-text">الصورة الشخصية</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>
              <User className="w-12 h-12" />
            </AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <Button variant="outline" className="arabic-text">
              <Upload className="w-4 h-4 ml-2" />
              تحديث الصورة
            </Button>
            <p className="text-sm text-muted-foreground arabic-text">
              يُفضل استخدام صورة بحجم 400x400 بكسل
            </p>
          </div>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="arabic-text">الاسم الأول *</Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="text-right"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="arabic-text">اسم العائلة *</Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="text-right"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="arabic-text">البريد الإلكتروني *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="text-right"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="arabic-text">رقم الهاتف</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="text-right"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="organization" className="arabic-text">المؤسسة/الشركة</Label>
          <Input
            id="organization"
            value={formData.organization}
            onChange={(e) => handleInputChange('organization', e.target.value)}
            className="text-right"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio" className="arabic-text">نبذة شخصية</Label>
          <Textarea
            id="bio"
            value={formData.bio}
            onChange={(e) => handleInputChange('bio', e.target.value)}
            className="text-right min-h-[100px]"
            placeholder="اكتب نبذة مختصرة عنك وعن خبراتك..."
          />
        </div>

        <Button type="submit" disabled={isLoading} className="arabic-text">
          <Save className="w-4 h-4 ml-2" />
          {isLoading ? 'جاري الحفظ...' : 'حفظ التغييرات'}
        </Button>
      </form>
    </div>
  );
};
