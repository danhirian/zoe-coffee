import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import menuBackground from "@/assets/menu-background.jpg";
const standardDrinks = ["Ristretto", "Espresso", "Espresso dublu", "Espresso Macchiato", "Espresso Tonic", "Americano", "Cappuccino", "Latte Macchiato", "Flat White", "Iced Coffee", "Viennese Coffee", "Espresso decofeinizat"];
const selectDrinks = ["Ristretto", "Espresso", "Espresso dublu", "Espresso Macchiato", "Espresso Tonic", "Espresso Tonic caramel", "Americano", "Cappuccino", "Latte Macchiato (caramel, vanilie, cocos, ciocolată)", "Flat White", "Iced Coffee", "Viennese Coffee", "Espresso decofeinizat", "Frappe", "Cortado", "Affogato", "Ceai (mentă, fructe, negru, verde)"];
const premiumDrinks = ["Ristretto", "Espresso", "Espresso dublu", "Espresso Macchiato", "Espresso Tonic", "Espresso Tonic caramel", "Americano", "Cappuccino", "Latte Macchiato (caramel, vanilie, cocos, ciocolată)", "Flat White", "Iced Coffee", "Viennese Coffee", "Espresso decofeinizat", "Frappe", "Cortado", "Affogato", "Irish Coffee", "Coffee Baileys", "Coffee Amaretto", "Matcha Latte (cocos, banană)", "Iced Matcha Latte (mango, cocos, banană)", "Ciocolată caldă (albă/neagră)", "Ceai (mentă, fructe, negru, verde)"];
const menuTiers = [{
  name: "Meniu Standard",
  price: "4",
  description: "Pentru evenimente care se simt, nu doar se trăiesc.",
  drinks: standardDrinks,
  badge: "Popular",
  badgeVariant: "secondary" as const
}, {
  name: "Meniu Select",
  price: "4,5",
  description: "Nu e doar o mașină de cafea pe roți. E o cafenea adevărată, adusă la evenimentul tău.",
  drinks: selectDrinks,
  badge: "Recomandat",
  badgeVariant: "default" as const
}, {
  name: "Meniu Premium",
  price: "5,50",
  description: "Cafea de specialitate, aparatură profesională și barista cu experiență reală.",
  drinks: premiumDrinks,
  badge: "Premium",
  badgeVariant: "outline" as const
}];

// Meniu Cafenea items
const coffeeItems = [{
  name: "Ristretto",
  price: "12 LEI"
}, {
  name: "Espresso",
  price: "12 LEI"
}, {
  name: "Espresso dublu",
  price: "15 LEI"
}, {
  name: "Espresso Macchiato",
  price: "13 LEI"
}, {
  name: "Espresso Tonic",
  price: "14 LEI"
}, {
  name: "Espresso Tonic caramel",
  price: "15 LEI"
}, {
  name: "Americano",
  price: "12 LEI"
}, {
  name: "Cappuccino",
  price: "17 LEI"
}, {
  name: "Latte Macchiato (caramel, vanilie, cocos, ciocolată)",
  price: "18 LEI"
}, {
  name: "Flat White",
  price: "20 LEI"
}, {
  name: "Iced Coffee",
  price: "16 LEI"
}, {
  name: "Vieneze Coffee",
  price: "18 LEI"
}, {
  name: "Espresso decafeinizat",
  price: "12 LEI"
}, {
  name: "Frappé",
  price: "18 LEI"
}, {
  name: "Cortado",
  price: "15 LEI"
}, {
  name: "Affogato",
  price: "17 LEI"
}, {
  name: "Coffee Baileys",
  price: "20 LEI"
}, {
  name: "Coffee Amaretto",
  price: "20 LEI"
}, {
  name: "Extras sirop",
  price: "2 LEI"
}];
const nonCoffeeItems = [{
  name: "Apă",
  price: "8 LEI"
}, {
  name: "Pepsi",
  price: "10 LEI"
}, {
  name: "Matcha Latte (cocos, banană)",
  price: "18 LEI"
}, {
  name: "Iced Matcha Latte (mango, cocos, banană)",
  price: "18 LEI"
}, {
  name: "Ciocolată caldă (albă/neagră)",
  price: "15 LEI"
}, {
  name: "Ceai (mentă, fructe, negru, verde)",
  price: "10 LEI"
}, {
  name: "Vin fierbinte",
  price: "15 LEI"
}];
const Menu = () => {
  return <div className="min-h-screen flex flex-col bg-background relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img src={menuBackground} alt="Coffee shop background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
      </div>
      
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 lg:text-5xl bg-primary text-primary-foreground">
              Meniu evenimente  
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-destructive-foreground">
              Alege pachetul perfect pentru evenimentul tău. Toate prețurile sunt per persoană.
            </p>
          </div>

          {/* Menu Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {menuTiers.map(tier => <Card key={tier.name} className="relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
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
                      {tier.drinks.map((drink, index) => <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {drink}
                        </li>)}
                    </ul>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* Meniu Cafenea Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold mb-4 md:text-5xl text-primary-foreground">
                Meniu Cafenea
              </h2>
              <p className="text-lg max-w-2xl mx-auto text-destructive-foreground">
                Prețuri pentru comenzile la locație
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Coffee */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-foreground">Coffee</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {coffeeItems.map((item, index) => <li key={index} className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{item.name}</span>
                        <span className="font-medium text-foreground">{item.price}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>

              {/* Non Coffee */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-foreground">Non Coffee</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {nonCoffeeItems.map((item, index) => <li key={index} className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{item.name}</span>
                        <span className="font-medium text-foreground">{item.price}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="mb-4 text-primary-foreground">
              Vrei să afli mai multe despre serviciile noastre pentru evenimente?
            </p>
            <a href="#location" className="inline-flex items-center justify-center rounded-md px-8 py-3 text-sm font-medium shadow transition-colors border-primary-foreground text-primary-foreground bg-caramel">
              Contactează-ne
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
};
export default Menu;