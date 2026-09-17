import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white pt-16 pb-8 border-t border-brand-near-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-bold text-3xl tracking-tighter">DriveCare <span className="text-brand-accent">Motors</span></span>
            </Link>
            <p className="text-brand-gray/80 text-sm leading-relaxed mb-6 max-w-sm">
              Car Rentals • Outstation Travel • Car Wash • Detailing
            </p>
            <p className="text-brand-gray/60 text-sm">
              Your trusted partner for mobility and premium car care in Surat, Gujarat.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Rentals</h4>
            <ul className="space-y-4 text-sm text-brand-gray/80">
              <li><Link to="/rentals#local" className="hover:text-brand-accent transition-colors">Local Rentals</Link></li>
              <li><Link to="/rentals#outstation" className="hover:text-brand-accent transition-colors">Outstation Rentals</Link></li>
              <li><Link to="/vehicles" className="hover:text-brand-accent transition-colors">Vehicles</Link></li>
              <li><Link to="/rental-enquiry" className="hover:text-brand-accent transition-colors">Rental Enquiry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Car Care</h4>
            <ul className="space-y-4 text-sm text-brand-gray/80">
              <li><Link to="/car-care" className="hover:text-brand-accent transition-colors">Car Washing</Link></li>
              <li><Link to="/car-care" className="hover:text-brand-accent transition-colors">Detailing</Link></li>
              <li><Link to="/car-care/packages" className="hover:text-brand-accent transition-colors">Packages</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-accent transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-brand-gray/80 mb-6">
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/faqs" className="hover:text-brand-accent transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
            </ul>
            
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-brand-gray/50">Contact</h4>
            <ul className="space-y-2 text-sm text-brand-gray/80">
              <li>Surat, Gujarat</li>
              <li><a href="tel:+911234567890" className="hover:text-brand-accent transition-colors">+91 12345 67890</a></li>
              <li><a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">WhatsApp Us</a></li>
              <li><a href="mailto:info@drivecaremotors.com" className="hover:text-brand-accent transition-colors">info@drivecaremotors.com</a></li>
            </ul>
          </div>
          
        </div>

        <div className="pt-8 border-t border-brand-near-black text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-brand-gray/50">
          <p>© 2026 DriveCare Motors. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <span className="cursor-pointer hover:text-brand-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-brand-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
