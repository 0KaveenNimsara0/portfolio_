import React from 'react';
import { Mail, Phone, MapPin, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
<section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] dark:text-white mb-4">Let's Work Together</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8" data-animate style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-semibold text-[#2B2B2B] dark:text-white">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 border border-[#D4D4D4] dark:border-gray-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={20} className="text-[#2B2B2B] dark:text-gray-300" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2B2B2B] dark:text-white">Email</p>
                    <a href="mailto:kaveennimsara12@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-[#2B2B2B] dark:hover:text-white break-all">kaveennimsara12@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 border border-[#D4D4D4] dark:border-gray-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={20} className="text-[#2B2B2B] dark:text-gray-300" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2B2B2B] dark:text-white">Phone</p>
                    <a href="tel:+94123456789" className="text-gray-600 dark:text-gray-300 hover:text-[#2B2B2B] dark:hover:text-white">+94 (785) 225-064</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 border border-[#D4D4D4] dark:border-gray-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin size={20} className="text-[#2B2B2B] dark:text-gray-300" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2B2B2B] dark:text-white">Location</p>
                    <p className="text-gray-600 dark:text-gray-300">Kaluthara south, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md" data-animate style={{ animationDelay: '400ms' }}>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                    <input 
                      type="text"
                      id="name"
                      className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B2B2B] focus:bg-white dark:focus:bg-gray-600 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                   <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                    <input 
                      type="email"
                      id="email"
                      className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B2B2B] focus:bg-white dark:focus:bg-gray-600 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                   <div className="relative">
                    <MessageSquare size={18} className="absolute left-3 top-4 text-gray-400 dark:text-gray-500" />
                    <textarea 
                      id="message"
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B2B2B] focus:bg-white dark:focus:bg-gray-600 transition-all duration-300"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                </div>
                
                <button 
                  type="submit"
                  onClick={(e) => { e.preventDefault(); alert('Message sent! (This is a demo)'); }}
                  className="w-full bg-[#2B2B2B] dark:bg-white dark:text-[#2B2B2B] text-white py-3 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
