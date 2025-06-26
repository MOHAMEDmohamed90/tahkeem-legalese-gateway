
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface ForgotPasswordFormProps {
  onBackToLogin: () => void;
}

interface ForgotPasswordFormData {
  email: string;
}

export const ForgotPasswordForm = ({ onBackToLogin }: ForgotPasswordFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormData>();

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);
    console.log("Password reset request:", data);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmailSent(true);
      toast.success("تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني");
    }, 1000);
  };

  if (emailSent) {
    return (
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold arabic-text">تم إرسال البريد الإلكتروني</h2>
          <p className="text-muted-foreground arabic-text">
            تحقق من بريدك الإلكتروني واتبع التعليمات لإعادة تعيين كلمة المرور
          </p>
        </div>
        
        <div className="space-y-4">
          <Button onClick={onBackToLogin} className="w-full arabic-text">
            العودة إلى تسجيل الدخول
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={() => setEmailSent(false)}
            className="w-full arabic-text"
          >
            لم تتلق البريد الإلكتروني؟ إعادة الإرسال
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold arabic-text mb-2">نسيت كلمة المرور؟</h2>
        <p className="text-muted-foreground arabic-text text-sm">
          أدخل بريدك الإلكتروني وسنرسل لك رابط إعادة تعيين كلمة المرور
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="arabic-text">البريد الإلكتروني</Label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "البريد الإلكتروني مطلوب",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "البريد الإلكتروني غير صحيح"
              }
            })}
            className="text-right"
            placeholder="example@email.com"
          />
          {errors.email && (
            <p className="text-sm text-destructive arabic-text">{errors.email.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full arabic-text" disabled={isLoading}>
          {isLoading ? "جارٍ الإرسال..." : "إرسال رابط إعادة التعيين"}
        </Button>
      </form>

      <div className="text-center">
        <Button
          type="button"
          variant="link"
          className="arabic-text"
          onClick={onBackToLogin}
        >
          العودة إلى تسجيل الدخول
        </Button>
      </div>
    </div>
  );
};
