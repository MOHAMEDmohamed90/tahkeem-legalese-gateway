import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { MessageInterface } from "@/components/messaging/MessageInterface";

const Messages = () => {
  return (
    <div className="min-h-screen bg-gradient-section" dir="rtl">
      <SidebarProvider className="direction-rtl">
        <div className="flex flex-row-reverse w-full min-h-screen">
          <AppSidebar />

          {/* Main scrollable content */}
          <main className="flex-1 p-4 overflow-y-auto h-screen">
            <div className="flex items-center gap-4 mb-6">
              <SidebarTrigger />
              <div>
                <h1 className="text-2xl font-bold arabic-text">الرسائل</h1>
                <p className="text-muted-foreground arabic-text mt-1 text-sm">
                  تواصل بأمان مع المحكمين والأطراف الأخرى
                </p>
              </div>
            </div>
            <MessageInterface />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Messages;
