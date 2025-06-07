import React from 'react';
import { Heart, Users, Award, MapPin, Clock, Phone, Mail, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-12 w-12 text-bear-gold-500" />,
      title: "Passion & Love",
      description: "Every product is crafted with genuine passion and love for the art of ice cream making."
    },
    {
      icon: <Award className="h-12 w-12 text-bear-gold-500" />,
      title: "Quality First",
      description: "We never compromise on quality, using only the finest natural ingredients in all our creations."
    },
    {
      icon: <Users className="h-12 w-12 text-bear-gold-500" />,
      title: "Community Focus",
      description: "We're proud to be a gathering place that brings our community together through shared sweet moments."
    }
  ];

  const team = [
    {
      name: "Rajinda Rathnayake",
      role: "Founder & Head Ice Cream Maker",
      image: "/bears-corner-website/Raji.jpg",
      description: "Sarah's passion for ice cream began in her grandmother's kitchen and has grown into Bears Corner's signature flavors."
    }
  ];

  const milestones = [
    { year: "2025", title: "Founded", description: "Bears Corner opened its doors" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-bear-brown-50 via-white to-bear-tan-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg')] bg-cover bg-center opacity-5"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-bear-gold-100 text-bear-gold-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4 mr-2" />
              Our Story
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-bear-brown-800 mb-6">
              About Bears Corner
            </h1>
            <p className="text-xl text-bear-brown-600 leading-relaxed">
              A sweet story of passion, quality, and community that began with a simple dream 
              to create the perfect ice cream experience.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center bg-bear-tan-100 text-bear-brown-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Our Journey
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-bear-brown-800 mb-8">
                Our Sweet Story
              </h2>
              <div className="space-y-6 text-lg text-bear-brown-600 leading-relaxed">
                <p>
                  Bears Corner was born from a passion for creating exceptional frozen treats that bring 
                  families and friends together. Founded in 2020 by the Johnson family, our journey began 
                  with a simple mission: to craft the finest ice cream and chocolates using only the 
                  highest quality ingredients.
                </p>
                <p>
                  What started as a small family recipe collection has grown into a beloved community 
                  gathering place where every scoop tells a story of dedication, creativity, and love. 
                  We believe that great ice cream isn't just about taste – it's about creating moments 
                  of pure joy and connection.
                </p>
                <p>
                  Today, Bears Corner continues to honor traditional ice cream making techniques while 
                  innovating with exciting new flavors and artisanal chocolates that surprise and 
                  delight our customers every day.
                </p>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg" 
                  alt="Ice cream making process"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-bear-gold-500 text-white p-8 rounded-3xl shadow-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1">4+</div>
                  <div className="text-sm opacity-90">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-gradient-to-br from-bear-tan-50 to-bear-brown-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-bear-gold-100 text-bear-gold-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Journey
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-bear-brown-800 mb-6">
              Milestones & Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl font-bold text-bear-gold-600 mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-display font-bold text-bear-brown-800 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-bear-brown-600 text-sm">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-bear-tan-100 text-bear-brown-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Values
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-bear-brown-800 mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-bear-brown-600 max-w-3xl mx-auto">
              Everything we do is guided by our core values that shape every scoop and every smile
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-gradient-to-br from-bear-tan-50 to-bear-brown-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-4 group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-2xl shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-bear-brown-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-bear-brown-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-gradient-to-br from-bear-brown-50 to-bear-tan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-bear-gold-100 text-bear-gold-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Team
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-bear-brown-800 mb-6">
              Meet the Sweet Makers
            </h2>
            <p className="text-xl text-bear-brown-600">
              The passionate people behind every delicious creation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div 
                key={index}
                className="text-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-4 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-8">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-bear-gold-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                </div>
                <h3 className="text-xl font-display font-bold text-bear-brown-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-bear-gold-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-bear-brown-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-32 bg-gradient-to-br from-bear-brown-800 to-bear-brown-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center bg-bear-gold-500/20 text-bear-gold-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="h-4 w-4 mr-2" />
                Visit Us
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">
                Come Say Hello
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-bear-gold-500/20 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-bear-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                    <p className="text-bear-tan-200 leading-relaxed">
                      Bears Corner Street<br />
                      Hambantota District<br />
                      Walasmulla
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-bear-gold-500/20 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-bear-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                    <div className="text-bear-tan-200 space-y-1">
                      <p>Monday - Thursday: 10:00 AM - 9:00 PM</p>
                      <p>Friday - Saturday: 10:00 AM - 10:00 PM</p>
                      <p>Sunday: 11:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-bear-gold-500/20 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-bear-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                    <div className="text-bear-tan-200 space-y-1">
                      <p>Phone: +1 (555) 123-4567</p>
                      <p>Email: hello@bearscorner.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-display font-bold mb-6">Find Us on the Map</h3>
              <div className="bg-bear-tan-100 rounded-3xl overflow-hidden shadow-xl h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.92565363873186!2d80.6973781099066!3d6.156134872121864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae14ff90b18fbe9%3A0x8f6f6e801cc1cd7b!2sDimuthu%20Bakers!5e0!3m2!1sen!2slk!4v1749280936474!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bears Corner Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;