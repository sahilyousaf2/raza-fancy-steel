import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-xl font-bold tracking-tighter mb-6">RAZA FANCY STEEL</h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            Pioneers in industrial fabrication and warehouse solutions across Pakistan since 2000. Quality, precision, and durability in every weld.
          </p>
          <div className="flex space-x-4">
            <Link href="https://facebook.com/razafancysteel" aria-label="Facebook" className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="https://instagram.com/razafancysteel" aria-label="Instagram" className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
              <Instagram className="w-4 h-4" />
            </Link>
            <Link href="https://linkedin.com/company/razafancysteel" aria-label="LinkedIn" className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
              <Linkedin className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-zinc-400">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-zinc-400">
            <li>Warehouse Sheds</li>
            <li>Solar Structures</li>
            <li>Fiber Glass Work</li>
            <li>Fire Fighting Systems</li>
            <li>SS Fancy Work</li>
            <li>Custom Welding</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm text-zinc-400">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-industrial-steel shrink-0" />
              <span>Plot #219 Sector 7/A, Korangi Industrial Area, Karachi, Pakistan</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-industrial-steel shrink-0" />
              <span>03160290519</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-industrial-steel shrink-0" />
              <span>sahilyousaf66@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center text-sm text-zinc-500">
        <p>© 2026 Raza Fancy Steel. All rights reserved.</p>
      </div>
    </footer>
  );
}
