
import React from 'react';
import { GraduationCap, Scale, Globe } from 'lucide-react';

interface WelcomeStepProps {
  title: string;
}

export const WelcomeStep: React.FC<WelcomeStepProps> = ({ title }) => {
  return (
    <div className="text-center space-y-6">
      <div className="w-24 h-24 mx-auto bg-tahkeem-blue-100 rounded-full flex items-center justify-center">
        <GraduationCap className="w-12 h-12 text-tahkeem-blue-600" />
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4 arabic-text">{title}</h3>
        <p className="text-lg text-muted-foreground arabic-text leading-relaxed">
          انضم إلى منصة E-Tahkeem وساعد العملاء في حل قضاياهم القانونية بكفاءة ومهنية عالية
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-8">
        <div className="text-center p-4 bg-muted/50 rounded-lg">
          <Scale className="w-12 h-12 mx-auto text-blue-600 mb-2" />
          <h4 className="font-semibold arabic-text">قضايا متنوعة</h4>
          <p className="text-sm text-muted-foreground arabic-text">
            وساطة، تحكيم، ومحاكاة أحكام
          </p>
        </div>
        <div className="text-center p-4 bg-muted/50 rounded-lg">
          <Globe className="w-12 h-12 mx-auto text-green-600 mb-2" />
          <h4 className="font-semibold arabic-text">عملاء دوليون</h4>
          <p className="text-sm text-muted-foreground arabic-text">
            من جميع أنحاء الشرق الأوسط
          </p>
        </div>
      </div>
    </div>
  );
};
