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
                      123 Coffee Lane<br />
                      Brooklyn, NY 11201
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
                      (555) 123-4567<br />
                      hello@theroast.coffee
                    </p>
                  </div>
                </div>
              </div>

              <Button variant="hero" size="lg">
                Get Directions
              </Button>
            </div>

            {/* Map placeholder */}
            <div className="relative">
              <div className="aspect-square lg:aspect-[4/5] rounded-2xl bg-cream/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-16 h-16 text-caramel mx-auto mb-4 animate-float" />
                    <p className="text-primary-foreground/60">
                      Interactive map coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Location;