import { useState, useEffect } from "react";
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
  const [bounce, setBounce] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBounce(true);
      setTimeout(() => setBounce(false), 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    // Cycle to next pose
    setPoseIndex((prev) => (prev + 1) % poses.length);
    setShowMessage(true);
    setBounce(true);
    setTimeout(() => setBounce(false), 300);
    setTimeout(() => setShowMessage(false), 2000);
  };

  const currentPose = poses[poseIndex];

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 cursor-pointer transition-all duration-300 ${
        bounce ? "animate-bounce" : ""
      }`}
      onClick={handleClick}
      title="Click me for a new pose!"
    >
      <div className="relative">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-background shadow-lg overflow-hidden flex items-center justify-center hover:scale-110 transition-transform duration-200">
          <img 
            src={currentPose.image} 
            alt={`Beagle mascot - ${currentPose.name}`} 
            className="w-[90%] h-[90%] object-contain"
          />
        </div>
        {/* Speech bubble */}
        <div 
          className={`absolute -top-12 left-1/2 -translate-x-1/2 bg-cream text-coffee-dark text-xs px-3 py-1.5 rounded-full shadow-md whitespace-nowrap transition-all duration-300 ${
            showMessage ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          {currentPose.message}
        </div>
        {/* Tail wag effect */}
        <div className="absolute -bottom-1 right-2 w-3 h-3 bg-caramel/30 rounded-full animate-ping" />
      </div>
    </div>
  );
};

export default BeagleCompanion;
