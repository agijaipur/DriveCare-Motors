import { Link } from 'react-router-dom';
import type { Vehicle } from '../data/vehicles';
import clsx from 'clsx';
import { Users, Gauge, Fuel } from 'lucide-react';

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const getStatusColor = (status: Vehicle['status']) => {
    switch (status) {
      case 'Available':
        return 'bg-[#DCFCE7] text-[#16A34A] border-[#16A34A]/20';
      case 'Unavailable':
        return 'bg-[#FEE2E2] text-[#DC2626] border-[#DC2626]/20';
      case 'Pending Confirmation':
        return 'bg-[#FEF3C7] text-[#D97706] border-[#D97706]/20';
      case 'Information':
      default:
        return 'bg-[#EFF6FF] text-[#2563EB] border-[#2563EB]/20';
    }
  };

  return (
    <div className="card group flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-gray/20">
        <img 
          src={vehicle.imageUrl} 
          alt={vehicle.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className={clsx('px-3 py-1 rounded-full text-xs font-semibold border', getStatusColor(vehicle.status))}>
            {vehicle.status}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-brand-black/80 backdrop-blur-sm text-brand-white px-3 py-1 rounded-full text-xs font-medium">
          {vehicle.category}
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-1">{vehicle.name}</h3>
        <p className="text-brand-accent font-semibold mb-4 text-lg">{vehicle.priceText}</p>
        
        <div className="grid grid-cols-3 gap-2 mb-6 text-sm text-brand-gray/80">
          <div className="flex flex-col items-center p-2 bg-brand-soft rounded-lg text-brand-black">
            <Users size={18} className="mb-1 text-brand-gray-dark" />
            <span className="font-medium text-xs">{vehicle.seats} Seats</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-brand-soft rounded-lg text-brand-black">
            <Gauge size={18} className="mb-1 text-brand-gray-dark" />
            <span className="font-medium text-xs">{vehicle.transmission}</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-brand-soft rounded-lg text-brand-black">
            <Fuel size={18} className="mb-1 text-brand-gray-dark" />
            <span className="font-medium text-xs">{vehicle.fuel}</span>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-3">
          <Link to={`/vehicles/${vehicle.slug}`} className="btn-primary w-full py-2">
            View Details
          </Link>
          <Link to={`/rental-enquiry?vehicle=${vehicle.id}`} className="btn-secondary w-full py-2">
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}
