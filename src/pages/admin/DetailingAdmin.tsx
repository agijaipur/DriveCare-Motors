import React, { useState } from 'react';
import { Search, Filter, Sparkles, CheckCircle, Clock } from 'lucide-react';

const mockDetailing = [
  { id: 1, ref: 'DET-000101', customer: 'Vikas Shah', vehicle: 'Hyundai i20', package: 'Ceramic Coating (9H)', date: '2026-09-30', time: 'Morning', location: 'Studio', status: 'Scheduled' },
  { id: 2, ref: 'DET-000102', customer: 'Sanjay Kumar', vehicle: 'Honda City', package: 'Interior Deep Clean', date: '2026-09-28', time: 'Afternoon', location: 'Home', status: 'In Progress' },
  { id: 3, ref: 'DET-000103', customer: 'Rajesh Mehta', vehicle: 'BMW 3 Series', package: 'Premium Foam Wash', date: '2026-09-27', time: 'Evening', location: 'Studio', status: 'Completed' },
];

export default function AdminDetailing() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDetailing = mockDetailing.filter(d => 
    d.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
    d.ref.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Scheduled': return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Scheduled</span>;
      case 'In Progress': return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">In Progress</span>;
      case 'Completed': return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Completed</span>;
      default: return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{status}</span>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Detailing & Car Care</h1>
          <p className="text-sm text-gray-500">Manage detailing appointments and service schedules.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50/50">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search appointments..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent text-sm"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-medium">Ref</th>
                <th className="px-6 py-4 font-medium">Customer & Vehicle</th>
                <th className="px-6 py-4 font-medium">Package</th>
                <th className="px-6 py-4 font-medium">Schedule</th>
                <th className="px-6 py-4 font-medium">Location</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredDetailing.length > 0 ? (
                filteredDetailing.map((d) => (
                  <tr key={d.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{d.ref}</td>
                    <td className="px-6 py-4">
                      <div className="font-medium">{d.customer}</div>
                      <div className="text-xs text-gray-500">{d.vehicle}</div>
                    </td>
                    <td className="px-6 py-4 text-brand-accent font-medium">
                      <div className="flex items-center gap-1"><Sparkles size={14}/> {d.package}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div>{d.date}</div>
                      <div className="text-xs text-gray-500">{d.time}</div>
                    </td>
                    <td className="px-6 py-4">{d.location}</td>
                    <td className="px-6 py-4">{getStatusBadge(d.status)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    No appointments found.
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
