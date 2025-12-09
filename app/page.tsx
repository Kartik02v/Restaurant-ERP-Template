import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import BestSellingDishes from "@/components/BestSellingDishes";
import TimingsSection from "@/components/TimingsSection";
import RatingSection from "@/components/RatingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedCategories />
        <BestSellingDishes />
        <TimingsSection />
        <RatingSection />
      </main>
      <Footer />
    </div>
  );
}


