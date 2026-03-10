"use client";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Youtube, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import logo from "../assets/logo.webp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background Decal */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-red-600/5 blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          {/* BRAND COLUMN */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-8">
              <Image src={logo} alt="Cowork Seek" width={180} className="brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs font-medium">
              We believe where you work shapes how you work. Join India's most elite network
              of coworking spaces and discover the perfect environment for your next breakthrough.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Youtube, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all text-gray-400 hover:text-white">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {[
                { label: "Our Story", path: "/about" },
                { label: "Locations", path: "/coworking" },
                { label: "Meeting Rooms", path: "/book-spaces/meeting-rooms" },
                { label: "Hot Desks", path: "/book-spaces/hot-desk" },
                { label: "Contact Us", path: "/contact-us" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.path} className="text-sm font-bold text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 mb-8">Get In Touch</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-red-600 shrink-0" size={20} />
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  Karuna Conclave, AD 42 & 45, Anna Nagar, Chennai, TN 600040
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="text-red-600 shrink-0" size={20} />
                <p className="text-sm text-gray-400 font-bold">+91 99622 62210</p>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="text-red-600 shrink-0" size={20} />
                <p className="text-sm text-gray-400 font-bold">info@coworkseek.com</p>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 mb-8">Newsletter</h4>
            <p className="text-sm text-gray-400 font-medium mb-6">Receive elite workspace tips and exclusive offers.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-red-600 transition-colors font-bold"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-red-600 hover:bg-white hover:text-red-600 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">
            © {currentYear} CoworkSeek. All rights reserved. <span className="text-white">Built for High Performance.</span>
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* FLOAT SCROLL TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-10 right-10 z-40 w-14 h-14 bg-red-600 hover:bg-white hover:text-red-600 text-white rounded-2xl flex items-center justify-center shadow-3xl shadow-red-900/20 group transition-all active:scale-95"
      >
        <ArrowUp className="group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
}
