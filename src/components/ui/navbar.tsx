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
      <nav className="mx-auto max-w-full px-4 sm:px-8 py-3 bg-gradient-to-br from-black/80 via-gray-900/80 to-gray-800/70 backdrop-blur-xl border-b border-white/10 shadow-lg flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://in.admybrand.com/assets/svg/web_logo.svg"
            alt="ADmyBRAND Logo"
            className="h-8 w-auto drop-shadow-md"
            loading="lazy"
          />
        </a>
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-6 text-base font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="px-2 py-1 rounded transition-colors duration-200 hover:bg-white/10 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="rounded-lg px-4">
            Log In
          </Button>
          <Button variant="hero" size="sm" className="rounded-lg px-5 shadow-glow">
            Sign Up
          </Button>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-start pt-24 animate-fade-in-up">
          <ul className="flex flex-col gap-6 text-lg font-semibold w-full max-w-xs mx-auto bg-gradient-to-br from-black/80 via-gray-900/80 to-gray-800/70 rounded-2xl p-8 border border-white/10 shadow-xl">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block px-4 py-2 rounded hover:bg-white/10 hover:text-primary transition-colors duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex gap-2 mt-4">
              <Button variant="ghost" size="sm" className="flex-1 rounded-lg" onClick={() => setMobileOpen(false)}>
                Log In
              </Button>
              <Button variant="hero" size="sm" className="flex-1 rounded-lg shadow-glow" onClick={() => setMobileOpen(false)}>
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