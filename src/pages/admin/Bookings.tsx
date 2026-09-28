import React, { useState } from 'react';
import { Search, Filter, Calendar, MapPin, Edit, Eye, CreditCard } from 'lucide-react';

const mockBookings = [
  { id: 1, ref: 'BKG-000051', customer: 'Priya Sharma', vehicle: 'Toyota Urban Cruiser Hyryder', type: 'Local', pickup: '2026-09-29', return: '2026-09-30', status: 'Confirmed', payment: 'Partially Paid' },
  { id: 2, ref: 'BKG-000050', customer: 'Amit Desai', vehicle: 'Mercedes-Benz C-Class', type: 'Local', pickup: '2026-09-25', return: '2026-09-26', status: 'Completed', payment: 'Paid' },
];

export default function Bookings() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBookings = mockBookings.filter(b => 
    b.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
    b.ref.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.vehicle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Pending': return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Pending</span>;
      case 'Confirmed': return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Confirmed</span>;
      case 'Completed': return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Completed</span>;
      case 'Cancelled': return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">Cancelled</span>;
      default: return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{status}</span>;
    }
  };

  const getPaymentBadge = (status: string) => {
    switch(status) {
      case 'Paid': return <span className="text-green-600 font-medium text-xs flex items-center gap-1"><CreditCard size={12}/> Paid</span>;
      case 'Partially Paid': return <span className="text-yellow-600 font-medium text-xs flex items-center gap-1"><CreditCard size={12}/> Partial</span>;
      case 'Pending': return <span className="text-red-600 font-medium text-xs flex items-center gap-1"><CreditCard size={12}/> Pending</span>;
      default: return <span className="text-gray-600 font-medium text-xs">{status}</span>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Bookings</h1>
          <p className="text-sm text-gray-500">Manage all confirmed and completed reservations.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50/50">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search bookings..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent text-sm"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-medium">Booking Ref</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Vehicle</th>
                <th className="px-6 py-4 font-medium">Period</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Payment</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredBookings.length > 0 ? (
                filteredBookings.map((bkg) => (
                  <tr key={bkg.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{bkg.ref}</td>
                    <td className="px-6 py-4 font-medium">{bkg.customer}</td>
                    <td className="px-6 py-4">
                      <div className="text-gray-900">{bkg.vehicle}</div>
                      <div className="text-xs text-gray-500">{bkg.type}</div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {bkg.pickup} <br/> {bkg.return}
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(bkg.status)}
                    </td>
                    <td className="px-6 py-4">
                      {getPaymentBadge(bkg.payment)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-brand-accent p-1">
                        <Eye size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                    No bookings found.
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
