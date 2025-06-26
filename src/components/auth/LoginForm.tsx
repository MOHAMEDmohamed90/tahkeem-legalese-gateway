
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { SocialLoginButtons } from "./SocialLoginButtons";
import { Eye, EyeOff } from "lucide-react";

interface LoginFormProps {
  onSwitchToRegister: () => void;
  onForgotPassword: () => void;
}

interface LoginFormData {
  email: string;
  password: string;
}

export const LoginForm = ({ onSwitchToRegister, onForgotPassword }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    console.log("Login attempt:", data);
  
    if (data.email === "admin@email.com") {
      setTimeout(() => {
        setIsLoading(false);
        window.location.href = "/dashboard";
      }, 800);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold arabic-text mb-2">تسجيل الدخول</h2>
        <p className="text-muted-foreground arabic-text text-sm">
          أدخل بياناتك للوصول إلى حسابك
        </p>
      </div>

      <SocialLoginButtons />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground arabic-text">
            أو
          </span>
        </div>
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

        <div className="space-y-2">
          <Label htmlFor="password" className="arabic-text">كلمة المرور</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "كلمة المرور مطلوبة",
                minLength: {
                  value: 6,
                  message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل"
                }
              })}
              className="text-right pr-10"
              placeholder="••••••••"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
          </div>
          {errors.password && (
            <p className="text-sm text-destructive arabic-text">{errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Button
            type="button"
            variant="link"
            className="p-0 h-auto arabic-text text-sm"
            onClick={onForgotPassword}
          >
            نسيت كلمة المرور؟
          </Button>
        </div>

        <Button type="submit" className="w-full arabic-text" disabled={isLoading}>
          {isLoading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
        </Button>
      </form>

      <div className="text-center">
        <p className="text-sm text-muted-foreground arabic-text">
          ليس لديك حساب؟{" "}
          <Button
            type="button"
            variant="link"
            className="p-0 h-auto arabic-text"
            onClick={onSwitchToRegister}
          >
            إنشاء حساب جديد
          </Button>
        </p>
      </div>
    </div>
  );
};
