
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { SocialLoginButtons } from "./SocialLoginButtons";
import { Eye, EyeOff } from "lucide-react";

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

type UserRole = "party" | "lawyer" | "judge";

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: UserRole;
  // Role-specific fields
  organizationName?: string;
  barNumber?: string;
  barAssociation?: string;
  formerCourt?: string;
  yearsOfExperience?: number;
  acceptTerms: boolean;
}

export const RegisterForm = ({ onSwitchToLogin }: RegisterFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>("party");
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterFormData>();

  const password = watch("password");

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    console.log("Registration attempt:", data);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard on success
      window.location.href = "/dashboard";
    }, 1500);
  };

  const getRoleLabel = (role: UserRole) => {
    switch (role) {
      case "party": return "طرف في النزاع";
      case "lawyer": return "محامي";
      case "judge": return "قاضي متقاعد";
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold arabic-text mb-2">إنشاء حساب جديد</h2>
        <p className="text-muted-foreground arabic-text text-sm">
          انضم إلى منصة التحكيم الإلكترونية
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
        {/* Role Selection */}
        <div className="space-y-2">
          <Label className="arabic-text">نوع المستخدم</Label>
          <Select value={selectedRole} onValueChange={(value: UserRole) => setSelectedRole(value)}>
            <SelectTrigger className="text-right">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="party" className="arabic-text">{getRoleLabel("party")}</SelectItem>
              <SelectItem value="lawyer" className="arabic-text">{getRoleLabel("lawyer")}</SelectItem>
              <SelectItem value="judge" className="arabic-text">{getRoleLabel("judge")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Basic Information */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="arabic-text">الاسم الأول</Label>
            <Input
              id="firstName"
              {...register("firstName", { required: "الاسم الأول مطلوب" })}
              className="text-right"
            />
            {errors.firstName && (
              <p className="text-sm text-destructive arabic-text">{errors.firstName.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="arabic-text">اسم العائلة</Label>
            <Input
              id="lastName"
              {...register("lastName", { required: "اسم العائلة مطلوب" })}
              className="text-right"
            />
            {errors.lastName && (
              <p className="text-sm text-destructive arabic-text">{errors.lastName.message}</p>
            )}
          </div>
        </div>

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
          <Label htmlFor="phone" className="arabic-text">رقم الهاتف</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone", { required: "رقم الهاتف مطلوب" })}
            className="text-right"
            placeholder="+216 XX XXX XXX"
          />
          {errors.phone && (
            <p className="text-sm text-destructive arabic-text">{errors.phone.message}</p>
          )}
        </div>

        {/* Role-specific fields */}
        {selectedRole === "party" && (
          <div className="space-y-2">
            <Label htmlFor="organizationName" className="arabic-text">اسم المؤسسة (اختياري)</Label>
            <Input
              id="organizationName"
              {...register("organizationName")}
              className="text-right"
              placeholder="للشركات والمؤسسات"
            />
          </div>
        )}

        {selectedRole === "lawyer" && (
          <>
            <div className="space-y-2">
              <Label htmlFor="barNumber" className="arabic-text">رقم الترخيص</Label>
              <Input
                id="barNumber"
                {...register("barNumber", { required: "رقم الترخيص مطلوب للمحامين" })}
                className="text-right"
              />
              {errors.barNumber && (
                <p className="text-sm text-destructive arabic-text">{errors.barNumber.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="barAssociation" className="arabic-text">نقابة المحامين</Label>
              <Input
                id="barAssociation"
                {...register("barAssociation", { required: "نقابة المحامين مطلوبة" })}
                className="text-right"
              />
              {errors.barAssociation && (
                <p className="text-sm text-destructive arabic-text">{errors.barAssociation.message}</p>
              )}
            </div>
          </>
        )}

        {selectedRole === "judge" && (
          <>
            <div className="space-y-2">
              <Label htmlFor="formerCourt" className="arabic-text">المحكمة السابقة</Label>
              <Input
                id="formerCourt"
                {...register("formerCourt", { required: "المحكمة السابقة مطلوبة" })}
                className="text-right"
              />
              {errors.formerCourt && (
                <p className="text-sm text-destructive arabic-text">{errors.formerCourt.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="yearsOfExperience" className="arabic-text">سنوات الخبرة</Label>
              <Input
                id="yearsOfExperience"
                type="number"
                {...register("yearsOfExperience", { 
                  required: "سنوات الخبرة مطلوبة",
                  min: { value: 1, message: "يجب أن تكون سنة واحدة على الأقل" }
                })}
                className="text-right"
              />
              {errors.yearsOfExperience && (
                <p className="text-sm text-destructive arabic-text">{errors.yearsOfExperience.message}</p>
              )}
            </div>
          </>
        )}

        {/* Password fields */}
        <div className="space-y-2">
          <Label htmlFor="password" className="arabic-text">كلمة المرور</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "كلمة المرور مطلوبة",
                minLength: {
                  value: 8,
                  message: "كلمة المرور يجب أن تكون 8 أحرف على الأقل"
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

        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="arabic-text">تأكيد كلمة المرور</Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: "تأكيد كلمة المرور مطلوب",
                validate: (value) => value === password || "كلمات المرور غير متطابقة"
              })}
              className="text-right pr-10"
              placeholder="••••••••"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
          </div>
          {errors.confirmPassword && (
            <p className="text-sm text-destructive arabic-text">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Terms and conditions */}
        <div className="flex items-start space-x-2 space-x-reverse">
          <Checkbox
            id="acceptTerms"
            {...register("acceptTerms", { required: "يجب الموافقة على الشروط والأحكام" })}
          />
          <Label htmlFor="acceptTerms" className="text-sm arabic-text leading-5">
            أوافق على{" "}
            <Button type="button" variant="link" className="p-0 h-auto text-sm underline">
              الشروط والأحكام
            </Button>
            {" "}و{" "}
            <Button type="button" variant="link" className="p-0 h-auto text-sm underline">
              سياسة الخصوصية
            </Button>
          </Label>
        </div>
        {errors.acceptTerms && (
          <p className="text-sm text-destructive arabic-text">{errors.acceptTerms.message}</p>
        )}

        <Button type="submit" className="w-full arabic-text" disabled={isLoading}>
          {isLoading ? "جارٍ إنشاء الحساب..." : "إنشاء حساب"}
        </Button>
      </form>

      <div className="text-center">
        <p className="text-sm text-muted-foreground arabic-text">
          لديك حساب بالفعل؟{" "}
          <Button
            type="button"
            variant="link"
            className="p-0 h-auto arabic-text"
            onClick={onSwitchToLogin}
          >
            تسجيل الدخول
          </Button>
        </p>
      </div>
    </div>
  );
};
