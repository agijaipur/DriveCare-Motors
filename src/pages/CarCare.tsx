import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Sparkles, CarFront, GaugeCircle, CheckCircle } from 'lucide-react';

const CarCare = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    {
      icon: <Wrench size={40} />,
      title: "General Servicing",
      desc: "Comprehensive mechanical checkups, oil changes, and tune-ups to keep your engine running smoothly.",
      price: "From ₹1,999"
    },
    {
      icon: <Sparkles size={40} />,
      title: "Premium Detailing",
      desc: "Deep interior cleaning, exterior polishing, and ceramic coating for that showroom shine.",
      price: "From ₹2,499"
    },
    {
      icon: <CarFront size={40} />,
      title: "Denting & Painting",
      desc: "Expert collision repair, scratch removal, and precise color matching with high-quality paint.",
      price: "Custom Quote"
    },
    {
      icon: <GaugeCircle size={40} />,
      title: "Diagnostics & AC",
      desc: "Advanced computerized scanning, electrical repairs, and AC gas refilling.",
      price: "From ₹999"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=2000&auto=format&fit=crop" 
            alt="Car Mechanical Servicing" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Expert Care for <br/> <span className="text-brand-accent">Your Vehicle</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional mechanical repairs, servicing, and detailing by certified technicians who love cars as much as you do.
            </p>
            <button className="bg-brand-accent hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300">
              Book a Service
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-500">Comprehensive automotive care under one roof.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-blue-50 text-brand-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <div className="pt-4 border-t border-gray-100 font-semibold text-brand-accent">
                  {service.price}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanical Expertise Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1000&auto=format&fit=crop" 
                alt="Mechanic working on engine" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-10 pt-32">
                <h3 className="text-3xl font-bold text-white mb-2">State-of-the-Art Garage</h3>
                <p className="text-gray-300">Equipped with modern diagnostic tools and lifts.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Trust Your Car With Us?</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Whether it's a routine oil change or a complex mechanical overhaul, we treat every vehicle with the utmost precision. We use only genuine OEM parts and industry-leading fluids to guarantee longevity.
              </p>
              
              <ul className="space-y-5">
                {[
                  "Certified & Experienced Mechanics",
                  "100% Genuine Spare Parts Guaranteed",
                  "Transparent Pricing & No Hidden Costs",
                  "Free Pickup & Drop-off Available",
                  "Warranty on All Major Repairs"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <CheckCircle className="text-brand-accent flex-shrink-0" size={24} />
                    <span className="text-lg font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CarCare;
