import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { vehicles as initialVehicles } from '../../data/vehicles';

export default function AdminCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 8)); // Sept 2026 for mock data

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Booking Calendar</h1>
          <p className="text-sm text-gray-500">Visual overview of vehicle availability and reservations.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50/50">
          <div className="flex items-center gap-4">
            <button onClick={prevMonth} className="p-2 hover:bg-gray-200 rounded-full transition-colors"><ChevronLeft size={20} /></button>
            <h2 className="text-lg font-bold w-40 text-center">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h2>
            <button onClick={nextMonth} className="p-2 hover:bg-gray-200 rounded-full transition-colors"><ChevronRight size={20} /></button>
          </div>
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-400" />
            <select className="border border-gray-300 rounded-lg py-2 pl-3 pr-8 text-sm focus:ring-2 focus:ring-brand-accent focus:border-brand-accent">
              <option value="All">All Vehicles</option>
              {initialVehicles.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
            </select>
          </div>
        </div>

        <div className="p-4 overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Days Header */}
            <div className="grid grid-cols-7 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center font-medium text-gray-500 text-sm py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
              {Array.from({ length: firstDayOfMonth }).map((_, idx) => (
                <div key={`empty-${idx}`} className="bg-gray-50 min-h-[120px]" />
              ))}
              
              {Array.from({ length: daysInMonth }).map((_, idx) => {
                const day = idx + 1;
                // Mock Bookings
                const hasBooking1 = day >= 25 && day <= 26 && currentMonth.getMonth() === 8;
                const hasBooking2 = day >= 29 && day <= 30 && currentMonth.getMonth() === 8;
                
                return (
                  <div key={`day-${day}`} className="bg-white min-h-[120px] p-2 hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-medium text-gray-700">{day}</span>
                    
                    <div className="mt-2 space-y-1">
                      {hasBooking1 && (
                        <div className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded truncate cursor-pointer hover:bg-blue-200">
                          BKG-50 (C-Class)
                        </div>
                      )}
                      {hasBooking2 && (
                        <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded truncate cursor-pointer hover:bg-green-200">
                          BKG-51 (Hyryder)
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
