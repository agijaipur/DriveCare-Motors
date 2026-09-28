import React from 'react';
import { Save } from 'lucide-react';

export default function AdminSettings() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
        <p className="text-sm text-gray-500">Manage business information, API keys, and configurations.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Business Details</h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
              <input type="text" defaultValue="DriveCare Motors" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent focus:border-brand-accent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone</label>
              <input type="text" defaultValue="+91 1234567890" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent focus:border-brand-accent" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Business Address</label>
              <textarea rows={3} defaultValue="123 VIP Road, Vesu, Surat, Gujarat" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="flex items-center gap-2 bg-brand-black text-white px-6 py-3 rounded-lg hover:bg-brand-near-black transition-colors font-medium">
          <Save size={20} />
          Save Changes
        </button>
      </div>
    </div>
  );
}
