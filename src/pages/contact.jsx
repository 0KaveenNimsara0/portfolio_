import React, { useState } from 'react';
import { Mail, Phone, MapPin, User, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - you'll need to set these up in EmailJS dashboard
      const serviceId = 'service_wz02u4s'; // Replace with your EmailJS service ID
      const templateId = 'template_cp334dz'; // Replace with your EmailJS template ID
      const publicKey = 'DZPbqBwHaPj-FT2nd'; // Replace with your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'kaveennimsara01@gmail.com', // Your receiving email
        message: formData.message,
        reply_to: formData.email
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
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
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
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
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B2B2B] focus:bg-white dark:focus:bg-gray-600 transition-all duration-300"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    <CheckCircle size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                    <AlertCircle size={20} />
                    <span>Failed to send message. Please try again or contact me directly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2B2B2B] dark:bg-white dark:text-[#2B2B2B] text-white py-3 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
