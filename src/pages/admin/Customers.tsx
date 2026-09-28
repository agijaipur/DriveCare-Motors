import React, { useState } from 'react';
import { Search, User, Mail, Phone, CalendarDays } from 'lucide-react';

const mockCustomers = [
  { id: 1, name: 'Rahul Patel', email: 'rahul.p@example.com', phone: '+91 9876543210', totalBookings: 3, lastActive: '2026-09-28', status: 'Active' },
  { id: 2, name: 'Priya Sharma', email: 'priya.s@example.com', phone: '+91 8765432109', totalBookings: 1, lastActive: '2026-09-27', status: 'Active' },
  { id: 3, name: 'Amit Desai', email: 'amit.d@example.com', phone: '+91 7654321098', totalBookings: 5, lastActive: '2026-09-20', status: 'VIP' },
  { id: 4, name: 'Neha Singh', email: 'neha.s@example.com', phone: '+91 6543210987', totalBookings: 0, lastActive: '2026-09-25', status: 'Lead' },
];

export default function AdminCustomers() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = mockCustomers.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.phone.includes(searchTerm)
  );

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'VIP': return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">VIP</span>;
      case 'Active': return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>;
      case 'Lead': return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Lead</span>;
      default: return <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{status}</span>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Customers CRM</h1>
          <p className="text-sm text-gray-500">Manage your customer database and rental history.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50/50">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by name or phone..." 
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
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Contact</th>
                <th className="px-6 py-4 font-medium">Total Bookings</th>
                <th className="px-6 py-4 font-medium">Last Active</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-brand-soft flex items-center justify-center text-brand-accent">
                          <User size={20} />
                        </div>
                        <span className="font-medium text-gray-900">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-gray-600 mb-1"><Phone size={14} /> {c.phone}</div>
                      <div className="flex items-center gap-2 text-gray-500 text-xs"><Mail size={14} /> {c.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-gray-900">{c.totalBookings}</span> bookings
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      <div className="flex items-center gap-2"><CalendarDays size={14} /> {c.lastActive}</div>
                    </td>
                    <td className="px-6 py-4">{getStatusBadge(c.status)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    No customers found.
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
