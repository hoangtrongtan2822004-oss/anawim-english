/*
Page: `page.tsx` (home)
Purpose: Compose the homepage by importing and arranging section components.
Notes: Keep this file minimal; move UI into components for clarity.
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
