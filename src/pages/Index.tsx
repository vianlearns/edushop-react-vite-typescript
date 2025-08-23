import HeroBanner from "@/components/HeroBanner";
import PopularCategories from "@/components/PopularCategories";
import FlashSale from "@/components/FlashSale";
import RecommendedProducts from "@/components/RecommendedProducts";
import Footer from "@/components/Footer";
import FloatingCartButton from "@/components/FloatingCartButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 pb-20 md:pb-6">
        <HeroBanner />
        <PopularCategories />
        <FlashSale />
        <RecommendedProducts />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Cart Button */}
      <FloatingCartButton />
    </div>
  );
};

export default Index;
