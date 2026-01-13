import { Coffee, Heart, Leaf } from "lucide-react";

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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div>
              <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3 font-medium">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                A Love Letter to
                <span className="text-accent"> Great Coffee</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  What started as a dream between two friends in 2015 has grown into 
                  something truly special. We believe that coffee is more than just a 
                  drink—it's a ritual, a moment of peace, a connection.
                </p>
                <p>
                  We travel the world to find the most exceptional beans, build 
                  relationships with farmers who share our values, and roast everything 
                  in small batches right here in our shop.
                </p>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-secondary to-muted overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
                      <Coffee className="w-10 h-10 text-accent" />
                    </div>
                    <p className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
                      10+
                    </p>
                    <p className="text-muted-foreground">Years of Passion</p>
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
