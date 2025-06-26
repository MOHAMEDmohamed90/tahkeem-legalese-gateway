
import React, { useState, useEffect } from 'react';
import { PartyOnboarding } from '@/components/onboarding/PartyOnboarding';
import { LawyerOnboarding } from '@/components/onboarding/LawyerOnboarding';
import { JudgeOnboarding } from '@/components/onboarding/JudgeOnboarding';
import { AdminOnboarding } from '@/components/onboarding/AdminOnboarding';

const Onboarding = () => {
  const [userRole, setUserRole] = useState<string>('party');

  useEffect(() => {
    // Get user role from URL params, localStorage, or authentication context
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get('role') || localStorage.getItem('userRole') || 'party';
    setUserRole(role);
  }, []);

  const renderOnboardingFlow = () => {
    switch (userRole) {
      case 'lawyer':
        return <LawyerOnboarding />;
      case 'judge':
      case 'arbitrator':
        return <JudgeOnboarding />;
      case 'admin':
        return <AdminOnboarding />;
      default:
        return <PartyOnboarding />;
    }
  };

  return renderOnboardingFlow();
};

export default Onboarding;
