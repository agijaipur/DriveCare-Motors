import { Link } from 'react-router-dom';
import { vehicles } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';
import { ArrowRight, Calendar, MapPin, Search } from 'lucide-react';

export default function Home() {
  const featuredVehicles = vehicles.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/hero.jpg" 
            alt="Premium SUV on mountain road"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-black/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-brand-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 animate-slide-up">
            Drive Further.<br className="md:hidden" /> Drive Better.
          </h1>
          <p className="text-lg md:text-xl text-brand-gray/90 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Reliable local and outstation car rentals in Surat, along with professional car washing and detailing services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/rental-enquiry" className="btn-primary w-full sm:w-auto text-lg px-8 py-4">
              Enquire for a Rental
            </Link>
            <Link to="/vehicles" className="bg-brand-white/10 hover:bg-brand-white/20 text-brand-white border border-brand-white/30 px-8 py-4 rounded-md font-medium transition-colors w-full sm:w-auto text-lg">
              Explore Vehicles
            </Link>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-brand-white hover:text-brand-accent transition-colors font-medium ml-0 sm:ml-4 flex items-center gap-2">
              WhatsApp Us <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Quick Enquiry Bar */}
      <section className="relative z-20 -mt-16 max-w-5xl mx-auto px-4 w-full">
        <div className="bg-brand-white rounded-xl shadow-xl p-6 md:p-8 border border-brand-gray/50">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2 className="text-2xl font-bold">Looking for a Car Rental?</h2>
            <p className="text-sm text-brand-gray/80 mt-2 md:mt-0 max-w-xs">
              Availability is confirmed manually by our DriveCare Motors team.
            </p>
          </div>
          
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4" action="/rental-enquiry">
            <div className="col-span-1">
              <label className="block text-xs font-semibold text-brand-gray-dark uppercase tracking-wide mb-2">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray-dark" size={20} />
                <input type="text" placeholder="Pickup location in Surat" className="w-full pl-10 pr-4 py-3 bg-brand-soft border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all" />
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-xs font-semibold text-brand-gray-dark uppercase tracking-wide mb-2">Pickup Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray-dark" size={20} />
                <input type="date" className="w-full pl-10 pr-4 py-3 bg-brand-soft border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all text-brand-black" />
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-xs font-semibold text-brand-gray-dark uppercase tracking-wide mb-2">Return Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray-dark" size={20} />
                <input type="date" className="w-full pl-10 pr-4 py-3 bg-brand-soft border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all text-brand-black" />
              </div>
            </div>
            <div className="col-span-1 flex items-end">
              <button type="submit" className="btn-primary w-full h-[50px] flex items-center justify-center gap-2">
                <Search size={20} />
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">DriveCare Services</h2>
          <p className="text-brand-gray/80 max-w-2xl mx-auto">Providing top-tier mobility and vehicle maintenance solutions in Surat.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Local Rentals Card */}
          <div className="group relative rounded-2xl overflow-hidden bg-brand-black text-brand-white aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9]">
            <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop" alt="Local Rentals" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-3xl font-bold mb-3 text-brand-white">Local Car Rentals</h3>
              <p className="text-brand-gray/90 mb-6 max-w-md">
                Comfortable and reliable vehicles for travel within Surat and nearby areas.
              </p>
              <Link to="/rentals#local" className="inline-flex items-center text-brand-accent font-semibold hover:text-brand-white transition-colors">
                Explore Local Rentals <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Outstation Rentals Card */}
          <div className="group relative rounded-2xl overflow-hidden bg-brand-black text-brand-white aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9]">
            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop" alt="Outstation Rentals" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-3xl font-bold mb-3 text-brand-white">Outstation Car Rentals</h3>
              <p className="text-brand-gray/90 mb-6 max-w-md">
                Reliable vehicles for trips outside Surat with rental options suited to your journey.
              </p>
              <Link to="/rentals#outstation" className="inline-flex items-center text-brand-accent font-semibold hover:text-brand-white transition-colors">
                Explore Outstation Rentals <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Find the Right Vehicle</h2>
              <p className="text-brand-gray/80 max-w-xl">Choose from our well-maintained fleet for your next journey.</p>
            </div>
            <Link to="/vehicles" className="hidden md:inline-flex items-center font-medium hover:text-brand-accent transition-colors">
              View All Vehicles <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVehicles.map(vehicle => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
             <Link to="/vehicles" className="btn-secondary w-full py-3">
              View All Vehicles
            </Link>
          </div>
        </div>
      </section>
      
      {/* Car Care Teaser Section */}
      <section className="py-24 bg-brand-near-black text-brand-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 hidden lg:block">
           <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1200&auto=format&fit=crop" alt="Car Detailing" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-r from-brand-near-black to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Complete Car Care <br/><span className="text-brand-accent">Under One Roof</span></h2>
            <p className="text-lg text-brand-gray/80 mb-8 leading-relaxed">
              Beyond rentals, we offer professional car washing and detailing services in Surat to keep your vehicle looking its absolute best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/car-care" className="btn-primary py-4 px-8 text-lg">
                View Detailing Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
