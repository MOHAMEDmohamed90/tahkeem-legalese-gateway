
import React, { useState } from 'react';
import { OnboardingLayout } from './OnboardingLayout';
import { WelcomeStep } from './steps/WelcomeStep';
import { ProfileSetupStep } from './steps/ProfileSetupStep';
import { SpecializationsStep } from './steps/SpecializationsStep';
import { ToolsStep } from './steps/ToolsStep';
import { CompletionStep } from './steps/CompletionStep';
import { lawyerOnboardingSteps } from './constants';

export const LawyerOnboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    barNumber: '',
    experience: '',
    bio: '',
    specializations: [] as string[],
    languages: [] as string[],
    jurisdiction: ''
  });

  const handleNext = () => {
    if (currentStep < lawyerOnboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Save profile and navigate to dashboard
      console.log('Lawyer profile data:', formData);
      window.location.href = '/dashboard';
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    const step = lawyerOnboardingSteps[currentStep];

    switch (step.content) {
      case 'welcome':
        return <WelcomeStep title={step.title} />;

      case 'profile-setup':
        return (
          <ProfileSetupStep 
            title={step.title}
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 'specializations':
        return (
          <SpecializationsStep 
            title={step.title}
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 'tools':
        return <ToolsStep title={step.title} />;

      case 'completion':
        return <CompletionStep title={step.title} />;

      default:
        return null;
    }
  };

  return (
    <OnboardingLayout
      currentStep={currentStep}
      totalSteps={lawyerOnboardingSteps.length}
      onNext={handleNext}
      onPrevious={handlePrevious}
      nextLabel={currentStep === lawyerOnboardingSteps.length - 1 ? "ابدأ العمل" : "التالي"}
      title={lawyerOnboardingSteps[currentStep].title}
      subtitle={lawyerOnboardingSteps[currentStep].subtitle}
      showSkip={currentStep < lawyerOnboardingSteps.length - 2}
      onSkip={() => window.location.href = '/dashboard'}
      canGoNext={Boolean(currentStep === 1 ? (formData.barNumber && formData.experience && formData.jurisdiction) : true)}
    >
      {renderStepContent()}
    </OnboardingLayout>
  );
};
