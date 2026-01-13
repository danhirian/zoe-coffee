import { useState, useEffect } from "react";
import beagleMascot from "@/assets/beagle-mascot.png";

const BeagleCompanion = () => {
  const [bounce, setBounce] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger bounce animation on scroll
      setBounce(true);
      setTimeout(() => setBounce(false), 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 cursor-pointer transition-all duration-300 ${
        bounce ? "animate-bounce" : ""
      }`}
      onClick={() => setIsVisible(false)}
      title="Click to hide me!"
    >
      <div className="relative group">
        <img 
          src={beagleMascot} 
          alt="Beagle mascot" 
          className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg hover:scale-110 transition-transform duration-200"
        />
        {/* Speech bubble on hover */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-cream text-coffee-dark text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md">
          Bună! ☕
        </div>
        {/* Tail wag effect */}
        <div className="absolute -bottom-1 right-2 w-3 h-3 bg-caramel/30 rounded-full animate-ping" />
      </div>
    </div>
  );
};

export default BeagleCompanion;
