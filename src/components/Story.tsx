import zoeVideo from "@/assets/zoe-coffee-video.mp4";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const galleryImages = [
  { src: gallery1, alt: "Espresso machine and coffee equipment" },
  { src: gallery2, alt: "Zoe Coffee truck at night" },
  { src: gallery3, alt: "Customers at Zoe Coffee truck" },
  { src: gallery4, alt: "Zoe Coffee truck daytime view" },
  { src: gallery5, alt: "Zoe Coffee truck side view" },
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

          {/* Gallery */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold text-foreground text-center mb-8">
              Galerie
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Large featured image */}
              <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl">
                <img 
                  src={galleryImages[0].src} 
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Smaller images */}
              {galleryImages.slice(1).map((image, index) => (
                <div 
                  key={index}
                  className="relative group overflow-hidden rounded-xl aspect-square"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
