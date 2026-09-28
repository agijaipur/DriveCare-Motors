import React, { useState } from 'react';
import { Search, Wrench, AlertTriangle, CheckCircle, Calendar, Hammer } from 'lucide-react';

const mockMaintenance = [
  { id: 1, vehicle: 'Toyota Fortuner', issue: 'Regular Servicing (Oil Change)', status: 'In Progress', date: '2026-09-28', cost: '₹5,500', workshop: 'DriveCare Garage' },
  { id: 2, vehicle: 'Kia Seltos', issue: 'AC Gas Refill', status: 'Pending', date: '2026-10-02', cost: '₹1,200', workshop: 'DriveCare Garage' },
  { id: 3, vehicle: 'Mahindra Thar', issue: 'Brake Pad Replacement', status: 'Completed', date: '2026-09-15', cost: '₹3,800', workshop: 'AutoWorks (External)' },
];

export default function AdminMaintenance() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLogs = mockMaintenance.filter(m => 
    m.vehicle.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.issue.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Pending': return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800"><AlertTriangle size={14} className="mr-1"/> Pending</span>;
      case 'In Progress': return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"><Wrench size={14} className="mr-1"/> In Progress</span>;
      case 'Completed': return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"><CheckCircle size={14} className="mr-1"/> Completed</span>;
      default: return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{status}</span>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Vehicle Maintenance</h1>
          <p className="text-sm text-gray-500">Track servicing, repairs, and maintenance costs.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50/50">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search vehicle or issue..." 
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
                <th className="px-6 py-4 font-medium">Vehicle</th>
                <th className="px-6 py-4 font-medium">Issue / Job</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Workshop</th>
                <th className="px-6 py-4 font-medium">Cost</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredLogs.length > 0 ? (
                filteredLogs.map((m) => (
                  <tr key={m.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{m.vehicle}</td>
                    <td className="px-6 py-4 text-gray-700">{m.issue}</td>
                    <td className="px-6 py-4 text-gray-600">
                      <div className="flex items-center gap-2"><Calendar size={14} /> {m.date}</div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      <div className="flex items-center gap-2"><Hammer size={14} /> {m.workshop}</div>
                    </td>
                    <td className="px-6 py-4 font-medium">{m.cost}</td>
                    <td className="px-6 py-4">{getStatusBadge(m.status)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    No maintenance records found.
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
