"use client";
import Image from "next/image";
import Link from "next/link";
import { Facebook,Youtube,Twitter,Linkedin } from "lucide-react";
import logo from "../assets/logo.webp"
export default function Footer() {
  return (
    <>
    <footer className="bg-gradient-to-b from-[#111] to-[#1a1a1a] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-red-500 flex items-center gap-2">
            <div className="text-2xl font-bold text-red-500">
          <Image
          src={logo}
          alt="Cowork Seek logo"
          className="">
          </Image>
        </div>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            We don’t just list spaces—we highlight experiences. Every
            location featured on CoworkSeek offers{" "}
            <span className="font-semibold text-gray-300">
              ergonomically designed infrastructure
            </span>{" "}
            and extraordinary amenities that cater to modern workstyles.
            From <span className="font-semibold">Dedicated Desks</span> to{" "}
            <span className="font-semibold">Private Cabins</span> and{" "}
            <span className="font-semibold">Meeting Rooms</span>.
          </p>

          <p className="mt-4 text-sm">
            Telephone:{" "}
            <span className="text-red-500 font-medium">+91-97100 79798</span>
            <br />
            Email:{" "}
            <span className="text-red-500 font-medium">
              info@coworkseek.com
            </span>
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 mt-5">
            <Facebook size={20} className="hover:text-red-500 transition" />
            <Twitter size={20} className="hover:text-red-500 transition" />
            <Youtube size={20} className="hover:text-red-500 transition" />
            <Linkedin size={20} className="hover:text-red-500 transition" />
          </div>
        </div>

        {/* TOP CITIES */}
        <div>
          <h4 className="text-white font-semibold mb-4">Top Cities</h4>
          <ul className="space-y-2 text-sm">
            <li>Anna Nagar</li>
            <li>T Nagar</li>
            <li>Guindy</li>
            <li>Korattur</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Faq</li>
            <li>Listing</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="text-white font-semibold mb-4">Stay update</h4>

          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full bg-transparent border border-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500"
          />

          <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg text-sm transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        Copyright © 2025 Rankraze. All rights Reserved.
      </div>

      {/* SCROLL TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-red-500 hover:bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition"
      >
        ↑
      </button>
    </footer>
    </>
  );
}


