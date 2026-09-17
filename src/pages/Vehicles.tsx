import { useState, useMemo } from 'react';
import { vehicles } from '../data/vehicles';
import type { Vehicle } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';
import { Filter, X } from 'lucide-react';

export default function Vehicles() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedRentalType, setSelectedRentalType] = useState<string>('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Hatchback', 'Sedan', 'SUV', 'Premium', '5 Seater', '7 Seater'];
  const rentalTypes = ['All', 'Local', 'Outstation'];

  const filteredVehicles = useMemo(() => {
    return vehicles.filter(vehicle => {
      const categoryMatch = selectedCategory === 'All' || vehicle.category === selectedCategory || 
        (selectedCategory === '5 Seater' && vehicle.seats === 5) ||
        (selectedCategory === '7 Seater' && vehicle.seats === 7);
        
      const rentalTypeMatch = selectedRentalType === 'All' || vehicle.rentalTypes.includes(selectedRentalType as any);
      
      return categoryMatch && rentalTypeMatch;
    });
  }, [selectedCategory, selectedRentalType]);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Fleet</h1>
        <p className="text-brand-gray/80 max-w-2xl mx-auto">
          Choose from our wide range of well-maintained vehicles for your local or outstation journeys in and around Surat.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <button 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="lg:hidden btn-secondary w-full flex items-center justify-center gap-2 py-3"
        >
          {isFilterOpen ? <X size={20} /> : <Filter size={20} />}
          {isFilterOpen ? 'Close Filters' : 'Filter Vehicles'}
        </button>

        {/* Filters Sidebar */}
        <aside className={`lg:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-brand-white rounded-xl shadow-sm border border-brand-gray p-6 sticky top-28">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Filter size={18} /> Filters
            </h3>
            
            <div className="mb-6">
              <h4 className="font-semibold text-brand-black mb-3 text-sm uppercase tracking-wide">Vehicle Type</h4>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category} className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="text-brand-accent focus:ring-brand-accent h-4 w-4"
                    />
                    <span className="text-brand-gray-dark text-sm">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-brand-black mb-3 text-sm uppercase tracking-wide">Rental Type</h4>
              <div className="space-y-2">
                {rentalTypes.map(type => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="rentalType"
                      checked={selectedRentalType === type}
                      onChange={() => setSelectedRentalType(type)}
                      className="text-brand-accent focus:ring-brand-accent h-4 w-4"
                    />
                    <span className="text-brand-gray-dark text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <button 
              onClick={() => {
                setSelectedCategory('All');
                setSelectedRentalType('All');
              }}
              className="text-brand-accent font-medium text-sm hover:underline"
            >
              Reset Filters
            </button>
          </div>
        </aside>

        {/* Vehicle Grid */}
        <main className="flex-grow">
          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVehicles.map(vehicle => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="bg-brand-white rounded-xl p-12 text-center border border-brand-gray">
              <h3 className="text-xl font-bold mb-2">No vehicles found</h3>
              <p className="text-brand-gray-dark mb-6">We couldn't find any vehicles matching your current filters.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedRentalType('All');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </main>

      </div>
    </div>
  );
}
