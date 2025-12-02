"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#accueil", label: "Accueil" },
    { href: "/#apropos", label: "À propos" },
    { href: "/#actions", label: "Nos actions" },
    { href: "/#projets", label: "Projets" },
    { href: "/don", label: "Faire un don" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="no-underline" onClick={handleLinkClick}>
            <Logo size={140} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary font-medium text-base"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="ml-4 px-6 py-2.5 bg-primary text-white font-medium rounded-lg hover:opacity-90"
            >
              Nous contacter
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} strokeWidth={2} />
            ) : (
              <Menu size={24} strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium rounded-lg"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={handleLinkClick}
              className="mt-2 px-4 py-3 text-center bg-primary text-white font-medium rounded-lg"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
