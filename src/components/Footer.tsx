import { Instagram, Facebook, Twitter } from "lucide-react";
import zoeLogo from "@/assets/zoe-coffee-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <img src={zoeLogo} alt="Zoe Coffee" className="h-14 w-14 object-contain transition-transform group-hover:scale-105" />
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Zoe Coffee. Creată cu ☕ in Timișoara.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
