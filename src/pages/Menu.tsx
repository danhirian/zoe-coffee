import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BeagleCompanion from "@/components/BeagleCompanion";
import menuBackground from "@/assets/menu-background.jpg";
import menuVideo from "@/assets/menu-video.mp4";
import menuVideo2 from "@/assets/menu-video-2.mp4";
import menuVideo3 from "@/assets/menu-video-3.mp4";
import coffeeCardBg from "@/assets/coffee-card-bg.jpg";
// Coffee bean decorative component
const CoffeeBean = ({
  className,
  style
}: {
  className?: string;
  style?: React.CSSProperties;
}) => <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 9 9.5 11 12 11C14.5 11 16.5 9 16.5 6.5C16.5 4 14.5 2 12 2ZM12 9C10.6 9 9.5 7.9 9.5 6.5C9.5 5.1 10.6 4 12 4C13.4 4 14.5 5.1 14.5 6.5C14.5 7.9 13.4 9 12 9Z" />
    <ellipse cx="12" cy="16" rx="6" ry="5" />
    <path d="M12 12C9 12 6 14 6 17C6 20 9 22 12 22C15 22 18 20 18 17C18 14 15 12 12 12ZM12 14C12.5 14 13 14.5 13 15C13 15.5 12.5 16 12 16C11.5 16 11 15.5 11 15C11 14.5 11.5 14 12 14Z" />
  </svg>;
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
  badgeVariant: "premium" as const
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
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate('/#location');
    setTimeout(() => {
      const element = document.getElementById('location');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }, 100);
  };
  return <div className="min-h-screen flex flex-col bg-background relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img src={menuBackground} alt="Coffee shop background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
      </div>
      
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16 relative z-10">
        {/* Floating Coffee Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Coffee beans */}
          <CoffeeBean className="absolute top-20 left-[5%] w-8 h-8 text-caramel/20 rotate-45 animate-float" />
          <CoffeeBean className="absolute top-40 right-[8%] w-6 h-6 text-caramel/15 -rotate-12 animate-float" style={{
          animationDelay: '1s'
        }} />
          <CoffeeBean className="absolute top-[30%] left-[3%] w-5 h-5 text-cream/20 rotate-90 animate-float" style={{
          animationDelay: '2s'
        }} />
          <CoffeeBean className="absolute top-[45%] right-[5%] w-7 h-7 text-caramel/20 rotate-[30deg] animate-float" style={{
          animationDelay: '0.5s'
        }} />
          <CoffeeBean className="absolute top-[60%] left-[7%] w-6 h-6 text-cream/15 -rotate-45 animate-float" style={{
          animationDelay: '1.5s'
        }} />
          <CoffeeBean className="absolute top-[75%] right-[4%] w-5 h-5 text-caramel/15 rotate-12 animate-float" style={{
          animationDelay: '2.5s'
        }} />
          
          {/* Coffee cups */}
          <Coffee className="absolute top-32 right-[12%] w-10 h-10 text-caramel/15 rotate-12 animate-float" style={{
          animationDelay: '0.8s'
        }} />
          <Coffee className="absolute top-[50%] left-[10%] w-8 h-8 text-cream/20 -rotate-6 animate-float" style={{
          animationDelay: '1.8s'
        }} />
          <Coffee className="absolute top-[85%] right-[10%] w-9 h-9 text-caramel/20 rotate-[-15deg] animate-float" style={{
          animationDelay: '3s'
        }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Coffee className="w-8 h-8 text-caramel" />
              <h1 className="font-serif text-4xl md:text-5xl font-bold lg:text-5xl text-primary-foreground bg-inherit">
                Meniu evenimente  
              </h1>
              <Coffee className="w-8 h-8 text-caramel" />
            </div>
            <p className="text-lg max-w-2xl mx-auto text-destructive-foreground">
              Alege pachetul perfect pentru evenimentul tău. Toate prețurile sunt per persoană.
            </p>
          </div>

          {/* Menu Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {menuTiers.map((tier, tierIndex) => (
              <Card key={tier.name} className="relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                {/* Video background for all menu cards */}
                <div className="absolute inset-0 z-0">
                  <video
                    src={tierIndex === 0 ? menuVideo : tierIndex === 1 ? menuVideo2 : menuVideo3}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                </div>
                <CardHeader className="pb-4 relative z-10 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="font-serif text-2xl text-white">
                        {tier.name}
                      </CardTitle>
                      <div className="mt-2">
                        <span className="text-3xl font-bold text-caramel">{tier.price}</span>
                        <span className="ml-1 text-white/80">€/persoană</span>
                      </div>
                    </div>
                    <Badge variant={tier.badgeVariant}>{tier.badge}</Badge>
                  </div>
                  <CardDescription className="mt-3 text-sm text-white/80">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 text-white">
                  <div className="space-y-2">
                    <h4 className="font-medium mb-3 text-white">Băuturi incluse:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {tier.drinks.map((drink, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-white/90">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-caramel" />
                          {drink}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Meniu Cafenea Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <CoffeeBean className="w-6 h-6 text-caramel rotate-45" />
                <h2 className="font-serif text-3xl font-bold md:text-5xl text-primary-foreground">
                  Meniu Cafenea
                </h2>
                <CoffeeBean className="w-6 h-6 text-caramel -rotate-45" />
              </div>
              <p className="text-lg max-w-2xl mx-auto text-destructive-foreground">
                Prețuri pentru comenzile la locație
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Coffee */}
              <Card className="border-border/50 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <img 
                    src={coffeeCardBg} 
                    alt="Coffee background" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                </div>
                <CardHeader className="relative z-10">
                  <CardTitle className="font-serif text-2xl text-white">Coffee</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    {coffeeItems.map((item, index) => <li key={index} className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-caramel flex-shrink-0" />
                          <span className="text-white/90">{item.name}</span>
                        </div>
                        <span className="font-medium text-caramel">{item.price}</span>
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
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-black">{item.name}</span>
                        </div>
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
            <button onClick={handleContactClick} className="inline-flex items-center justify-center rounded-md px-8 py-3 text-sm font-medium shadow transition-colors border-primary-foreground text-primary-foreground bg-caramel hover:bg-caramel/90">
              Contactează-ne
            </button>
          </div>
        </div>
      </main>

      <Footer />
      <BeagleCompanion />
    </div>;
};
export default Menu;