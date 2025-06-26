
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Scale, ChevronLeft, ChevronRight } from 'lucide-react';

interface OnboardingLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  onSkip?: () => void;
  nextLabel?: string;
  previousLabel?: string;
  skipLabel?: string;
  canGoNext?: boolean;
  canGoPrevious?: boolean;
  showSkip?: boolean;
  title?: string;
  subtitle?: string;
}

export const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({
  children,
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  onSkip,
  nextLabel = "التالي",
  previousLabel = "السابق",
  skipLabel = "تخطي",
  canGoNext = true,
  canGoPrevious = true,
  showSkip = false,
  title,
  subtitle
}) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-section flex items-center justify-center p-4" dir="rtl">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Scale className="h-10 w-10 text-tahkeem-blue-600" />
            <h1 className="text-3xl font-bold arabic-text">E-Tahkeem</h1>
          </div>
          {title && (
            <h2 className="text-2xl font-semibold mb-2 arabic-text">{title}</h2>
          )}
          {subtitle && (
            <p className="text-muted-foreground arabic-text">{subtitle}</p>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground arabic-text">
              الخطوة {currentStep + 1} من {totalSteps}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Content */}
        <Card className="shadow-xl mb-8">
          <CardContent className="p-8">
            {children}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {canGoPrevious && currentStep > 0 && (
              <Button
                variant="outline"
                onClick={onPrevious}
                className="arabic-text"
              >
                <ChevronLeft className="w-4 h-4 ml-2" />
                {previousLabel}
              </Button>
            )}
          </div>

          <div className="flex gap-2">
            {showSkip && onSkip && (
              <Button
                variant="ghost"
                onClick={onSkip}
                className="arabic-text"
              >
                {skipLabel}
              </Button>
            )}
            {canGoNext && (
              <Button
                onClick={onNext}
                className="arabic-text"
              >
                {nextLabel}
                <ChevronRight className="w-4 h-4 mr-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
