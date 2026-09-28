import React, { useState } from 'react';
import { Search, Filter, Phone, Mail, CheckCircle, XCircle, Clock, ChevronRight, Calendar } from 'lucide-react';

const mockEnquiries = [
  { id: 1, ref: 'DCM-000101', customer: 'Rahul Patel', phone: '+91 9876543210', vehicle: 'Toyota Innova Crysta', type: 'Outstation', pickup: '2026-10-03', return: '2026-10-08', status: 'New', date: '2026-09-28' },
  { id: 2, ref: 'DCM-000102', customer: 'Priya Sharma', phone: '+91 8765432109', vehicle: 'Hyundai Creta', type: 'Local', pickup: '2026-09-29', return: '2026-09-30', status: 'Contacted', date: '2026-09-27' },
  { id: 3, ref: 'DCM-000103', customer: 'Amit Desai', phone: '+91 7654321098', vehicle: 'Mahindra XUV700', type: 'Outstation', pickup: '2026-10-10', return: '2026-10-15', status: 'Confirmed', date: '2026-09-26' },
  { id: 4, ref: 'DCM-000104', customer: 'Neha Singh', phone: '+91 6543210987', vehicle: 'Kia Carens', type: 'Local', pickup: '2026-10-01', return: '2026-10-02', status: 'Cancelled', date: '2026-09-25' },
];

export default function RentalEnquiries() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredEnquiries = mockEnquiries.filter(e => {
    const matchesSearch = e.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          e.ref.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          e.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'All' || e.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'New': return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">New</span>;
      case 'Contacted': return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Contacted</span>;
      case 'Confirmed': return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Confirmed</span>;
      case 'Cancelled': return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">Cancelled</span>;
      default: return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{status}</span>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Rental Enquiries</h1>
          <p className="text-sm text-gray-500">Manage customer rental requests and convert them to bookings.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50/50">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by name, ref, or phone..." 
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
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-medium">Reference</th>
                <th className="px-6 py-4 font-medium">Customer Info</th>
                <th className="px-6 py-4 font-medium">Vehicle & Dates</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredEnquiries.length > 0 ? (
                filteredEnquiries.map((enq) => (
                  <tr key={enq.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-brand-accent">{enq.ref}</td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{enq.customer}</div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Phone size={12} /> {enq.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{enq.vehicle} <span className="text-gray-500 font-normal">({enq.type})</span></div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Calendar size={12} /> {enq.pickup} to {enq.return}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(enq.status)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="inline-flex items-center gap-1 text-sm font-medium text-brand-black hover:text-brand-accent bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors">
                        Manage <ChevronRight size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    No enquiries found.
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
