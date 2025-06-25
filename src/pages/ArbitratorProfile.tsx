
import { ArbitratorProfileCard } from "@/components/profile/ArbitratorProfileCard";
import { ReviewSection } from "@/components/profile/ReviewSection";
import { TimeSlotBooking } from "@/components/profile/TimeSlotBooking";

const ArbitratorProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-section py-8">
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
    </div>
  );
};

export default ArbitratorProfile;
