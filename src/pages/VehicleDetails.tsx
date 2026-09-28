import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { vehicles } from '../data/vehicles';
import { CheckCircle2, Info, Users, Fuel, Settings, MapPin, ChevronRight, MessageSquare } from 'lucide-react';
import NotFound from './NotFound';

export default function VehicleDetails() {
  const { id } = useParams<{ id: string }>();
  
  // Find vehicle by slug
  const vehicle = vehicles.find(v => v.slug === id);

  if (!vehicle) {
    return <NotFound />;
  }

  const isAvailable = vehicle.status === 'Available';

  return (
    <div className="bg-brand-soft min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-brand-white border-b border-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-brand-gray-dark">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to="/vehicles" className="hover:text-brand-accent transition-colors">Vehicles</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="font-medium text-brand-black">{vehicle.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Images & Details */}
          <div className="lg:col-span-2">
            <div className="bg-brand-white rounded-2xl overflow-hidden shadow-sm border border-brand-gray mb-8">
              <div className="aspect-[16/9] w-full bg-brand-gray/20">
                <img 
                  src={vehicle.imageUrl} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-brand-white rounded-2xl p-8 shadow-sm border border-brand-gray mb-8">
              <h2 className="text-2xl font-bold mb-4">Vehicle Description</h2>
              <p className="text-brand-gray-dark leading-relaxed mb-6">
                {vehicle.description}
              </p>

              <h3 className="text-xl font-bold mb-4 mt-8">Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {vehicle.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-brand-black">
                    <CheckCircle2 size={18} className="text-status-available-text" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-brand-white rounded-2xl p-8 shadow-sm border border-brand-gray">
              <h3 className="text-xl font-bold mb-4">Rental Terms & Restrictions</h3>
              <ul className="space-y-3 text-brand-gray-dark">
                <li className="flex gap-3"><Info size={20} className="text-brand-accent shrink-0 mt-0.5" /> Driving license and valid ID required for self-drive.</li>
                <li className="flex gap-3"><Info size={20} className="text-brand-accent shrink-0 mt-0.5" /> Minimum rental duration is 1 day.</li>
                <li className="flex gap-3"><Info size={20} className="text-brand-accent shrink-0 mt-0.5" /> Fuel is not included in the rental price. Vehicle must be returned with the same fuel level.</li>
                <li className="flex gap-3"><Info size={20} className="text-brand-accent shrink-0 mt-0.5" /> Over-speeding and rash driving are strictly prohibited.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Pricing & Enquiry */}
          <div className="lg:col-span-1">
            <div className="bg-brand-white rounded-2xl shadow-sm border border-brand-gray p-8 sticky top-24">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-soft text-brand-gray-dark mb-2">
                  {vehicle.category}
                </span>
                <h1 className="text-3xl font-bold">{vehicle.name}</h1>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <div className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 ${isAvailable ? 'bg-status-available-bg text-status-available-text' : 'bg-status-unavailable-bg text-status-unavailable-text'}`}>
                  {isAvailable ? <CheckCircle2 size={16} /> : <Info size={16} />}
                  {vehicle.status}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-brand-soft p-3 rounded-lg flex flex-col items-center justify-center text-center">
                  <Users size={20} className="text-brand-gray-dark mb-1" />
                  <span className="text-sm font-medium">{vehicle.seats} Seats</span>
                </div>
                <div className="bg-brand-soft p-3 rounded-lg flex flex-col items-center justify-center text-center">
                  <Settings size={20} className="text-brand-gray-dark mb-1" />
                  <span className="text-sm font-medium">{vehicle.transmission}</span>
                </div>
                <div className="bg-brand-soft p-3 rounded-lg flex flex-col items-center justify-center text-center">
                  <Fuel size={20} className="text-brand-gray-dark mb-1" />
                  <span className="text-sm font-medium">{vehicle.fuel}</span>
                </div>
                <div className="bg-brand-soft p-3 rounded-lg flex flex-col items-center justify-center text-center">
                  <MapPin size={20} className="text-brand-gray-dark mb-1" />
                  <span className="text-sm font-medium text-center">
                    {vehicle.rentalTypes.join(' & ')}
                  </span>
                </div>
              </div>

              <div className="border-t border-brand-gray pt-6 mb-8">
                <h3 className="text-lg font-bold mb-4">Pricing</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-brand-gray-dark">Starting from</span>
                  <span className="font-bold text-2xl text-brand-accent">{vehicle.priceText}</span>
                </div>
                <p className="text-xs text-brand-gray-dark mt-4">
                  * Prices are starting estimates. Final price depends on season, duration, and driver requirements.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link 
                  to={`/rental-enquiry?vehicle=${vehicle.id}`} 
                  className="btn-primary w-full py-4 text-lg font-bold"
                >
                  Enquire Now
                </Link>
                <a 
                  href={`https://wa.me/1234567890?text=Hi, I am interested in renting the ${vehicle.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white w-full py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare size={20} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
