import latteArt from "@/assets/latte-art.jpg";
import coldBrew from "@/assets/cold-brew.jpg";
import espresso from "@/assets/espresso.jpg";

const drinks = [
  {
    name: "Signature Latte",
    description: "Velvety steamed milk with our house espresso, topped with intricate latte art.",
    price: "$5.50",
    image: latteArt,
  },
  {
    name: "Cold Brew",
    description: "Slow-steeped for 18 hours, smooth and rich with notes of chocolate and caramel.",
    price: "$4.75",
    image: coldBrew,
  },
  {
    name: "Single Origin Espresso",
    description: "Bold and nuanced, featuring rotating beans from award-winning farms.",
    price: "$3.50",
    image: espresso,
  },
];

const FeaturedDrinks = () => {
  return (
    <section id="menu" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3 font-medium">
            Our Favorites
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Drinks
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handcrafted beverages made with love and the finest ingredients
          </p>
        </div>

        {/* Drinks Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {drinks.map((drink, index) => (
            <div
              key={drink.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {drink.name}
                  </h3>
                  <span className="text-accent font-semibold text-lg">
                    {drink.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {drink.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDrinks;
