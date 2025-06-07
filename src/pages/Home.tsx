import React from 'react';
import { ArrowRight, Star, Heart, Award, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-bear-gold-500" />,
      title: "Made with Love",
      description: "Every scoop is crafted with passion and the finest ingredients"
    },
    {
      icon: <Award className="h-8 w-8 text-bear-gold-500" />,
      title: "Premium Quality",
      description: "Award-winning recipes using only the best natural ingredients"
    },
    {
      icon: <Users className="h-8 w-8 text-bear-gold-500" />,
      title: "Family Friendly",
      description: "A warm, welcoming space for families and friends to enjoy"
    }
  ];

  const featuredProducts = [
    {
      name: "Golden Honey Bear",
      description: "Rich vanilla ice cream with honey swirls and candied nuts",
      price: "$4.50",
      image: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg",
      popular: true
    },
    {
      name: "Chocolate Forest",
      description: "Decadent chocolate ice cream with brownie chunks and fudge",
      price: "$4.75",
      image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg",
      popular: true
    },
    {
      name: "Berry Bliss",
      description: "Fresh strawberry ice cream with real berry pieces",
      price: "$4.25",
      image: "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg",
      popular: false
    }
  ];

  const stats = [
    { number: "50+", label: "Unique Flavors" },
    { number: "10K+", label: "Happy Customers" },
    { number: "4+", label: "Years of Excellence" },
    { number: "100%", label: "Natural Ingredients" }
  ];

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-bear-brown-50 via-white to-bear-tan-50"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="inline-flex items-center bg-bear-gold-100 text-bear-gold-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="h-4 w-4 mr-2" />
                Premium Ice Cream & Chocolates
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-bear-brown-800 mb-6 leading-tight">
                Bears Corner
                <span className="block text-3xl lg:text-4xl text-bear-gold-600 font-normal mt-2">
                  Sweet Moments Await
                </span>
              </h1>
              
              <p className="text-xl text-bear-brown-600 mb-8 leading-relaxed max-w-xl">
                Indulge in our handcrafted frozen delights and exquisite chocolates, 
                made with love and the finest ingredients for an unforgettable experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/products"
                  className="group bg-bear-gold-500 hover:bg-bear-gold-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Explore Our Menu</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link 
                  to="/gallery"
                  className="border-2 border-bear-brown-600 text-bear-brown-600 hover:bg-bear-brown-600 hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  View Gallery
                </Link>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-slide-up">
              <div className="relative">
                <img 
                  src="/bears-corner-website/BearsCorner.png" 
                  alt="Bears Corner Logo" 
                  className="h-96 w-96 mx-auto animate-float drop-shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-3xl p-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-bear-gold-600">4.9</div>
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-bear-gold-500 fill-current" />
                      ))}
                    </div>
                    <div className="text-sm text-bear-brown-600">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-bear-brown-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-bear-gold-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-bear-tan-200 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-bear-tan-100 text-bear-brown-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-bear-brown-800 mb-6">
              Crafted with Excellence
            </h2>
            <p className="text-xl text-bear-brown-600 max-w-3xl mx-auto leading-relaxed">
              We're passionate about creating exceptional frozen treats that bring joy to every moment
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group text-center p-8 rounded-3xl bg-gradient-to-br from-bear-tan-50 to-bear-brown-50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-bear-brown-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-bear-brown-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-gradient-to-br from-bear-tan-50 to-bear-brown-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-bear-gold-100 text-bear-gold-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Bestsellers
            </div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-bear-brown-800 mb-6">
              Signature Treats
            </h2>
            <p className="text-xl text-bear-brown-600 max-w-3xl mx-auto leading-relaxed">
              Discover our most beloved flavors and artisanal creations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredProducts.map((product, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.popular && (
                    <div className="absolute top-6 left-6 bg-bear-gold-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star size={14} className="fill-current" />
                      <span>Popular</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-bear-brown-800 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-bear-brown-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-bear-gold-600">
                      {product.price}
                    </span>
                    <button className="bg-bear-brown-700 hover:bg-bear-brown-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/products"
              className="group inline-flex items-center space-x-2 bg-bear-brown-700 hover:bg-bear-brown-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              <span>View All Products</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-bear-tan-100 text-bear-brown-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Customer Love
            </div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-bear-brown-800 mb-6">
              What People Say
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Regular Customer",
                comment: "The best ice cream in town! The chocolate flavors are absolutely divine and the service is always exceptional.",
                rating: 5,
                avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
              },
              {
                name: "Mike Chen",
                role: "Family Dad",
                comment: "Bears Corner has become our family's favorite weekend destination. The kids love it and so do we!",
                rating: 5,
                avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
              },
              {
                name: "Emily Davis",
                role: "Gift Buyer",
                comment: "Their artisanal chocolates make perfect gifts. The quality and presentation are outstanding.",
                rating: 5,
                avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-bear-tan-50 to-bear-brown-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-bear-gold-500 fill-current" />
                  ))}
                </div>
                <p className="text-bear-brown-700 mb-6 text-lg leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-bear-brown-800 font-semibold">{testimonial.name}</p>
                    <p className="text-bear-brown-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-gradient-to-r from-bear-brown-800 to-bear-brown-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Visit Bears Corner Today!
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Come experience the magic of our handcrafted ice cream and chocolates. 
            Your taste buds will thank you!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/about"
              className="bg-bear-gold-500 hover:bg-bear-gold-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Find Our Location
            </Link>
            <a 
              href="tel:+15551234567"
              className="border-2 border-white text-white hover:bg-white hover:text-bear-brown-800 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;