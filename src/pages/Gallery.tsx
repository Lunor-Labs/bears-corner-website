import React, { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight, Camera, Video, Filter } from 'lucide-react';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg',
      thumbnail: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg',
      title: 'Golden Honey Bear Ice Cream',
      category: 'ice-cream'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg',
      thumbnail: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg',
      title: 'Chocolate Forest Delight',
      category: 'ice-cream'
    },
    {
      id: 3,
      type: 'video',
      src: 'https://player.vimeo.com/video/123456789',
      thumbnail: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg',
      title: 'Ice Cream Making Process',
      category: 'behind-scenes'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg',
      thumbnail: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg',
      title: 'Fresh Berry Collection',
      category: 'ice-cream'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      thumbnail: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      title: 'Artisanal Chocolate Making',
      category: 'chocolates'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      thumbnail: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      title: 'Premium Chocolate Truffles',
      category: 'chocolates'
    },
    {
      id: 7,
      type: 'video',
      src: 'https://player.vimeo.com/video/987654321',
      thumbnail: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      title: 'Customer Testimonials',
      category: 'testimonials'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      thumbnail: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      title: 'Happy Customers',
      category: 'store'
    },
    {
      id: 9,
      type: 'image',
      src: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg',
      thumbnail: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg',
      title: 'Sundae Creations',
      category: 'sundaes'
    },
    {
      id: 10,
      type: 'image',
      src: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg',
      thumbnail: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg',
      title: 'Store Interior',
      category: 'store'
    },
    {
      id: 11,
      type: 'video',
      src: 'https://player.vimeo.com/video/456789123',
      thumbnail: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg',
      title: 'Chocolate Tempering Process',
      category: 'behind-scenes'
    },
    {
      id: 12,
      type: 'image',
      src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      thumbnail: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      title: 'Milkshake Varieties',
      category: 'shakes'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Media', icon: '🎬', count: mediaItems.length },
    { id: 'ice-cream', name: 'Ice Cream', icon: '🍦', count: mediaItems.filter(item => item.category === 'ice-cream').length },
    { id: 'chocolates', name: 'Chocolates', icon: '🍫', count: mediaItems.filter(item => item.category === 'chocolates').length },
    { id: 'sundaes', name: 'Sundaes', icon: '🍨', count: mediaItems.filter(item => item.category === 'sundaes').length },
    { id: 'shakes', name: 'Milkshakes', icon: '🥤', count: mediaItems.filter(item => item.category === 'shakes').length },
    { id: 'store', name: 'Our Store', icon: '🏪', count: mediaItems.filter(item => item.category === 'store').length },
    { id: 'behind-scenes', name: 'Behind Scenes', icon: '🎥', count: mediaItems.filter(item => item.category === 'behind-scenes').length },
  ];

  const filteredItems = activeFilter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeFilter);

  const openModal = (item) => {
    setSelectedMedia(item);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const navigateMedia = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedMedia.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    }
    
    setSelectedMedia(filteredItems[newIndex]);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-bear-brown-50 via-white to-bear-tan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-bear-gold-100 text-bear-gold-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Camera className="h-4 w-4 mr-2" />
            Visual Journey
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-bear-brown-800 mb-6">
            Our Sweet Gallery
          </h1>
          <p className="text-xl text-bear-brown-600 max-w-3xl mx-auto leading-relaxed">
            Take a visual journey through our delicious creations, happy customers, 
            and behind-the-scenes moments at Bear's Corner.
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b border-bear-tan-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-2 text-bear-brown-600">
              <Filter size={20} />
              <span className="font-medium">Filter by category:</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-bear-gold-500 text-white shadow-lg scale-105'
                    : 'bg-bear-tan-50 text-bear-brown-700 hover:bg-bear-tan-100 hover:scale-105'
                }`}
              >
                <span className="text-xl">{filter.icon}</span>
                <div className="text-left">
                  <div className="text-sm">{filter.name}</div>
                  <div className="text-xs opacity-75">{filter.count} items</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-to-br from-bear-tan-50 to-bear-brown-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-2xl font-display font-bold text-bear-brown-800 mb-2">
                No media found
              </h3>
              <p className="text-bear-brown-600">Try selecting a different category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <div 
                  key={item.id}
                  className="group cursor-pointer overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white animate-scale-in"
                  onClick={() => openModal(item)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="aspect-square bg-cover bg-center relative overflow-hidden">
                    <img 
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Media Type Icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                        {item.type === 'video' ? (
                          <Video size={18} className="text-bear-brown-700" />
                        ) : (
                          <Camera size={18} className="text-bear-brown-700" />
                        )}
                      </div>
                    </div>

                    {/* Play Button for Videos */}
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 hover:bg-white transition-colors duration-200">
                          <Play size={24} className="text-bear-brown-700 ml-1" />
                        </div>
                      </div>
                    )}

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-5xl w-full max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-200"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={() => navigateMedia('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-200"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => navigateMedia('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-200"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Media Content */}
            <div className="bg-white rounded-3xl overflow-hidden animate-scale-in">
              {selectedMedia.type === 'video' ? (
                <div className="aspect-video">
                  <iframe
                    src={selectedMedia.src}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={selectedMedia.title}
                  ></iframe>
                </div>
              ) : (
                <img 
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              )}
              
              {/* Media Info */}
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-bear-brown-800 mb-3">
                  {selectedMedia.title}
                </h3>
                <div className="flex items-center space-x-3">
                  <span className="text-sm bg-bear-tan-100 text-bear-brown-700 px-3 py-1 rounded-full">
                    {selectedMedia.type === 'video' ? 'Video' : 'Photo'}
                  </span>
                  <span className="text-sm text-bear-brown-600 capitalize">
                    {selectedMedia.category.replace('-', ' ')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-32 bg-gradient-to-r from-bear-brown-800 to-bear-brown-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Create Your Own Sweet Memories
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Visit Bear's Corner today and become part of our sweet story. 
            Share your moments with us using #BearsCornerSweet!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-bear-gold-500 hover:bg-bear-gold-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl">
              Visit Our Store
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-bear-brown-800 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105">
              Follow Us on Social
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;