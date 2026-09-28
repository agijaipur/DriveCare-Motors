import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, MapPin, Calendar, Clock, CarFront } from 'lucide-react';

export default function DetailingEnquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReference(`DET-${Math.floor(Math.random() * 100000).toString().padStart(6, '0')}`);
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
            Thank you for your detailing enquiry. Our team will contact you shortly to confirm your appointment.
          </p>
          <div className="bg-brand-soft p-4 rounded-lg mb-8">
            <p className="text-sm font-semibold text-brand-gray-dark uppercase tracking-wider mb-1">Your Reference Number</p>
            <p className="text-2xl font-bold font-mono tracking-widest text-brand-accent">{reference}</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/" className="btn-primary w-full py-3">Return to Home</Link>
            <Link to="/car-care" className="btn-secondary w-full py-3">Explore More Services</Link>
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
        <Link to="/car-care" className="hover:text-brand-accent transition-colors">Car Care</Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="font-medium text-brand-black">Detailing Enquiry</span>
      </div>

      <div className="bg-brand-white rounded-2xl shadow-sm border border-brand-gray overflow-hidden">
        <div className="bg-brand-black text-brand-white p-8 md:p-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Book a Detailing Service</h1>
          <p className="text-brand-gray/80 max-w-xl mx-auto">
            Schedule a premium car wash, detailing, or ceramic coating session.
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
            </div>
          </div>

          {/* Service Details */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-6 border-b border-brand-gray pb-2">2. Service Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2 flex items-center gap-2">
                  <CarFront size={16} /> Vehicle Type <span className="text-status-unavailable-text">*</span>
                </label>
                <select required className="w-full p-3 bg-brand-soft border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all appearance-none">
                  <option value="" disabled selected>Select vehicle type</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="MUV">MUV</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">Service Package <span className="text-status-unavailable-text">*</span></label>
                <select required className="w-full p-3 bg-brand-soft border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all appearance-none">
                  <option value="" disabled selected>Select service</option>
                  <option value="Premium Foam Wash">Premium Foam Wash</option>
                  <option value="Interior Deep Clean">Interior Deep Clean</option>
                  <option value="Ceramic Coating">Ceramic Coating (9H)</option>
                  <option value="General Servicing">General Servicing</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-black mb-2 flex items-center gap-2">
                  <Calendar size={16} /> Preferred Date <span className="text-status-unavailable-text">*</span>
                </label>
                <input required type="date" className="w-full p-3 bg-brand-soft border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2 flex items-center gap-2">
                  <Clock size={16} /> Preferred Time <span className="text-status-unavailable-text">*</span>
                </label>
                <select required className="w-full p-3 bg-brand-soft border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all appearance-none">
                  <option value="" disabled selected>Select time</option>
                  <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                  <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-brand-black mb-2 flex items-center gap-2">
                  <MapPin size={16} /> Location Preference <span className="text-status-unavailable-text">*</span>
                </label>
                <select required className="w-full p-3 bg-brand-soft border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all appearance-none">
                  <option value="DriveCare Studio">At DriveCare Motors Studio (Vesu)</option>
                  <option value="Home Service">At Home (Available for select washes)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-6 border-b border-brand-gray pb-2 flex items-center gap-2">
               Additional Message
            </h3>
            <textarea rows={4} className="w-full p-3 bg-brand-soft border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all resize-none" placeholder="Let us know if you have any specific concerns (e.g., tough stains, scratches)."></textarea>
          </div>

          <div className="flex flex-col items-center">
            <button type="submit" className="btn-primary w-full md:w-auto md:px-12 py-4 text-lg font-bold shadow-lg shadow-brand-accent/20">
              Book Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
