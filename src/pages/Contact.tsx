import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Get in <span className="text-brand-accent">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto"
          >
            Have a question about our rentals or car care services? We're here to help. Reach out to us anytime.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Information */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
            className="space-y-10"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {[
                  { icon: <MapPin className="text-brand-accent" size={24} />, title: "Our Location", text: "123 DriveCare Avenue, Auto District, Jaipur, RJ 302001" },
                  { icon: <Phone className="text-brand-accent" size={24} />, title: "Phone Number", text: "+91 98765 43210\n+91 12345 67890" },
                  { icon: <Mail className="text-brand-accent" size={24} />, title: "Email Address", text: "info@drivecaremotors.com\nsupport@drivecaremotors.com" },
                  { icon: <Clock className="text-brand-accent" size={24} />, title: "Working Hours", text: "Monday - Sunday\n9:00 AM - 8:00 PM" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 whitespace-pre-line mt-1">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={slideInRight}
          >
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-bl-full pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all outline-none" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all outline-none" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all outline-none" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all outline-none resize-none" placeholder="How can we help you?"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-brand-accent text-white font-semibold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
