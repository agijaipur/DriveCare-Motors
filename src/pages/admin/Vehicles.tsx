import React, { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2, CheckCircle, XCircle, Wrench, MoreVertical } from 'lucide-react';
import { vehicles as initialVehicles } from '../../data/vehicles';

export default function AdminVehicles() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // We use initialVehicles for mock data. In a real app, this comes from Supabase.
  const filteredVehicles = initialVehicles.filter(v => {
    const matchesSearch = v.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          v.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || v.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Available':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"><CheckCircle size={14} /> {status}</span>;
      case 'Pending Confirmation':
      case 'Booked':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"><CheckCircle size={14} /> Booked</span>;
      case 'Unavailable':
      case 'Under Maintenance':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800"><Wrench size={14} /> Maintenance</span>;
      default:
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{status}</span>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Vehicle Management</h1>
          <p className="text-sm text-gray-500">Manage your fleet, pricing, and availability.</p>
        </div>
        <button className="flex items-center gap-2 bg-brand-black text-white px-4 py-2 rounded-lg hover:bg-brand-near-black transition-colors">
          <Plus size={20} />
          Add Vehicle
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50/50">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search vehicles..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent text-sm"
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter size={20} className="text-gray-400" />
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 rounded-lg py-2 pl-3 pr-8 text-sm focus:ring-2 focus:ring-brand-accent focus:border-brand-accent w-full sm:w-auto"
            >
              <option value="All">All Statuses</option>
              <option value="Available">Available</option>
              <option value="Pending Confirmation">Booked</option>
              <option value="Unavailable">Maintenance</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-medium">Vehicle</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Pricing</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredVehicles.length > 0 ? (
                filteredVehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-14 rounded overflow-hidden bg-gray-100 flex-shrink-0">
                          <img src={vehicle.imageUrl} alt={vehicle.name} className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{vehicle.name}</div>
                          <div className="text-xs text-gray-500">{vehicle.transmission} • {vehicle.fuel}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-700">{vehicle.category}</span>
                      <div className="text-xs text-gray-500">{vehicle.seats} Seats</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{vehicle.priceText}</div>
                      <div className="text-xs text-gray-500">{vehicle.rentalTypes.join(', ')}</div>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(vehicle.status)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-brand-accent p-1">
                        <Edit size={18} />
                      </button>
                      <button className="text-gray-400 hover:text-red-600 p-1 ml-2">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    No vehicles found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
