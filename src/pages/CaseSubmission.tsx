import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { CaseSubmissionForm } from "@/components/CaseSubmissionForm";

const CaseSubmission = () => {
  return (
    <div className="min-h-screen bg-gradient-section" dir="rtl">
      <SidebarProvider className="direction-rtl">
        <div className="flex flex-row-reverse w-full min-h-screen">
          <AppSidebar />

          {/* Main scrollable area */}
          <main className="flex-1 p-4 overflow-y-auto h-screen">
            <div className="flex items-center gap-4 mb-6">
              <SidebarTrigger />
              <h1 className="text-2xl font-bold arabic-text">بدء قضية جديدة</h1>
            </div>
            <CaseSubmissionForm />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default CaseSubmission;
