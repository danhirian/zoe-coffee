import { useState, useEffect, useRef } from "react";
import beagleMascot from "@/assets/beagle-mascot.png";
import beagleExcited from "@/assets/beagle-excited.png";
import beagleSleepy from "@/assets/beagle-sleepy.png";
import beagleCoffee from "@/assets/beagle-coffee.png";
import beagleWaving from "@/assets/beagle-waving.png";

const poses = [
  { image: beagleMascot, message: "Bună! ☕", name: "sitting" },
  { image: beagleExcited, message: "Sunt fericit! 🎉", name: "excited" },
  { image: beagleSleepy, message: "Zzz... ☕?", name: "sleepy" },
  { image: beagleCoffee, message: "Mmm, cafea! ☕", name: "coffee" },
  { image: beagleWaving, message: "La revedere! 👋", name: "waving" },
];

const BeagleCompanion = () => {
  const [poseIndex, setPoseIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
      
      // Only trigger animation for significant scroll movements
      if (scrollDelta > 10) {
        setIsScrolling(true);
        lastScrollY.current = currentScrollY;
      }
      
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Set timeout to stop the animation after scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    setPoseIndex((prev) => (prev + 1) % poses.length);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  const currentPose = poses[poseIndex];

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 cursor-pointer transition-transform duration-500 ease-out ${
        isScrolling ? "translate-y-[-8px] scale-105" : "translate-y-0 scale-100"
      }`}
      onClick={handleClick}
      title="Click me for a new pose!"
    >
      <div className="relative">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-background shadow-lg overflow-hidden flex items-center justify-center hover:scale-110 transition-all duration-300 ease-out">
          <img 
            src={currentPose.image} 
            alt={`Beagle mascot - ${currentPose.name}`} 
            className="w-[90%] h-[90%] object-contain transition-transform duration-300"
          />
        </div>
        {/* Speech bubble */}
        <div 
          className={`absolute -top-12 left-1/2 -translate-x-1/2 bg-cream text-coffee-dark text-xs px-3 py-1.5 rounded-full shadow-md whitespace-nowrap transition-all duration-300 ease-out ${
            showMessage ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          {currentPose.message}
        </div>
        {/* Tail wag effect */}
        <div className={`absolute -bottom-1 right-2 w-3 h-3 bg-caramel/30 rounded-full transition-opacity duration-300 ${
          isScrolling ? "animate-ping" : "opacity-0"
        }`} />
      </div>
    </div>
  );
};

export default BeagleCompanion;
