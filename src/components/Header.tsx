import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Rentals', path: '/rentals' },
  { name: 'Vehicles', path: '/vehicles' },
  { name: 'Car Care', path: '/car-care' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'FAQs', path: '/faqs' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const headerBg = isScrolled || !isHome || isMobileMenuOpen ? 'bg-brand-black text-brand-white' : 'bg-transparent text-brand-white';

  return (
    <header className={clsx('fixed w-full top-0 z-50 transition-colors duration-300', headerBg)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-bold text-2xl tracking-tighter">DriveCare <span className="text-brand-accent">Motors</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={clsx(
                  'text-sm font-medium hover:text-brand-accent transition-colors',
                  location.pathname === link.path ? 'text-brand-accent' : ''
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-brand-accent transition-colors flex items-center gap-2">
              WhatsApp Us
            </a>
            <Link to="/rental-enquiry" className="btn-primary py-2 px-4 text-sm">
              Get a Rental Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-current hover:text-brand-accent focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-near-black text-brand-white border-t border-brand-gray/20">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  'block px-3 py-3 rounded-md text-base font-medium',
                  location.pathname === link.path ? 'bg-brand-black text-brand-accent' : 'hover:bg-brand-black hover:text-brand-accent'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 pt-4 pb-2 border-t border-brand-gray/20 mt-4 space-y-4 flex flex-col">
              <a href="https://wa.me/1234567890" className="btn-secondary w-full justify-center text-brand-black">
                WhatsApp Us
              </a>
              <Link to="/rental-enquiry" className="btn-primary w-full justify-center">
                Get a Rental Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
