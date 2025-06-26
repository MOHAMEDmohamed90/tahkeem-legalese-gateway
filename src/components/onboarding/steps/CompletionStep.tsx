
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, User } from 'lucide-react';

interface CompletionStepProps {
  title: string;
}

export const CompletionStep: React.FC<CompletionStepProps> = ({ title }) => {
  return (
    <div className="text-center space-y-6">
      <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center">
        <CheckCircle className="w-12 h-12 text-green-600" />
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4 arabic-text">مرحباً بك في فريق E-Tahkeem!</h3>
        <p className="text-lg text-muted-foreground arabic-text leading-relaxed">
          تم إعداد ملفك المهني بنجاح. أصبحت جاهزاً لاستقبال القضايا والعمل مع العملاء
        </p>
      </div>
      <div className="bg-muted/50 rounded-lg p-6">
        <h4 className="font-semibold mb-2 arabic-text">الخطوة التالية:</h4>
        <p className="text-muted-foreground arabic-text mb-4">
          ستصلك إشعارات بالقضايا المناسبة لتخصصاتك
        </p>
        <Button className="arabic-text" onClick={() => window.location.href = '/dashboard'}>
          <User className="w-4 h-4 ml-2" />
          انتقل إلى لوحة التحكم
        </Button>
      </div>
    </div>
  );
};
