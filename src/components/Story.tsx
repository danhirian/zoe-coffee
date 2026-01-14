import { Coffee, Heart, Leaf } from "lucide-react";
import zoeLogo from "@/assets/zoe-coffee-logo.jpg";
const values = [
  {
    icon: Coffee,
    title: "Quality First",
    description: "We source only the top 1% of specialty-grade beans from sustainable farms.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every drink is crafted by passionate baristas who care about your experience.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "From compostable cups to carbon-neutral shipping, we're committed to the planet.",
  },
];

const Story = () => {
  return (
    <section id="story" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Story */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
            <div className="space-y-6">
              <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">
                Povestea Noastră
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Mai mult decât
                <span className="text-accent"> o cafea</span>
              </h2>
              
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p className="text-lg font-medium text-foreground/90 italic">
                  Sunt momente care merită mai mult decât o cafea bună. Merită o experiență.
                </p>
                
                <p>
                  <span className="font-semibold text-foreground">Zoe Coffee</span> nu este doar un coffee truck. 
                  Este acel colț care adună oamenii, zâmbetele și poveștile la un loc.
                </p>
                
                <p>
                  Este mirosul de cafea proaspăt măcinată, lumina caldă, detaliile făcute cu grijă 
                  și sentimentul că „aici e ceva special".
                </p>
                
                <div className="border-l-4 border-accent/50 pl-5 py-2 bg-accent/5 rounded-r-lg">
                  <p className="text-foreground/90">
                    De aceea, pentru nunți, botezuri, zile de naștere sau evenimente private, 
                    îți recomandăm să ne rezervi din timp.
                  </p>
                  <p className="mt-2 text-sm">
                    Nu pentru că suntem ocupați. Ci pentru că fiecare eveniment îl tratăm 
                    ca pe un moment unic, construit cu atenție, stil și mult suflet.
                  </p>
                </div>
                
                <div className="space-y-2 pt-2">
                  <p className="flex items-center gap-2">
                    <span className="text-accent">♥</span>
                    Ne place să fim parte din amintirile tale.
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-accent">♥</span>
                    Ne place să arate bine.
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-accent">♥</span>
                    Ne place să se simtă bine.
                  </p>
                </div>
                
                <p className="text-foreground font-medium italic border-t border-border/50 pt-5">
                  Și mai ales, ne place să rămână în sufletul oamenilor mult după ultima ceașcă de cafea.
                </p>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="relative lg:sticky lg:top-24">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-secondary to-muted overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <img 
                      src={zoeLogo} 
                      alt="Zoe Coffee" 
                      className="w-32 h-32 object-contain mx-auto mb-6"
                    />
                    <p className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
                      ∞
                    </p>
                    <p className="text-muted-foreground">Momente Speciale</p>
                  </div>
                </div>
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-5">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
