
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProfileSettings } from '@/components/settings/ProfileSettings';
import { SecuritySettings } from '@/components/settings/SecuritySettings';
import { LanguageSettings } from '@/components/settings/LanguageSettings';
import { NotificationSettings } from '@/components/settings/NotificationSettings';
import { PrivacySettings } from '@/components/settings/PrivacySettings';
import { ProfessionalVerification } from '@/components/settings/ProfessionalVerification';
import { 
  User, 
  Shield, 
  Globe, 
  Bell, 
  Lock, 
  GraduationCap 
} from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    {
      id: 'profile',
      label: 'الملف الشخصي',
      labelEn: 'Profile',
      icon: User,
      component: ProfileSettings
    },
    {
      id: 'security',
      label: 'الأمان',
      labelEn: 'Security',
      icon: Shield,
      component: SecuritySettings
    },
    {
      id: 'language',
      label: 'اللغة',
      labelEn: 'Language',
      icon: Globe,
      component: LanguageSettings
    },
    {
      id: 'notifications',
      label: 'الإشعارات',
      labelEn: 'Notifications',
      icon: Bell,
      component: NotificationSettings
    },
    {
      id: 'privacy',
      label: 'الخصوصية',
      labelEn: 'Privacy',
      icon: Lock,
      component: PrivacySettings
    },
    {
      id: 'verification',
      label: 'التحقق المهني',
      labelEn: 'Professional Verification',
      icon: GraduationCap,
      component: ProfessionalVerification
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-section p-4" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold arabic-text mb-2">الإعدادات</h1>
          <p className="text-muted-foreground arabic-text">
            إدارة حسابك وتفضيلاتك الشخصية
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-3 lg:grid-cols-6 h-auto p-1 bg-white">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex flex-col items-center gap-2 py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="text-xs arabic-text hidden sm:block">
                    {tab.label}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {tabs.map((tab) => {
            const ComponentToRender = tab.component;
            return (
              <TabsContent key={tab.id} value={tab.id} className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 arabic-text">
                      <tab.icon className="w-6 h-6" />
                      {tab.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ComponentToRender />
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
