import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-coffee.jpg";

const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Artisanal coffee shop interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full bg-coffee-dark/40 backdrop-blur-sm border border-caramel/30">
            <Coffee className="h-4 w-4 text-caramel" />
            <p className="text-caramel text-sm md:text-base uppercase tracking-[0.2em] font-medium">
              Cafea artizanală din 2025
            </p>
            <Coffee className="h-4 w-4 text-caramel" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 leading-tight">
            Creată cu
            <span className="block text-caramel">pasiune și grijă</span>
          </h1>
          <div className="flex items-center justify-center gap-6 mb-6">
            <Coffee className="h-12 w-12 text-caramel animate-pulse" />
            <Sparkles className="h-8 w-8 text-cream/60" />
            <Coffee className="h-12 w-12 text-caramel animate-pulse" />
          </div>
          <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Fiecare ceașcă spune o poveste. De la boabele atent selecționate, până la prăjirea făcută cu măiestrie, transformăm cafeaua într-o experiență autentică, savurată pe îndelete.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/menu">
                Meniul nostru
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="warmOutline" size="xl">
              Povestea noastră
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-cream/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};
export default Hero;