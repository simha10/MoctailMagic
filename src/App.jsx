import React from 'react';
import { GlassWater, MapPin, Truck, ExternalLink, Clock, Sparkles, Star } from 'lucide-react';

function App() {
  const mocktails = [
    {
      name: "Blue Curacao",
      type: "Blue Flavor",
      description: "Blue curacao syrup with coconut water, lime, and a splash of sprite",
      image: "https://img.freepik.com/premium-photo/photo-blue-curacao-aloha-lemonade-plastic-cup-with-ice-mint_693425-29095.jpg",
      price: "₹59",
      bestseller: true
    },
    {
      name: "Black Current",
      type: "Voilet Flavor",
      description: "Black currant syrup with fresh mint, lime, and soda and splash of sprite",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOJ5p4ujWEv6eaNe6TCtTHlZ2xZCobfFsfGGdu_DrRszqfUZU3KEcZEjYddD7TGtRD-E&usqp=CAU",
      price: "₹65",
      bestseller: false
    },
    {
      name: "Blue Berry",
      type: "Red Flavor",
      description: "A delightful blend of cranberry, pomegranate, and raspberry with a hint of mint",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKvr9tNJKaVqRripREs2QuMxs85NOS3jld24GGosfG1ob_FVDp5_5Rb3x84XhPL2mwIPU&usqp=CAU",
      price: "₹75",
      bestseller: true
    },
    {
      name: "Lime & Mint",
      type: "Green Flavor",
      description: "Fresh mint, lime, and kiwi mixed with sparkling water and a touch of honey",
      image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&q=80&w=800",
      price: "₹65",
      bestseller: true
    },
    {
      name: "Mojito Paradise",
      type: "All Mixture  (Not for combos)",
      description: "Our signature blend combining all flavors in perfect harmony",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Y8pG_RXCBgQxUvLa-mu4ouwxXGcRn_esTHCPAuWBG9QFZQCTn4JHwVV-KyP6JTydEUw&usqp=CAU",
      price: "₹75",
      bestseller: false
    },
    {
      name: "Sugandhi",
      type: "Coolant",
      description: "Fresh juice with a hint of lemon and a splash of soda",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZOcjsCswNSoJDwbXfWO9zfc24FL1vjE4w_X1ovpHtfMckjaM3zSnQA6kqJprZp3A8ME&usqp=CAU",
      price: "₹40",
      bestseller: false
      },
    {
      name: "Sip Trio Combo",
      type: "Blue Berry + Any two",
      description: "Get Blue Berry and any 2 flavors of your choice",
      image: "https://fabeveryday.com/wp-content/uploads/2020/08/Sparkling-Mocktails-with-Mint-Basil-and-Rosemary-3-scaled.jpg",
      price: "₹189",
      bestseller: true
    },
    {
      name: "Party Combo",
      type: "Blue Caracao, Black Current, Blue Berry, Lime & Mint and Sugandhi",
      description: "Get all flavors in one combo pack",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSnnNuW5j0KwW58FROKlKLRwH-MVilgpEGze-HMVxWBdejV44aKZByvGXSGGZ0JJ2HU-w&usqp=CAU",
      price: "₹279",
      bestseller: true
    },
    {
      name: "Mega Mocktail Combo",
      type: "All Flavors - 2 times each",
      description: "Get all 5 flavors 2 times. Perfect for a group of 5",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9",
      price: "₹549",
      bestseller: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-200">
      {/* Hero Section */}
      <header className="relative p-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* <img 
            src="https://static.vecteezy.com/system/resources/previews/006/660/335/non_2x/mocktail-strawberry-soda-not-mix-alcohol-fresh-strawberries-in-ceramic-bowl-in-the-background-blur-on-plank-wood-table-restaurant-at-beach-and-sea-cool-juice-drinks-with-ice-cubes-3d-rendering-free-photo.jpg" 
            alt="Background" 
            className="w-full h-full"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-500/30 to-sky-700/30" />
        </div>
        <div className="relative z-10 text-center p-8 animate-fade-in">
          <h1 className="text-6xl font-bold text-sky-900 mb-4 animate-title">
            Mocktail Magic
          </h1>
          <p className="text-2xl text-sky-700 mb-8 animate-slide-up">
            At CELESTRA 2k25 | CSE Department
          </p>
          <div className="flex items-center justify-center gap-2 text-xl text-sky-800 mb-8 animate-fade-in-delay">
            <Clock className="w-6 h-6" />
            <p>Your Time Matters! That's Why We Deliver to Your Location</p>
          </div>
          <GlassWater className="mx-auto w-16 h-16 text-sky-600 animate-float" />
        </div>
      </header>

      {/* Features Section */}
      <section className="py-12 bg-sky-800 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 animate-fade-in-left">
            <Clock className="w-12 h-12 text-sky-300" />
            <div>
              <h3 className="text-xl font-bold">Quick Delivery</h3>
              <p>Within 10 minutes to your location</p>
            </div>
          </div>
          <div className="flex items-center gap-4 animate-fade-in-left" style={{ animationDelay: '200ms' }}>
            <Sparkles className="w-12 h-12 text-sky-300" />
            <div>
              <h3 className="text-xl font-bold">Premium Quality</h3>
              <p>Fresh ingredients, perfect blend</p>
            </div>
          </div>
          <div className="flex items-center gap-4 animate-fade-in-left" style={{ animationDelay: '400ms' }}>
            <MapPin className="w-12 h-12 text-sky-300" />
            <div>
              <h3 className="text-xl font-bold">Campus Wide</h3>
              <p>Delivery across college campus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mocktails Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-sky-900 mb-16">Our Signature Mocktails</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mocktails.map((mocktail, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 relative"
            >
              {mocktail.bestseller && (
                <div className="absolute top-4 right-4 bg-sky-500 text-white px-3 py-1 rounded-full flex items-center gap-1 animate-pulse">
                  <Star className="w-4 h-4" />
                  <span>Bestseller</span>
                </div>
              )}
              <img 
                src={mocktail.image} 
                alt={mocktail.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-sky-900">{mocktail.name}</h3>
                <p className="text-sky-600 mb-2">{mocktail.type}</p>
                <p className="text-gray-600 mb-4">{mocktail.description}</p>
                <p className="text-2xl font-bold text-sky-900">{mocktail.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery Section */}
      <section className="bg-sky-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Truck className="mx-auto w-16 h-16 mb-8 animate-float" />
          <h2 className="text-4xl font-bold mb-8">Campus Delivery Available!</h2>
          <p className="text-xl mb-4">
            We deliver to selected locations within Sir CR Reddy College of Engineering campus.
          </p>
          <p className="text-2xl font-semibold text-sky-300 mb-8 animate-pulse">
            Just ₹10 extra for doorstep delivery!
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <MapPin className="w-6 h-6" />
            <p className="text-lg">CSE Department, Sir CR Reddy College of Engineering</p>
          </div>
          <a 
            href="https://forms.gle/1MnTRSNEeF9PNq6f6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-sky-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-sky-100 transition-colors duration-300 animate-bounce-subtle"
          >
            Order Now
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-950 text-white py-8 px-4 text-center">
        <p>© 2025 Mocktail Magic | CELESTRA 2k25</p>
      </footer>
    </div>
  );
}

export default App;