import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CustomLogo } from '@/components/custom/CustomLogo';
import { SocialLinks } from '@/components/custom/SocialLinks';
import { Link, useLocation } from "react-router";

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Quiénes Somos', path: '/quienes-somos' },
];

export const CustomHeader = () => {
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

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="transform transition-transform duration-300 group-hover:scale-105">
                <CustomLogo />
              </div>
            </Link>

            {/* Desktop Navigation + Social Links */}
            <div className="hidden md:flex items-center gap-6">
              <nav className="flex items-center gap-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={cn(
                        "relative px-4 py-2 rounded-lg font-medium transition-all duration-300",
                        "hover:bg-gray-800/50",
                        isActive
                          ? "text-amber-400"
                          : "text-gray-300 hover:text-white"
                      )}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-amber-400 rounded-full" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Social Links - Desktop */}
              <SocialLinks iconSize="w-4 h-4" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <>
        {/* Backdrop */}
        <div
          className={cn(
            "fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300",
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={cn(
            "fixed top-0 right-0 h-full w-70 bg-gray-900 z-50 md:hidden",
            "transform transition-transform duration-300 ease-out border-l border-gray-800 shadow-2xl",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <span className="text-lg font-semibold text-white">Menú</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg font-medium transition-colors",
                    isActive
                      ? "bg-amber-400/10 text-amber-400"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Social Links dentro del menú */}
            <div className="pt-4 mt-4 border-t border-gray-800">
              <p className="text-gray-400 text-sm mb-3 px-4">Síguenos</p>
              <div className="flex justify-center">
                <SocialLinks iconSize="w-5 h-5" />
              </div>
            </div>
          </nav>
        </div>
      </>
    </>
  );
};