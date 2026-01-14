import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import zoeVideo from "@/assets/zoe-coffee-video.mp4";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery7 from "@/assets/gallery-7.jpg";

const galleryImages = [
  { src: gallery5, alt: "Zoe Coffee truck side view" },
  { src: gallery1, alt: "Espresso machine and coffee equipment" },
  { src: gallery2, alt: "Zoe Coffee truck at night" },
  { src: gallery3, alt: "Customers at Zoe Coffee truck" },
  { src: gallery4, alt: "Zoe Coffee truck daytime view" },
  { src: gallery7, alt: "Zoe Coffee espresso machine brewing" },
];

const Story = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, goToPrevious, goToNext]);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);


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
          <div className="space-y-4 mb-20">
            <h3 className="font-serif text-2xl font-semibold text-foreground text-center mb-8">
              Galerie
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Large featured image */}
              <div 
                className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => openLightbox(0)}
              >
                <img 
                  src={galleryImages[0].src} 
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Images 2-3 stacked on the right */}
              {galleryImages.slice(1, 3).map((image, index) => (
                <div 
                  key={index}
                  className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer"
                  onClick={() => openLightbox(index + 1)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}

              {/* Images 4-6 in a row */}
              {galleryImages.slice(3).map((image, index) => (
                <div 
                  key={index + 3}
                  className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer"
                  onClick={() => openLightbox(index + 3)}
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
      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          {/* Image */}
          <div 
            className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Story;
