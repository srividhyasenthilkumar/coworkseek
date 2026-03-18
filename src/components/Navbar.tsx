"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../assets/logo.webp";
import {
  UserRound,
  Plus,
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500 border-b
        ${scrolled
          ? "bg-black/80 backdrop-blur-xl border-white/5 py-4"
          : "bg-transparent border-transparent py-6"}
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="relative z-50 hover:scale-105 transition-transform">
          <Image src={logo} alt="Cowork Seek" width={150} className="brightness-0 invert" />
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-10">
          <li>
            <Link href="/" className="text-[11px] font-black uppercase tracking-[0.2em] text-white hover:text-red-500 transition-colors">
              Home
            </Link>
          </li>

          <li className="relative group">
            <button className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-white group-hover:text-red-500 transition-colors">
              Locations <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-56 border border-gray-100 p-2">
                {["Chennai", "Bangalore", "Mumbai", "Delhi", "Hyderabad"].map((city) => (
                  <Link
                    key={city}
                    href={`/coworking/${city.toLowerCase()}`}
                    className="block px-4 py-3 text-xs font-bold text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li className="relative group">
            <button className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-white group-hover:text-red-500 transition-colors">
              Spaces <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-56 border border-gray-100 p-2">
                {[
                  { label: "Meeting Rooms", path: "meeting-rooms" },
                  { label: "Private Cabins", path: "private-cabin" },
                  { label: "Dedicated Desks", path: "dedicated-desk" },
                  { label: "Virtual Office", path: "virtual-office" },
                ].map((item) => (
                  <Link
                    key={item.path}
                    href={`/book-spaces/${item.path}`}
                    className="block px-4 py-3 text-xs font-bold text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li>
            <Link href="/contact-us" className="text-[11px] font-black uppercase tracking-[0.2em] text-white hover:text-red-500 transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* ACTIONS */}
        <div className="flex items-center gap-6">
          {/* USER PROFILE */}
          <div className="relative group hidden sm:block">
            <button className="w-11 h-11 rounded-2xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
              <UserRound size={18} />
            </button>

            <div className="absolute right-0 top-full pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white rounded-2xl shadow-3xl w-64 border border-gray-100 p-2 overflow-hidden">
                {user ? (
                  <>
                    <div className="px-5 py-6 bg-gray-50 rounded-xl mb-2">
                      <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Authenticated As</p>
                      <p className="text-sm font-black text-gray-900 italic uppercase truncate">{user.username}</p>
                    </div>
                    {[
                      { label: "My Profile", path: "/profile" },
                      { label: "My Bookings", path: "/profile?tab=bookings" },
                      { label: "My Favourites", path: "/profile?tab=favourites" },
                    ].map((link) => (
                      <Link
                        key={link.path}
                        href={link.path}
                        className="block px-4 py-3 text-[11px] font-black uppercase text-gray-600 hover:bg-gray-50 hover:text-red-600 rounded-xl transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <button
                      onClick={logout}
                      className="w-full flex items-center gap-2 px-4 py-3 text-[11px] font-black uppercase text-red-600 hover:bg-red-50 rounded-xl transition-colors mt-2"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="block px-4 py-3 text-[11px] font-black uppercase text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors text-center"
                  >
                    Login / Join Now
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* ADD LISTING BUTTON */}
          <Link
            href="/listing-form-registration"
            className="hidden md:flex items-center gap-2 bg-red-600 hover:bg-white hover:text-red-600 text-white px-7 py-3 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all shadow-xl shadow-red-900/20 active:scale-95"
          >
            <Plus size={16} /> Add Listing
          </Link>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setOpen(true)}
            className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-white lg:hidden border border-white/10"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* MOBILE SLIDE-OVER MENU */}
        <div className={`
          fixed inset-0 z-[100] transition-all duration-700
          ${open ? "visible" : "invisible"}
        `}>
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-700 ${open ? "opacity-100" : "opacity-0"}`}
            onClick={() => setOpen(false)}
          />

          {/* Menu Card */}
          <div className={`
            absolute top-0 right-0 h-full w-full max-w-sm bg-gray-950 text-white shadow-3xl
            transform transition-transform duration-700 ease-out p-8 flex flex-col
            ${open ? "translate-x-0" : "translate-x-full"}
          `}>
            <div className="flex items-center justify-between mb-12">
              <Image src={logo} alt="Logo" width={140} className="brightness-0 invert" />
              <button onClick={() => setOpen(false)} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 flex-1 overflow-y-auto">
              {[
                { label: "Home", path: "/" },
                { label: "Locations", path: "/coworking" },
                { label: "Meeting Rooms", path: "/book-spaces/meeting-rooms" },
                { label: "Virtual Offices", path: "/book-spaces/virtual-office" },
                { label: "Contact Us", path: "/contact-us" },
              ].map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className="block text-2xl font-black italic uppercase tracking-tighter hover:text-red-500 transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}

              <div className="h-[1px] bg-white/10 my-8" />

              {user ? (
                <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase text-gray-500 tracking-[0.3em]">Authenticated As</p>
                  <p className="text-xl font-black italic text-red-500 uppercase">{user.username}</p>
                  <Link href="/profile" onClick={() => setOpen(false)} className="block text-lg font-bold text-gray-400">View Profile</Link>
                  <button onClick={logout} className="text-lg font-bold text-red-600 flex items-center gap-2">
                    <LogOut size={20} /> Sign Out
                  </button>
                </div>
              ) : (
                <Link href="/login" onClick={() => setOpen(false)} className="block bg-red-600 text-center py-5 rounded-3xl font-black uppercase tracking-widest text-xs">
                  Login / Sign Up
                </Link>
              )}
            </div>

            {/* Socials */}
            <div className="pt-12 flex gap-4">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
