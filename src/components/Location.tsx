import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import locationBg from "@/assets/location-bg.jpg";

const Location = () => {
  return <section id="location" className="py-20 md:py-28 text-primary-foreground relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={locationBg} 
          alt="Zoe Coffee Truck" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Info */}
            <div>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Unde ne găsiți?
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
                    <h3 className="font-semibold mb-1">Program</h3>
                    <p className="text-primary-foreground/70">
                      Luni - Vineri: 10AM - 6PM<br />
                      Sâmbătă: 9AM - 5PM
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
                      <a href="mailto:cristianbalog13@yahoo.com" className="hover:text-caramel transition-colors">cristianbalog13@yahoo.com</a><br />
                      <a href="https://wa.me/40748626596" target="_blank" rel="noopener noreferrer" className="hover:text-caramel transition-colors inline-flex items-center gap-1">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        WhatsApp
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <Button variant="hero" size="lg" asChild className="group relative overflow-hidden">
                <a href="https://www.google.com/maps/dir/?api=1&destination=Strada+Trandafirilor+28,+Giroc,+Romania" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <span className="relative z-10">Către noi</span>
                  <span className="relative z-10 transition-transform group-hover:translate-x-1">
                    <span className="relative inline-block">
                      ☕
                      {/* Steam particles */}
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <span className="absolute w-1 h-2 bg-cream/60 rounded-full animate-steam-1" style={{ left: '-3px' }} />
                        <span className="absolute w-1 h-2 bg-cream/50 rounded-full animate-steam-2" style={{ left: '1px' }} />
                        <span className="absolute w-1 h-2 bg-cream/40 rounded-full animate-steam-3" style={{ left: '5px' }} />
                      </span>
                    </span>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-caramel/20 via-cream/10 to-caramel/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                </a>
              </Button>
            </div>

            {/* Interactive Google Map */}
            <div className="relative">
              <div className="aspect-square lg:aspect-[4/5] rounded-2xl bg-cream/10 overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.8!2d21.2277!3d45.7333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sStrada%20Trandafirilor%2028%2C%20Giroc!5e0!3m2!1sen!2sro!4v1699999999999!5m2!1sen!2sro" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Zoe Coffee Location - Strada Trandafirilor 28, Giroc" className="absolute inset-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Location;