import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedDrinks from "@/components/FeaturedDrinks";
import Story from "@/components/Story";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import BeagleCompanion from "@/components/BeagleCompanion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedDrinks />
      <Story />
      <Location />
      <Footer />
      <BeagleCompanion />
    </div>
  );
};

export default Index;
