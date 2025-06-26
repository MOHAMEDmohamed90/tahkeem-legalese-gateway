
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Upload, 
  CheckCircle, 
  AlertCircle, 
  Clock,
  FileText,
  Award
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ProfessionalVerification: React.FC = () => {
  const { toast } = useToast();
  const [userRole, setUserRole] = useState('lawyer');
  const [verificationStatus, setVerificationStatus] = useState('pending'); // verified, pending, rejected, none
  const [formData, setFormData] = useState({
    licenseNumber: '',
    jurisdiction: '',
    yearsOfExperience: '',
    specialization: '',
    institution: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "تم إرسال الطلب بنجاح",
      description: "سيتم مراجعة مستنداتك خلال 3-5 أيام عمل",
    });
    
    setVerificationStatus('pending');
    setIsLoading(false);
  };

  const getStatusBadge = () => {
    switch (verificationStatus) {
      case 'verified':
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle className="w-4 h-4 ml-1" />
            موثق
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            <Clock className="w-4 h-4 ml-1" />
            قيد المراجعة
          </Badge>
        );
      case 'rejected':
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            <AlertCircle className="w-4 h-4 ml-1" />
            مرفوض
          </Badge>
        );
      default:
        return (
          <Badge variant="outline">
            غير مكتمل
          </Badge>
        );
    }
  };

  const getRequiredDocuments = () => {
    switch (userRole) {
      case 'lawyer':
        return [
          'شهادة العضوية في نقابة المحامين',
          'شهادة التخرج في القانون',
          'بطاقة الهوية الشخصية',
          'شهادات الخبرة (اختياري)'
        ];
      case 'judge':
        return [
          'شهادة التقاعد من القضاء',
          'السيرة الذاتية القضائية',
          'بطاقة الهوية الشخصية',
          'خطابات التوصية (اختياري)'
        ];
      default:
        return ['بطاقة الهوية الشخصية أو السجل التجاري'];
    }
  };

  return (
    <div className="space-y-6">
      {/* Current Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 arabic-text">
            <Award className="w-5 h-5" />
            حالة التحقق الحالية
            {getStatusBadge()}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {verificationStatus === 'verified' && (
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-800 arabic-text">
                  تم التحقق من هويتك المهنية بنجاح
                </span>
              </div>
              <p className="text-sm text-green-700 arabic-text">
                يمكنك الآن الوصول إلى جميع الميزات المتقدمة للمنصة
              </p>
            </div>
          )}

          {verificationStatus === 'pending' && (
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-yellow-600" />
                <span className="font-medium text-yellow-800 arabic-text">
                  طلبك قيد المراجعة
                </span>
              </div>
              <p className="text-sm text-yellow-700 arabic-text">
                سيتم الرد عليك خلال 3-5 أيام عمل عبر البريد الإلكتروني
              </p>
            </div>
          )}

          {verificationStatus === 'rejected' && (
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <span className="font-medium text-red-800 arabic-text">
                  تم رفض طلب التحقق
                </span>
              </div>
              <p className="text-sm text-red-700 arabic-text">
                يرجى مراجعة المستندات المرسلة والتأكد من صحتها ووضوحها
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Role Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 arabic-text">
            <GraduationCap className="w-5 h-5" />
            الدور المهني
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label className="arabic-text">اختر دورك المهني</Label>
            <Select value={userRole} onValueChange={setUserRole}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="party">طرف في القضية</SelectItem>
                <SelectItem value="lawyer">محامي</SelectItem>
                <SelectItem value="judge">قاضي متقاعد / محكم</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Professional Information Form */}
      {(userRole === 'lawyer' || userRole === 'judge') && (
        <Card>
          <CardHeader>
            <CardTitle className="arabic-text">المعلومات المهنية</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="arabic-text">
                    {userRole === 'lawyer' ? 'رقم الترخيص/العضوية' : 'رقم التقاعد'}
                  </Label>
                  <Input
                    value={formData.licenseNumber}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      licenseNumber: e.target.value
                    }))}
                    className="text-right"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="arabic-text">الولاية القضائية</Label>
                  <Input
                    value={formData.jurisdiction}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      jurisdiction: e.target.value
                    }))}
                    className="text-right"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="arabic-text">سنوات الخبرة</Label>
                  <Input
                    value={formData.yearsOfExperience}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      yearsOfExperience: e.target.value
                    }))}
                    className="text-right"
                    type="number"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="arabic-text">التخصص</Label>
                  <Input
                    value={formData.specialization}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      specialization: e.target.value
                    }))}
                    className="text-right"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="arabic-text">
                  {userRole === 'lawyer' ? 'المكتب/المؤسسة' : 'المحكمة السابقة'}
                </Label>
                <Input
                  value={formData.institution}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    institution: e.target.value
                  }))}
                  className="text-right"
                  required
                />
              </div>

              <Button type="submit" disabled={isLoading} className="w-full arabic-text">
                {isLoading ? 'جاري الإرسال...' : 'إرسال طلب التحقق'}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Required Documents */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 arabic-text">
            <FileText className="w-5 h-5" />
            المستندات المطلوبة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-3">
              {getRequiredDocuments().map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="arabic-text">{doc}</span>
                  <Button variant="outline" size="sm" className="arabic-text">
                    <Upload className="w-4 h-4 ml-2" />
                    رفع
                  </Button>
                </div>
              ))}
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-800 arabic-text mb-2">متطلبات المستندات:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li className="arabic-text">• الملفات يجب أن تكون بصيغة PDF أو JPG</li>
                <li className="arabic-text">• الحد الأقصى لحجم الملف 10 ميجابايت</li>
                <li className="arabic-text">• يجب أن تكون المستندات واضحة ومقروءة</li>
                <li className="arabic-text">• تأكد من صحة المعلومات المدونة</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
