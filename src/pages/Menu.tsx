import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const standardDrinks = [
  "Ristretto", "Espresso", "Espresso dublu", "Espresso Macchiato",
  "Espresso Tonic", "Americano", "Cappuccino", "Latte Macchiato",
  "Flat White", "Iced Coffee", "Viennese Coffee", "Espresso decofeinizat"
];

const selectDrinks = [
  "Ristretto", "Espresso", "Espresso dublu", "Espresso Macchiato",
  "Espresso Tonic", "Espresso Tonic caramel", "Americano", "Cappuccino",
  "Latte Macchiato (caramel, vanilie, cocos, ciocolată)", "Flat White",
  "Iced Coffee", "Viennese Coffee", "Espresso decofeinizat", "Frappe",
  "Cortado", "Affogato", "Ceai (mentă, fructe, negru, verde)"
];

const premiumDrinks = [
  "Ristretto", "Espresso", "Espresso dublu", "Espresso Macchiato",
  "Espresso Tonic", "Espresso Tonic caramel", "Americano", "Cappuccino",
  "Latte Macchiato (caramel, vanilie, cocos, ciocolată)", "Flat White",
  "Iced Coffee", "Viennese Coffee", "Espresso decofeinizat", "Frappe",
  "Cortado", "Affogato", "Irish Coffee", "Coffee Baileys", "Coffee Amaretto",
  "Matcha Latte (cocos, banană)", "Iced Matcha Latte (mango, cocos, banană)",
  "Ciocolată caldă (albă/neagră)", "Ceai (mentă, fructe, negru, verde)"
];

const menuTiers = [
  {
    name: "Meniu Standard",
    price: "4",
    description: "Pentru evenimente care se simt, nu doar se trăiesc.",
    drinks: standardDrinks,
    badge: "Popular",
    badgeVariant: "secondary" as const,
  },
  {
    name: "Meniu Select",
    price: "4,5",
    description: "Nu e doar o mașină de cafea pe roți. E o cafenea adevărată, adusă la evenimentul tău.",
    drinks: selectDrinks,
    badge: "Recomandat",
    badgeVariant: "default" as const,
  },
  {
    name: "Meniu Premium",
    price: "5,50",
    description: "Cafea de specialitate, aparatură profesională și barista cu experiență reală.",
    drinks: premiumDrinks,
    badge: "Premium",
    badgeVariant: "outline" as const,
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Meniul Nostru
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Alege pachetul perfect pentru evenimentul tău. Toate prețurile sunt per persoană.
            </p>
          </div>

          {/* Menu Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {menuTiers.map((tier) => (
              <Card 
                key={tier.name} 
                className="relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="font-serif text-2xl text-foreground">
                        {tier.name}
                      </CardTitle>
                      <div className="mt-2">
                        <span className="text-3xl font-bold text-primary">{tier.price}</span>
                        <span className="text-muted-foreground ml-1">€/persoană</span>
                      </div>
                    </div>
                    <Badge variant={tier.badgeVariant}>{tier.badge}</Badge>
                  </div>
                  <CardDescription className="mt-3 text-sm">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground mb-3">Băuturi incluse:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {tier.drinks.map((drink, index) => (
                        <li 
                          key={index} 
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {drink}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Vrei să afli mai multe despre serviciile noastre pentru evenimente?
            </p>
            <a 
              href="#location" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Contactează-ne
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
