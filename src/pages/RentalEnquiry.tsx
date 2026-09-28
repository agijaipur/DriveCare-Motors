import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, MapPin, Calendar, Users, MessageSquare } from 'lucide-react';

export default function RentalEnquiry() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const preSelectedVehicle = searchParams.get('vehicle');

  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call to create enquiry
    setReference(`DCM-${Math.floor(Math.random() * 100000).toString().padStart(6, '0')}`);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
        <div className="bg-brand-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-brand-gray">
          <div className="w-20 h-20 bg-status-available-bg text-status-available-text rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-2xl font-bold mb-2">Enquiry Received!</h2>
          <p className="text-brand-gray-dark mb-6">
            Thank you for your rental enquiry. Our team will check vehicle availability and contact you shortly.
          </p>
          <div className="bg-brand-soft p-4 rounded-lg mb-8">
            <p className="text-sm font-semibold text-brand-gray-dark uppercase tracking-wider mb-1">Your Reference Number</p>
            <p className="text-2xl font-bold font-mono tracking-widest text-brand-accent">{reference}</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/" className="btn-primary w-full py-3">Return to Home</Link>
            <Link to="/vehicles" className="btn-secondary w-full py-3">Browse More Vehicles</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center text-sm text-brand-gray-dark mb-8">
        <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="font-medium text-brand-black">Rental Enquiry</span>
      </div>

      <div className="bg-brand-white rounded-2xl shadow-sm border border-brand-gray overflow-hidden">
        <div className="bg-brand-black text-brand-white p-8 md:p-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Send Rental Enquiry</h1>
          <p className="text-brand-gray/80 max-w-xl mx-auto">
            Fill out the form below and our team will get back to you with availability and pricing details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-10">
          {/* Personal Details */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-6 border-b border-brand-gray pb-2">1. Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">Full Name <span className="text-status-unavailable-text">*</span></label>
                <input required type="text" className="w-full p-3 bg-brand-soft border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all" placeholder="e.g. John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">Phone Number <span className="text-status-unavailable-text">*</span></label>
                <input required type="tel" className="w-full p-3 bg-brand-soft border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all" placeholder="+91 98765 43210" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-brand-black mb-2">Email Address</label>
                <input type="email" className="w-full p-3 bg-brand-soft border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all" placeholder="john@example.com" />
              </div>
            </div>
          </div>

          {/* Rental Details */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-6 border-b border-brand-gray pb-2">2. Rental Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-brand-black mb-2">Preferred Vehicle</label>
                <select defaultValue={preSelectedVehicle || ""} className="w-full p-3 bg-brand-soft border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all appearance-none">
                  <option value="" disabled>Select a vehicle (Optional)</option>
                  <option value="innova-crysta">Toyota Innova Crysta (7 Seater MUV)</option>
                  <option value="hyryder">Toyota Urban Cruiser Hyryder (5 Seater SUV)</option>
                  <option value="carens">Kia Carens (7 Seater MUV)</option>
                  <option value="creta">Hyundai Creta (5 Seater SUV)</option>
                  <option value="xuv700">Mahindra XUV700 (7 Seater SUV)</option>
                  <option value="c-class">Mercedes-Benz C-Class (Premium Sedan)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-black mb-2 flex items-center gap-2">
                  <Calendar size={16} /> Pickup Date <span className="text-status-unavailable-text">*</span>
                </label>
                <input required type="date" className="w-full p-3 bg-brand-soft border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2 flex items-center gap-2">
                  <Calendar size={16} /> Return Date <span className="text-status-unavailable-text">*</span>
                </label>
                <input required type="date" className="w-full p-3 bg-brand-soft border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-black mb-2 flex items-center gap-2">
                  <MapPin size={16} /> Pickup Location <span className="text-status-unavailable-text">*</span>
                </label>
                <input required type="text" className="w-full p-3 bg-brand-soft border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all" placeholder="Area in Surat" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2 flex items-center gap-2">
                  <MapPin size={16} /> Drop-off Location <span className="text-status-unavailable-text">*</span>
                </label>
                <input required type="text" className="w-full p-3 bg-brand-soft border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all" placeholder="Area in Surat" />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-black mb-2 flex items-center gap-2">
                  <Users size={16} /> Number of Passengers
                </label>
                <input type="number" min="1" max="10" className="w-full p-3 bg-brand-soft border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all" placeholder="e.g. 4" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">Rental Type <span className="text-status-unavailable-text">*</span></label>
                <select required className="w-full p-3 bg-brand-soft border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all appearance-none">
                  <option value="" disabled selected>Select rental type</option>
                  <option value="local">Local (Within Surat)</option>
                  <option value="outstation">Outstation (Outside Surat)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-6 border-b border-brand-gray pb-2 flex items-center gap-2">
               Additional Requirements
            </h3>
            <label className="block text-sm font-medium text-brand-black mb-2">Message or special requests</label>
            <textarea rows={4} className="w-full p-3 bg-brand-soft border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all resize-none" placeholder="Let us know if you need a driver, specific timing, or have other requirements."></textarea>
          </div>

          <div className="flex flex-col items-center">
            <button type="submit" className="btn-primary w-full md:w-auto md:px-12 py-4 text-lg font-bold shadow-lg shadow-brand-accent/20">
              Submit Enquiry
            </button>
            <p className="text-sm text-brand-gray-dark mt-4">
              By submitting this form, you agree to our terms of service. No payment is required at this stage.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
