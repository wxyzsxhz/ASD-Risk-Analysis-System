import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "Check Risk", href: "/check" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Articles", href: "/article" },
  ],
  resources: [
    { name: "About ASD", href: "/about" },
    { name: "Research", href: "/article" },
    { name: "FAQs", href: "/about" },
    { name: "Support Groups", href: "/about" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/#" },
    { name: "Terms of Service", href: "/#" },
    { name: "Disclaimer", href: "/#" },
    { name: "Cookie Policy", href: "/#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="ml-15">
            <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 -mt-1 mb-3 flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"   // make sure logo.png is in the public folder
                alt="Spectrum Sense Logo"
                width={60}        // adjust width
                height={60}       // adjust height #4b4b4b
                className="rounded-xl object-contain"
              />
            </div>
            <span className="font-kids -mt-1 mb-3 font-bold text-xl text-[#4b4b4b] group-hover:text-[#77c1e6] transition-colors">
              Spectrum Sense
            </span>
            </Link>
            <p className="text-background/70 text-sm text-[#4b4b4b] text-justify leading-relaxed mb-4">
              Empowering parents and healthcare professionals with early ASD awareness tools. 
              Together, we can support every child's unique journey.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#4b4b4b] text-background/70">
              <Heart className="w-4 h-4 text-accent" />
              Made with care for families
            </div>
          </div>

          {/* Quick Links */}
          <div className="ml-28">
            <h3 className="font-kids font-bold text-xl text-[#4b4b4b] mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#4b4b4b] hover:text-[#77c1e6] transition-colors text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="ml-15">
            <h3 className="font-kids font-bold text-xl text-[#4b4b4b] mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#4b4b4b] hover:text-[#77c1e6] transition-colors text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-kids font-bold text-xl text-[#4b4b4b] mb-4">Contact</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-[#4b4b4b] hover:text-[#77c1e6] transition-colors text-background/70 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                support@asdrisk.com
              </li>
              <li className="flex items-center gap-2 text-[#4b4b4b] hover:text-[#77c1e6] transition-colors text-background/70 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                1-800-ASD-HELP
              </li>
              <li className="flex items-start gap-2 text-[#4b4b4b] hover:text-[#77c1e6] transition-colors text-background/70 text-sm">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                Healthcare District,<br />City, State 12345
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-[#4b4b4b] border-t border-background/20 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} ASD Risk Analysis. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-background/60 hover:text-accent transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
