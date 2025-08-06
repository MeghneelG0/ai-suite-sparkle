import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
  { label: "Company", href: "#company" },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="w-full px-6 sm:px-8 py-4 bg-gradient-to-br from-black/80 via-gray-900/80 to-gray-800/70 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          {/* Logo - shifted slightly right */}
          <div className="flex items-center ml-4">
            <a href="/" className="flex items-center gap-2">
              <img
                src="https://in.admybrand.com/assets/svg/web_logo.svg"
                alt="ADmyBRAND Logo"
                className="h-8 w-auto drop-shadow-md"
                loading="lazy"
              />
            </a>
          </div>

          {/* Center Nav Links - Compact spacing */}
          <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="px-4 py-2 rounded-full transition-all duration-200 hover:bg-white/8 hover:text-white text-gray-300 relative group"
                >
                  {link.label}
                  <div className="absolute inset-0 rounded-full bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-200 -z-10" />
                </a>
              </li>
            ))}
          </ul>

          {/* Actions - shifted left with better styling */}
          <div className="hidden md:flex items-center gap-2 mr-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/8 transition-all duration-200 border-0"
            >
              Log In
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              className="rounded-full px-5 py-2 text-sm font-medium bg-white text-black hover:bg-white/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 transition-all duration-200"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-start pt-24 animate-fade-in-up">
          <ul className="flex flex-col gap-4 text-base font-medium w-full max-w-xs mx-auto bg-gradient-to-br from-black/90 via-gray-900/90 to-gray-800/80 rounded-3xl p-8 border border-white/10 shadow-2xl">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block px-4 py-3 rounded-full hover:bg-white/8 hover:text-white text-gray-300 transition-all duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex gap-3 mt-6">
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex-1 rounded-full text-gray-300 hover:text-white hover:bg-white/8 border-0" 
                onClick={() => setMobileOpen(false)}
              >
                Log In
              </Button>
              <Button 
                variant="default" 
                size="sm" 
                className="flex-1 rounded-full bg-white text-black hover:bg-white/90" 
                onClick={() => setMobileOpen(false)}
              >
                Sign Up
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;