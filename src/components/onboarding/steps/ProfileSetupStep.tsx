
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload } from 'lucide-react';

interface ProfileSetupStepProps {
  title: string;
  formData: {
    barNumber: string;
    experience: string;
    jurisdiction: string;
    bio: string;
  };
  setFormData: (data: any) => void;
}

export const ProfileSetupStep: React.FC<ProfileSetupStepProps> = ({ 
  title, 
  formData, 
  setFormData 
}) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center arabic-text">{title}</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="barNumber" className="arabic-text">رقم العضوية في نقابة المحامين *</Label>
          <Input
            id="barNumber"
            value={formData.barNumber}
            onChange={(e) => setFormData({...formData, barNumber: e.target.value})}
            placeholder="أدخل رقم العضوية"
            className="text-right"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience" className="arabic-text">سنوات الخبرة *</Label>
          <Input
            id="experience"
            value={formData.experience}
            onChange={(e) => setFormData({...formData, experience: e.target.value})}
            placeholder="مثال: 10 سنوات"
            className="text-right"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="jurisdiction" className="arabic-text">الولاية القضائية *</Label>
          <Input
            id="jurisdiction"
            value={formData.jurisdiction}
            onChange={(e) => setFormData({...formData, jurisdiction: e.target.value})}
            placeholder="مثال: الإمارات العربية المتحدة"
            className="text-right"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio" className="arabic-text">نبذة مهنية</Label>
          <Textarea
            id="bio"
            value={formData.bio}
            onChange={(e) => setFormData({...formData, bio: e.target.value})}
            placeholder="اكتب نبذة مختصرة عن خبرتك وتخصصاتك..."
            className="text-right min-h-[100px]"
          />
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Upload className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium arabic-text">المستندات المطلوبة</span>
          </div>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li className="arabic-text">• شهادة العضوية في نقابة المحامين</li>
            <li className="arabic-text">• شهادة التخرج في القانون</li>
            <li className="arabic-text">• شهادات الخبرة (اختياري)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
