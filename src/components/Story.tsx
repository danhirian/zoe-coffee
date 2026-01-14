import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Send, Calendar, Users, Mail, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
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

const eventTypes = [
  { value: "nunta", label: "Nuntă" },
  { value: "botez", label: "Botez" },
  { value: "zi-nastere", label: "Zi de Naștere" },
  { value: "corporate", label: "Eveniment Corporate" },
  { value: "privat", label: "Eveniment Privat" },
  { value: "altele", label: "Altele" },
];

const Story = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guests: "",
    message: "",
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const eventTypeLabel = eventTypes.find(t => t.value === formData.eventType)?.label || formData.eventType;
    
    const message = `🐕 *Cerere Rezervare Zoe Coffee*

*DETALII CLIENT:*
• Nume: ${formData.name}
• Email: ${formData.email}
• Telefon: ${formData.phone}

*DETALII EVENIMENT:*
• Tip eveniment: ${eventTypeLabel}
• Data: ${formData.eventDate}
• Număr invitați: ${formData.guests || 'Nespecificat'}

*MESAJ ADIȚIONAL:*
${formData.message || 'Niciun mesaj adițional.'}`;

    // Romanian phone number converted to international format (40 = Romania country code)
    const whatsappNumber = "40748626596";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');

    toast({
      title: "Se deschide WhatsApp...",
      description: "Trimite mesajul pentru a finaliza cererea de rezervare.",
    });
  };

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
              
              {/* Smaller images */}
              {galleryImages.slice(1).map((image, index) => (
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
            </div>
          </div>

          {/* Reservation Form */}
          <div id="rezervare" className="scroll-mt-24">
            <div className="text-center mb-12">
              <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium mb-3">
                Rezervări Evenimente
              </p>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Hai să creăm amintiri împreună
              </h3>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Completează formularul de mai jos și te vom contacta pentru a discuta toate detaliile 
                evenimentului tău special.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
              <div className="bg-card rounded-3xl p-8 md:p-10 shadow-lg border border-border/50">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <User className="w-4 h-4 text-accent" />
                      Nume complet
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ion Popescu"
                      required
                      className="bg-background border-border/50 focus:border-accent"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Mail className="w-4 h-4 text-accent" />
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@exemplu.ro"
                      required
                      className="bg-background border-border/50 focus:border-accent"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Phone className="w-4 h-4 text-accent" />
                      Telefon
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="0712 345 678"
                      required
                      className="bg-background border-border/50 focus:border-accent"
                    />
                  </div>

                  {/* Event Type */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      Tip eveniment
                    </label>
                    <Select
                      value={formData.eventType}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, eventType: value }))}
                    >
                      <SelectTrigger className="bg-background border-border/50 focus:border-accent">
                        <SelectValue placeholder="Selectează tipul" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Event Date */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      Data evenimentului
                    </label>
                    <Input
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border/50 focus:border-accent"
                    />
                  </div>

                  {/* Number of Guests */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      Număr aproximativ invitați
                    </label>
                    <Input
                      name="guests"
                      type="number"
                      value={formData.guests}
                      onChange={handleInputChange}
                      placeholder="ex: 100"
                      min="1"
                      className="bg-background border-border/50 focus:border-accent"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-foreground">
                      Detalii suplimentare
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Spune-ne mai multe despre evenimentul tău, locație, preferințe speciale..."
                      rows={4}
                      className="bg-background border-border/50 focus:border-accent resize-none"
                    />
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-base font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Trimite Cererea
                  </Button>
                  <p className="text-muted-foreground text-sm mt-4">
                    Te vom contacta în cel mult 24 de ore.
                  </p>
                </div>
              </div>
            </form>
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
