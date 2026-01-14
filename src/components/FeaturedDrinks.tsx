import cappuccino from "@/assets/cappuccino.jpg";
import latteMacchiato from "@/assets/latte-macchiato.jpg";
import matchaLatte from "@/assets/matcha-latte.jpg";

const drinks = [
  {
    name: "Cappuccino",
    description: "Crema de lapte cu espresso de casă, decorat cu artă latte rafinată.",
    image: cappuccino,
  },
  {
    name: "Latte Macchiato",
    description: "Espresso și crema de lapte în straturi, cremos și bogat cu un gradient frumos.",
    image: latteMacchiato,
  },
  {
    name: "Matcha Latte",
    description: "Matcha japoneză premium combinată cu o crema de lapte  pentru un gust vibrant și pământesc.",
    image: matchaLatte,
  },
];

const FeaturedDrinks = () => {
  return (
    <section id="menu" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3 font-medium">
            Preferatele Noastre
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Băuturi Recomandate
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Băuturi artizanale preparate cu dragoste și cele mai fine ingrediente
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
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {drink.name}
                </h3>
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
