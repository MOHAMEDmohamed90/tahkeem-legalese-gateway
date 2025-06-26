import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { ArbitratorProfileCard } from "@/components/profile/ArbitratorProfileCard";
import { ReviewSection } from "@/components/profile/ReviewSection";
import { TimeSlotBooking } from "@/components/profile/TimeSlotBooking";

const ArbitratorProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-section" dir="rtl">
      <SidebarProvider className="direction-rtl">
        <div className="flex flex-row-reverse w-full min-h-screen">
          <AppSidebar />

          {/* Main scrollable content */}
          <main className="flex-1 p-4 overflow-y-auto h-screen">
            <div className="flex items-center gap-4 mb-6">
              <SidebarTrigger />
              <h1 className="text-2xl font-bold arabic-text">ملف المحكم</h1>
            </div>

            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Profile Card */}
                <div className="lg:col-span-2">
                  <ArbitratorProfileCard />
                  <div className="mt-8">
                    <ReviewSection />
                  </div>
                </div>

                {/* Booking Sidebar */}
                <div className="lg:col-span-1">
                  <TimeSlotBooking />
                </div>
              </div>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default ArbitratorProfile;
