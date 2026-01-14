import { Coffee, Heart, Leaf } from "lucide-react";
import zoeVideo from "@/assets/zoe-coffee-video.mp4";
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
    <section id="story" className="py-20 md:py-28 bg-secondary/30">
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
              
              <div className="space-y-5 leading-relaxed">
                <p className="text-lg font-medium text-coffee-dark italic">
                  Sunt momente care merită mai mult decât o cafea bună. Merită o experiență.
                </p>
                
                <p className="text-foreground/80">
                  <span className="font-semibold text-foreground">Zoe Coffee</span> nu este doar un coffee truck. 
                  Este acel colț care adună oamenii, zâmbetele și poveștile la un loc.
                </p>
                
                <p className="text-foreground/80">
                  Este mirosul de cafea proaspăt măcinată, lumina caldă, detaliile făcute cu grijă 
                  și sentimentul că „aici e ceva special".
                </p>
                
                <p className="text-foreground/80">
                  De aceea, pentru nunți, botezuri, zile de naștere sau evenimente private, 
                  îți recomandăm să ne rezervi din timp. Nu pentru că suntem ocupați. 
                  Ci pentru că fiecare eveniment îl tratăm ca pe un moment unic, 
                  construit cu atenție, stil și mult suflet.
                </p>
                
                <div className="space-y-2 pt-2 text-foreground/85">
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
                
                <p className="text-coffee-dark font-medium italic border-t border-accent/20 pt-5">
                  Și mai ales, ne place să rămână în sufletul oamenilor mult după ultima ceașcă de cafea.
                </p>
              </div>
            </div>

            {/* Video Element */}
            <div className="relative lg:sticky lg:top-24">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
                <video 
                  src={zoeVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
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
