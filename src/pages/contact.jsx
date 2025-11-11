import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, User, MessageSquare, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
// import emailjs from '@emailjs/browser'; // Removed: We will load from CDN

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [isSdkReady, setIsSdkReady] = useState(false); // State to track EmailJS SDK

  // Scroll to top and animate
  useEffect(() => {
    window.scrollTo(0, 0);

    // Load EmailJS SDK
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      console.log('EmailJS SDK loaded.');
      setIsSdkReady(true);
    };
    document.head.appendChild(script);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });

    const elementsToAnimate = document.querySelectorAll('[data-animate]');
    elementsToAnimate.forEach(el => observer.observe(el));

    return () => {
      const elementsToClean = document.querySelectorAll('[data-animate]');
      elementsToClean.forEach(el => observer.unobserve(el));
      document.head.removeChild(script); // Clean up the script
    };
  }, []);

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

    // Load EmailJS credentials from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS credentials are not set in environment variables.');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Use window.emailjs since it's loaded from CDN
      await window.emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'kaveennimsara12@gmail.com', // Your receiving email
        message: formData.message,
        reply_to: formData.email
      }, publicKey);

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
    <>
      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        [data-animate] { opacity: 0; }
        .animate-fade-in-up { animation: fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        .gradient-text {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #4f46e5 100%);
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* UPDATED: Section container */}
      <section id="contact" className="py-24 pt-40 bg-white dark:bg-gray-950 relative overflow-hidden min-h-screen">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ 
            backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* UPDATED: Section Heading */}
          <div className="text-center mb-20" data-animate>
            <div className="inline-block mb-4">
              <span className="px-5 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold tracking-wide uppercase">
                Contact
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Fill out the form or contact me directly.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* UPDATED: Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {[
                { 
                  icon: <Mail size={22} className="text-indigo-600 dark:text-indigo-400" />,
                  title: "Email",
                  content: "kaveennimsara12@gmail.com",
                  href: "mailto:kaveennimsara12@gmail.com"
                },
                { 
                  icon: <Phone size={22} className="text-indigo-600 dark:text-indigo-400" />,
                  title: "Phone",
                  content: "+94 (785) 225-064",
                  href: "tel:+94785225064"
                },
                { 
                  icon: <MapPin size={22} className="text-indigo-600 dark:text-indigo-400" />,
                  title: "Location",
                  content: "Kalutara, Sri Lanka",
                  href: "https://maps.google.com/?q=Kalutara"
                }
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 shadow-sm hover:shadow-xl hover:shadow-indigo-200/20 dark:hover:shadow-indigo-900/20 transform hover:-translate-y-2 transition-all duration-500"
                  data-animate
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center flex-shrink-0 border border-indigo-200 dark:border-indigo-800">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm break-all group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {item.content}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            
            {/* UPDATED: Form Card */}
            <div 
              className="lg:col-span-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg" 
              data-animate 
              style={{ animationDelay: '300ms' }}
            >
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                {/* Form Inputs */}
                {[
                  { name: 'name', type: 'text', placeholder: 'Your name', icon: <User size={18} /> },
                  { name: 'email', type: 'email', placeholder: 'your.email@example.com', icon: <Mail size={18} /> }
                ].map(input => (
                  <div key={input.name}>
                    <label htmlFor={input.name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 capitalize">
                      {input.name}
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                        {input.icon}
                      </span>
                      <input
                        type={input.type}
                        id={input.name}
                        name={input.name}
                        value={formData[input.name]}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 dark:focus:bg-gray-900 transition-all duration-300"
                        placeholder={input.placeholder}
                      />
                    </div>
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <div className="relative">
                    <span className="absolute left-4 top-5 text-gray-400 dark:text-gray-500">
                      <MessageSquare size={18} />
                    </span>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 dark:focus:bg-gray-900 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900/30 p-4 rounded-xl border border-green-200 dark:border-green-800">
                    <CheckCircle size={20} />
                    <span className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-900/30 p-4 rounded-xl border border-red-200 dark:border-red-800">
                    <AlertCircle size={20} />
                    <span className="text-sm font-medium">Failed to send message. Please try again or contact me directly.</span>
                  </div>
                )}

                {/* UPDATED: Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !isSdkReady}
                  className="group w-full bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-indigo-600/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : !isSdkReady ? (
                    'Loading...'
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;