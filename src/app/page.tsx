/**
 * File: page.tsx
 * Mục đích: Trang chủ (route `/`) - gom các section lại để hiển thị homepage.
 * Props: Không nhận props.
 * Ví dụ sử dụng: Next.js tự map file này vào route `/`.
 * Lưu ý: Giữ file này gọn, đặt UI chi tiết trong `src/app/components/`.
 */
import HeroSection from "./components/HeroSection";
import ProgramsSection from "./components/ProgramsSection";
import AchievementsSection from "./components/AchievementsSection";
import ValuesSection from "./components/ValuesSection";
import LocationsSection from "./components/LocationsSection";
import ReviewsSection from "./components/ReviewsSection";
import TeachersSection from "./components/TeachersSection";
import SignupSection from "./components/SignupSection";
import ReviewsSection2 from "./components/ReviewsSection2";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="bg-[#f5f5f5] font-sans">
      {/* Page sections: keep the page file as a simple composition of components.
          Each component is responsible for its own markup and styling. */}
      <HeroSection />
      <ProgramsSection />
      <AchievementsSection />
      <ValuesSection />
      <LocationsSection />
      <ReviewsSection />
      <TeachersSection />
      <ReviewsSection2 />
      <SignupSection />
      <Footer />
    </div>
  );
}
