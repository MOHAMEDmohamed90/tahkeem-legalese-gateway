
import React from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { specializations, languages } from '../constants';

interface SpecializationsStepProps {
  title: string;
  formData: {
    specializations: string[];
    languages: string[];
  };
  setFormData: (data: any) => void;
}

export const SpecializationsStep: React.FC<SpecializationsStepProps> = ({ 
  title, 
  formData, 
  setFormData 
}) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center arabic-text">{title}</h3>
      
      <div className="space-y-4">
        <div>
          <Label className="arabic-text mb-3 block">التخصصات القانونية *</Label>
          <div className="grid grid-cols-2 gap-3">
            {specializations.map((spec) => (
              <div key={spec} className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id={spec}
                  checked={formData.specializations.includes(spec)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setFormData({
                        ...formData,
                        specializations: [...formData.specializations, spec]
                      });
                    } else {
                      setFormData({
                        ...formData,
                        specializations: formData.specializations.filter(s => s !== spec)
                      });
                    }
                  }}
                />
                <label htmlFor={spec} className="text-sm arabic-text">
                  {spec}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label className="arabic-text mb-3 block">اللغات *</Label>
          <div className="grid grid-cols-2 gap-3">
            {languages.map((lang) => (
              <div key={lang} className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id={lang}
                  checked={formData.languages.includes(lang)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setFormData({
                        ...formData,
                        languages: [...formData.languages, lang]
                      });
                    } else {
                      setFormData({
                        ...formData,
                        languages: formData.languages.filter(l => l !== lang)
                      });
                    }
                  }}
                />
                <label htmlFor={lang} className="text-sm arabic-text">
                  {lang}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
