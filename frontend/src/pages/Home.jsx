import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, TrendingUp, RefreshCw, Droplets, ArrowRight, Leaf, Sun, CloudRain } from "lucide-react";
import heroImage from "../assets/hero-farm.png";

const features = [
  {
    icon: Sprout,
    title: "Crop Recommendation",
    description: "Get AI-powered crop recommendations based on soil nutrients, temperature, humidity, and rainfall.",
    link: "/crop-recommendation",
  },
  {
    icon: TrendingUp,
    title: "Yield Prediction",
    description: "Predict crop yield based on crop type, area, season, and environmental factors.",
    link: "/yield-prediction",
  },
  {
    icon: RefreshCw,
    title: "Crop Rotation",
    description: "Get recommendations for the next crop in your rotation to maintain soil health.",
    link: "/crop-rotation",
  },
  {
    icon: Droplets,
    title: "Fertilizer Recommendation",
    description: "Get personalized fertilizer recommendations based on soil nutrient levels and crop type.",
    link: "/fertilizer-recommendation",
  },
];

const stats = [
  { icon: Leaf, value: "50+", label: "Crop Types" },
  { icon: Sun, value: "30+", label: "States Covered" },
  { icon: CloudRain, value: "4", label: "Seasons" },
];

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Beautiful farmland"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="container relative z-10 px-4 py-24 md:px-6 md:py-32 lg:py-40">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-2 text-primary">
              <Sprout className="h-8 w-8" />
              <span className="text-lg font-semibold">AI-Powered Agriculture</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Smart Farming with{" "}
              <span className="text-primary">Farmo Phile</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Harness the power of artificial intelligence to make smarter agricultural decisions. 
              Get crop recommendations, yield predictions, and fertilizer suggestions tailored to your soil and climate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link to="/crop-recommendation">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-accent/50 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Our Features
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Explore our comprehensive suite of AI-powered agricultural tools designed to help you maximize your farming potential.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="group transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                    <feature.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="gap-2 p-0 text-primary hover:bg-transparent hover:text-primary/80">
                    <Link to={feature.link}>
                      Try Now <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/70 py-16 md:py-24">
        <div className="container px-4 text-center md:px-6">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Transform Your Farming?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
            Start using Farmo Phile today and experience the power of AI in agriculture. Make data-driven decisions for better yields.
          </p>
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <Link to="/crop-recommendation">
              Start Now <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
