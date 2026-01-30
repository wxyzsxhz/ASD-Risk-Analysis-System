"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Article", href: "/article" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "About", href: "/about" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"   // make sure logo.png is in the public folder
                alt="Spectrum Sense Logo"
                width={60}        // adjust width
                height={60}       // adjust height #4b4b4b
                className="rounded-xl object-contain"
              />
            </div>
            <span className="font-kids font-bold text-xl text-[#4b4b4b] group-hover:text-[#77c1e6] transition-colors">
              Spectrum Sense
            </span>
          </Link>


          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                  relative font-medium transition-colors duration-200
                  ${isActive ? "text-[#77c1e6]" : "text-[#4b4b4b] hover:text-[#77c1e6]"}
                  
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:bg-[#77c1e6]
                  after:transition-all after:duration-300
                  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>


          {/* ACTION BUTTONS */}
          <div className="hidden md:flex gap-3">
            {/* Log in button */}
            <Link href="/login">
            <Button
              variant="ghost"
              className="bg-[#F38081] text-white font-bold px-4 py-2 rounded-lg
               hover:bg-[#4b4b4b] hover:text-white transition-colors cursor-pointer"
            >
              Log in
            </Button>
            </Link>

            {/* Sign up button */}
            <Link href="/signup">
            <Button
              variant="nav"
              className="bg-[#77c1e6] text-white font-bold px-4 py-2 rounded-lg
               hover:bg-[#4b4b4b] transition-colors cursor-pointer"
            >
              Sign up
            </Button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  block px-4 py-2 rounded-lg
                  text-muted-foreground
                  hover:bg-accent/10 hover:text-foreground
                  transition
                "
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
