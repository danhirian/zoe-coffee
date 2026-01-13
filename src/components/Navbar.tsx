import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import zoeLogo from "@/assets/zoe-coffee-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [{
    name: "Meniu",
    href: "/menu"
  }, {
    name: "Povestea noastră",
    href: "/#story"
  }, {
    name: "Unde ne găsiți?",
    href: "/#location"
  }];

  // Handle scroll to anchor after navigation
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if it's a hash link to the home page
    if (href.startsWith("/#")) {
      e.preventDefault();
      const hash = href.substring(1); // Get "#location" or "#story"
      
      if (location.pathname !== "/") {
        // Navigate to home page first, then scroll
        navigate("/" + hash);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img alt="Zoe Coffee" className="h-[120px] w-[120px] object-contain transition-transform group-hover:scale-105 border-secondary-foreground" src="/lovable-uploads/eba40f59-5077-45b8-a2a2-a2c8401d5dc5.png" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                {link.name}
              </a>)}
            <Button variant="default" size="sm">
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2" onClick={(e) => { handleNavClick(e, link.href); setIsOpen(false); }}>
                  {link.name}
                </a>)}
              <Button variant="default" className="w-full mt-2">
                Order Now
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;