import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, MapPin, Car, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { vehicles } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';

const Rentals = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000&auto=format&fit=crop" 
            alt="Car Rentals in India" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-accent font-bold tracking-widest uppercase text-sm md:text-base mb-4 block"
          >
            Premium Car Rentals
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
          >
            Drive Your Dreams <br/> With Confidence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
          >
            From the rugged Mahindra Thar to the luxurious Toyota Innova, find the perfect ride for your next Indian adventure.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/vehicles" className="bg-brand-accent hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block">
              Explore Our Fleet
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-500">Rent a car in three simple steps.</p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-12 text-center"
          >
            {[
              { icon: <MapPin size={40} />, title: "1. Choose Location", desc: "Select your pickup and drop-off points across our network." },
              { icon: <Car size={40} />, title: "2. Select Vehicle", desc: "Pick from our wide range of premium Indian cars and SUVs." },
              { icon: <Calendar size={40} />, title: "3. Book & Drive", desc: "Confirm your dates, make a secure payment, and hit the road!" }
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeIn} className="relative">
                {idx !== 2 && <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gray-200 border-t-2 border-dashed border-gray-300"></div>}
                <div className="w-24 h-24 mx-auto bg-blue-50 text-brand-accent rounded-full flex items-center justify-center mb-6 shadow-sm border border-blue-100 relative z-10">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Rentals</h2>
              <p className="text-xl text-gray-500">Our most popular vehicles ready for your journey.</p>
            </div>
            <Link to="/vehicles" className="hidden md:inline-flex items-center font-semibold text-brand-accent hover:text-blue-700 transition-colors">
              View All Vehicles &rarr;
            </Link>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {vehicles.map(vehicle => (
              <motion.div key={vehicle.id} variants={fadeIn} className="h-full">
                <VehicleCard vehicle={vehicle} />
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/vehicles" className="inline-flex items-center font-semibold text-brand-accent hover:text-blue-700 transition-colors">
              View All Vehicles &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-brand-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Rent With Us?</h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                We provide more than just a car. We provide peace of mind, premium quality, and a driving experience tailored to Indian roads.
              </p>
              
              <div className="space-y-6">
                {[
                  "Unlimited Kilometers on Outstation rentals",
                  "Fully sanitized and deep-cleaned vehicles",
                  "Comprehensive Insurance Coverage",
                  "24/7 Roadside Assistance anywhere in India"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <CheckCircle2 className="text-brand-accent flex-shrink-0" size={28} />
                    <span className="text-lg text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-800"
            >
              <img 
                src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1000&auto=format&fit=crop" 
                alt="Happy customer with rental car" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-accent p-3 rounded-full">
                    <ShieldCheck size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">100% Secure</h3>
                    <p className="text-gray-300">Verified vehicles & safe payments</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Rentals;
