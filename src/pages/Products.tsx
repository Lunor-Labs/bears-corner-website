import React, { useState } from 'react';
import { Star, Heart, Award, Filter, Search } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('ice-cream');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'ice-cream', name: 'Ice Cream', icon: '🍦', count: 12 },
    { id: 'chocolates', name: 'Chocolates', icon: '🍫', count: 8 },
    { id: 'sundaes', name: 'Sundaes', icon: '🍨', count: 6 },
    { id: 'shakes', name: 'Milkshakes', icon: '🥤', count: 5 },
  ];

  const products = {
    'ice-cream': [
      {
        name: "Golden Honey Bear",
        description: "Rich vanilla ice cream with honey swirls and candied nuts",
        price: "$4.50",
        originalPrice: "$5.00",
        image: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg",
        popular: true,
        rating: 4.9,
        reviews: 124,
        tags: ["Signature", "Sweet"]
      },
      {
        name: "Chocolate Forest",
        description: "Decadent chocolate ice cream with brownie chunks and fudge",
        price: "$4.75",
        image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg",
        popular: true,
        rating: 4.8,
        reviews: 98,
        tags: ["Rich", "Chocolate"]
      },
      {
        name: "Berry Bliss",
        description: "Fresh strawberry ice cream with real berry pieces",
        price: "$4.25",
        image: "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg",
        popular: false,
        rating: 4.7,
        reviews: 87,
        tags: ["Fresh", "Fruity"]
      },
      {
        name: "Mint Chocolate Chip",
        description: "Cool mint ice cream with premium chocolate chips",
        price: "$4.50",
        image: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg",
        popular: false,
        rating: 4.6,
        reviews: 76,
        tags: ["Refreshing", "Classic"]
      },
      {
        name: "Caramel Swirl",
        description: "Creamy vanilla with ribbons of salted caramel",
        price: "$4.75",
        image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg",
        popular: true,
        rating: 4.8,
        reviews: 112,
        tags: ["Sweet", "Creamy"]
      },
      {
        name: "Cookies & Cream",
        description: "Classic vanilla ice cream loaded with cookie pieces",
        price: "$4.50",
        image: "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg",
        popular: false,
        rating: 4.7,
        reviews: 89,
        tags: ["Classic", "Crunchy"]
      }
    ],
    'chocolates': [
      {
        name: "Dark Chocolate Truffles",
        description: "Handcrafted dark chocolate truffles with various fillings",
        price: "$12.99",
        image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg",
        popular: true,
        rating: 4.9,
        reviews: 156,
        tags: ["Premium", "Handcrafted"]
      },
      {
        name: "Milk Chocolate Bears",
        description: "Adorable bear-shaped milk chocolates, perfect for gifts",
        price: "$8.99",
        image: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg",
        popular: true,
        rating: 4.8,
        reviews: 203,
        tags: ["Gift", "Cute"]
      },
      {
        name: "White Chocolate Bark",
        description: "Premium white chocolate with dried fruits and nuts",
        price: "$9.99",
        image: "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg",
        popular: false,
        rating: 4.6,
        reviews: 67,
        tags: ["Nutty", "Fruity"]
      },
      {
        name: "Chocolate Gift Box",
        description: "Assorted premium chocolates in elegant packaging",
        price: "$24.99",
        image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg",
        popular: true,
        rating: 4.9,
        reviews: 89,
        tags: ["Gift", "Assorted"]
      }
    ],
    'sundaes': [
      {
        name: "Bear's Special Sundae",
        description: "Three scoops with hot fudge, whipped cream, and cherry",
        price: "$8.99",
        image: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg",
        popular: true,
        rating: 4.9,
        reviews: 145,
        tags: ["Signature", "Large"]
      },
      {
        name: "Chocolate Volcano",
        description: "Chocolate ice cream with warm brownie and hot fudge",
        price: "$9.99",
        image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg",
        popular: true,
        rating: 4.8,
        reviews: 98,
        tags: ["Warm", "Indulgent"]
      },
      {
        name: "Strawberry Delight",
        description: "Vanilla ice cream with fresh strawberries and cream",
        price: "$7.99",
        image: "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg",
        popular: false,
        rating: 4.7,
        reviews: 76,
        tags: ["Fresh", "Light"]
      }
    ],
    'shakes': [
      {
        name: "Classic Vanilla Shake",
        description: "Thick and creamy vanilla milkshake topped with whipped cream",
        price: "$5.99",
        image: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg",
        popular: false,
        rating: 4.6,
        reviews: 54,
        tags: ["Classic", "Creamy"]
      },
      {
        name: "Chocolate Peanut Butter",
        description: "Rich chocolate shake with peanut butter swirl",
        price: "$6.99",
        image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg",
        popular: true,
        rating: 4.8,
        reviews: 87,
        tags: ["Rich", "Nutty"]
      },
      {
        name: "Strawberry Banana",
        description: "Fresh strawberry and banana shake with real fruit",
        price: "$6.49",
        image: "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg",
        popular: true,
        rating: 4.7,
        reviews: 65,
        tags: ["Fresh", "Fruity"]
      }
    ]
  };

  const filteredProducts = products[activeCategory].filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-bear-brown-50 via-white to-bear-tan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-bear-gold-100 text-bear-gold-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              Premium Menu
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-bear-brown-800 mb-6">
              Our Delicious Menu
            </h1>
            <p className="text-xl text-bear-brown-600 leading-relaxed mb-8">
              Discover our handcrafted ice cream flavors, artisanal chocolates, and signature treats 
              made with the finest ingredients and lots of love.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-bear-brown-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search our menu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-bear-tan-200 focus:outline-none focus:ring-2 focus:ring-bear-gold-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b border-bear-tan-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-bear-gold-500 text-white shadow-lg scale-105'
                    : 'bg-bear-tan-50 text-bear-brown-700 hover:bg-bear-tan-100 hover:scale-105'
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <div className="text-left">
                  <div>{category.name}</div>
                  <div className="text-xs opacity-75">{category.count} items</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-br from-bear-tan-50 to-bear-brown-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-display font-bold text-bear-brown-800 mb-2">
                No products found
              </h3>
              <p className="text-bear-brown-600">Try adjusting your search or browse different categories.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col space-y-2">
                      {product.popular && (
                        <div className="bg-bear-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                          <Star size={14} className="fill-current" />
                          <span>Popular</span>
                        </div>
                      )}
                      {product.originalPrice && (
                        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Sale
                        </div>
                      )}
                    </div>
                    
                    {/* Wishlist */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Heart size={18} className="text-bear-brown-600 hover:text-red-500 cursor-pointer transition-colors duration-200" />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {product.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="text-xs bg-bear-tan-100 text-bear-brown-600 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-display font-bold text-bear-brown-800 mb-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-bear-brown-600 mb-4 leading-relaxed text-sm">
                      {product.description}
                    </p>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star size={16} className="text-bear-gold-500 fill-current" />
                        <span className="text-sm font-semibold text-bear-brown-700">{product.rating}</span>
                      </div>
                      <span className="text-xs text-bear-brown-500">({product.reviews} reviews)</span>
                    </div>
                    
                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-bear-gold-600">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-bear-brown-400 line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      <button className="bg-bear-brown-700 hover:bg-bear-brown-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 text-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🔥 Limited Time Offers
            </div>
            <h2 className="text-4xl font-display font-bold text-bear-brown-800 mb-4">
              Special Deals
            </h2>
            <p className="text-xl text-bear-brown-600">
              Don't miss out on these sweet savings!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative bg-gradient-to-br from-bear-gold-400 to-bear-gold-600 p-8 rounded-3xl shadow-xl text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-8 w-8" />
                  <h3 className="text-2xl font-display font-bold">
                    Family Pack Special
                  </h3>
                </div>
                <p className="mb-6 opacity-90">
                  Get 4 scoops of any flavor for just $15.99! Perfect for sharing with the family.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg line-through opacity-75">$18.00</span>
                    <span className="text-3xl font-bold ml-2">$15.99</span>
                  </div>
                  <button className="bg-white text-bear-gold-600 px-6 py-3 rounded-xl font-semibold hover:bg-bear-tan-50 transition-colors duration-300">
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-bear-brown-700 to-bear-brown-800 p-8 rounded-3xl shadow-xl text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-8 w-8" />
                  <h3 className="text-2xl font-display font-bold">
                    Sweet Combo
                  </h3>
                </div>
                <p className="mb-6 opacity-90">
                  Any sundae + milkshake combo for $12.99. The perfect sweet treat combination!
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg line-through opacity-75">$15.98</span>
                    <span className="text-3xl font-bold ml-2">$12.99</span>
                  </div>
                  <button className="bg-white text-bear-brown-700 px-6 py-3 rounded-xl font-semibold hover:bg-bear-tan-50 transition-colors duration-300">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-bear-brown-800 to-bear-brown-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Satisfy Your Sweet Tooth?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Visit us today or call ahead to place your order. We can't wait to serve you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+15551234567"
              className="bg-bear-gold-500 hover:bg-bear-gold-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Call to Order
            </a>
            <button className="border-2 border-white text-white hover:bg-white hover:text-bear-brown-800 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105">
              Visit Our Store
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;