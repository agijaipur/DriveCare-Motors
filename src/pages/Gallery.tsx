import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop", category: "Detailing", alt: "Car Detailing" },
  { id: 2, src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop", category: "Fleet", alt: "Local Rentals" },
  { id: 3, src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop", category: "Outstation", alt: "Outstation Rentals" },
  { id: 4, src: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=800&auto=format&fit=crop", category: "Fleet", alt: "Luxury Vehicles" },
  { id: 5, src: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=800&auto=format&fit=crop", category: "Detailing", alt: "Premium Car Wash" },
  { id: 6, src: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop", category: "Detailing", alt: "Ceramic Coating" },
];

export default function Gallery() {
  return (
    <div className="bg-brand-soft min-h-screen">
      {/* Header */}
      <div className="bg-brand-black text-brand-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-lg text-brand-gray/80 max-w-2xl mx-auto">
            Take a look at our well-maintained fleet and premium detailing work.
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-brand-white border-b border-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-brand-gray-dark">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="font-medium text-brand-black">Gallery</span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="group relative aspect-square overflow-hidden rounded-2xl bg-brand-gray/20 cursor-pointer">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/40 transition-colors duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-brand-accent text-brand-white text-xs font-bold rounded-full mb-2">
                  {image.category}
                </span>
                <h3 className="text-brand-white text-xl font-bold">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
