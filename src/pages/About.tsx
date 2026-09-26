import { motion } from 'framer-motion';
import { ShieldCheck, Users, Clock, Award } from 'lucide-react';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000&auto=format&fit=crop" 
            alt="About DriveCare Motors" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Redefining <span className="text-brand-accent">Mobility</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200"
          >
            Your trusted partner in premium car rentals and professional car care since 2015.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
            <div className="h-1 w-20 bg-brand-accent rounded-full"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              DriveCare Motors started with a simple mission: to provide a hassle-free, premium driving experience to everyone. Whether you're renting a car for a weekend getaway or trusting us with the meticulous detailing of your own vehicle, we believe in excellence.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Over the years, we have grown from a small local garage to a comprehensive automotive service provider, known for our pristine fleet of vehicles and our uncompromising commitment to customer satisfaction.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000&auto=format&fit=crop" 
              alt="Our Garage" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-500">The pillars of our commitment to you.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: <ShieldCheck size={40} />, title: "Premium Quality", desc: "Meticulously maintained fleet and top-tier detailing products." },
              { icon: <Users size={40} />, title: "Customer First", desc: "Dedicated support team ensuring your journey is perfect." },
              { icon: <Clock size={40} />, title: "24/7 Availability", desc: "Round-the-clock service and roadside assistance." },
              { icon: <Award size={40} />, title: "Certified Experts", desc: "Professional detailers and experienced mechanics." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
              >
                <div className="w-16 h-16 mx-auto bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
