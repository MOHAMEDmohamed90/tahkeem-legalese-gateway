
import { useState } from "react";
import { LoginForm } from "@/components/auth/LoginForm";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";
import { Card, CardContent } from "@/components/ui/card";
import { Scale } from "lucide-react";

type AuthMode = "login" | "register" | "forgot-password";

const Auth = () => {
  const [mode, setMode] = useState<AuthMode>("login");

  return (
    <div className="min-h-screen bg-gradient-section flex items-center justify-center p-4" dir="rtl">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Scale className="h-10 w-10 text-tahkeem-blue-600" />
            <h1 className="text-3xl font-bold arabic-text">E-Tahkeem</h1>
          </div>
          <p className="text-muted-foreground arabic-text">
            منصة التحكيم الإلكترونية الآمنة
          </p>
        </div>

        <Card className="shadow-xl">
          <CardContent className="p-6">
            {mode === "login" && (
              <LoginForm 
                onSwitchToRegister={() => setMode("register")}
                onForgotPassword={() => setMode("forgot-password")}
              />
            )}
            {mode === "register" && (
              <RegisterForm 
                onSwitchToLogin={() => setMode("login")}
              />
            )}
            {mode === "forgot-password" && (
              <ForgotPasswordForm 
                onBackToLogin={() => setMode("login")}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
