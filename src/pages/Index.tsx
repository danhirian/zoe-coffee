import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedDrinks from "@/components/FeaturedDrinks";
import Story from "@/components/Story";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedDrinks />
      <Story />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
