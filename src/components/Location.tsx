import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
const Location = () => {
  return <section id="location" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Info */}
            <div>
              <p className="text-caramel text-sm uppercase tracking-[0.2em] mb-3 font-extrabold font-serif">
                Vizitați-ne!
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Come Say Hello
              </h2>

              <div className="space-y-6 mb-10">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cream/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-caramel" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Locație

                  </h3>
                    <p className="text-primary-foreground/70">
                      Strada Trandafirilor 28 (Căminul cultural)   <br />
                      Giroc    
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cream/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-caramel" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <p className="text-primary-foreground/70">
                      Mon - Fri: 7am - 7pm<br />
                      Sat - Sun: 8am - 6pm
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cream/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-caramel" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Contact</h3>
                    <p className="text-primary-foreground/70">
                      <a href="tel:0748626596" className="hover:text-caramel transition-colors">0748 626 596</a><br />
                      <a href="mailto:cristianbalog13@yahoo.com" className="hover:text-caramel transition-colors">cristianbalog13@yahoo.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                asChild
              >
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Strada+Trandafirilor+28,+Giroc,+Romania" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </div>

            {/* Interactive Google Map */}
            <div className="relative">
              <div className="aspect-square lg:aspect-[4/5] rounded-2xl bg-cream/10 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.8!2d21.2277!3d45.7333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sStrada%20Trandafirilor%2028%2C%20Giroc!5e0!3m2!1sen!2sro!4v1699999999999!5m2!1sen!2sro"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zoe Coffee Location - Strada Trandafirilor 28, Giroc"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Location;