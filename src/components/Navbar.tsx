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
} from "lucide-react";

export default function Navbar() {
  
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
        transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <nav
        className={`
          flex items-center justify-between
          px-6 md:px-10 py-5
          transition-colors duration-300
          ${scrolled ? "text-black" : "text-white"}
        `}
      >
        <Image src={logo} alt="Cowork Seek logo" width={140} />
        <ul className="hidden md:flex items-center gap-10 font-medium">
          <li>
            <Link href="/" className="hover:text-red-500 transition">
              Home
            </Link>
          </li>
          <li className="relative group cursor-pointer">
            <span className="flex items-center gap-1 hover:text-red-500">
              <Link href="coworking"> Locations </Link> <span>▾</span>
            </span>

            {/* LEVEL 1 */}
            <ul
              className="
                     absolute top-full left-0 mt-2
                   bg-white text-black rounded-lg shadow-lg w-48
                     opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible
                      transition-all duration-200"
            >
              {/* CHENNAI */}
              <li className="relative group/sub">
                <span className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link href="/coworking/chennai">Chennai</Link> <span>▸</span>
                </span>

                {/* LEVEL 2 */}
                <ul
                  className="
          absolute top-0 left-full ml-1
          bg-white rounded-lg shadow-lg w-48
          opacity-0 invisible
          group-hover/sub:opacity-100 group-hover/sub:visible
          transition-all duration-200"
                >
                  {["Anna Nagar", "Korattur", "Guindy", "T Nagar"].map(
                    (area) => (
                      <li key={area}>
                        <Link
                          href={`/coworking/chennai`}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {area}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </li>

              {/* BANGALORE */}
              <li>
                <Link
                  href="/coworking/bangalore"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Bangalore
                </Link>
              </li>

              {/* COIMBATORE */}
              <li>
                <Link
                  href="/coworking/coimbatore"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Coimbatore
                </Link>
              </li>
              <li>
                <Link
                  href="/coworking/delhi"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Delhi
                </Link>
              </li>
              <li>
                <Link
                  href="/coworking/noida"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Noida
                </Link>
              </li>
              <li>
                <Link
                  href="/coworking/mumbai"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Mumbai
                </Link>
              </li>
              <li>
                <Link
                  href="/coworking/pune"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Pune
                </Link>
              </li>
              <li>
                <Link
                  href="/coworking/hyderabad"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Hyderabad
                </Link>
              </li>
              <li>
                <Link
                  href="/coworking/kolkata"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Kolkata
                </Link>
              </li>
            </ul>
          </li>

          {/* Bookspace */}
          <li className="relative group cursor-pointer">
            <span className="flex items-center gap-1 hover:text-red-500">
              Bookspace <span>▾</span>
            </span>

            {/* LEVEL 1 */}
            <ul
              className="
                     absolute top-full left-0 mt-2
                   bg-white text-black rounded-lg shadow-lg w-48
                     opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible
                      transition-all duration-200"
            >
              <li>
                <Link
                  href="/book-spaces/meeting-rooms"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Meeting Rooms
                </Link>
              </li>

              <li>
                <Link
                  href="/book-spaces/hot-desk"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Hot Desks
                </Link>
              </li>
              <li>
                <Link
                  href="/book-spaces/dedicated-desk"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Dedicated Desks
                </Link>
              </li>
              <li>
                <Link
                  href="/book-spaces/private-cabin"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Private cabin
                </Link>
              </li>
              <li>
                <Link
                  href="/book-spaces/virtual-office"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  virtual office
                </Link>
              </li>
              <li>
                <Link
                  href="/book-spaces-studio"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Studio
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/blogs" className="hover:text-red-500 transition">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="hover:text-red-500 transition">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4 ">
          <div className="relative group">
            {/* User Icon */}
            <Link href="#">
              <button
                className={`w-10 h-10 rounded-full border
          flex items-center justify-center cursor-pointer
          ${scrolled ? "border-black" : "border-white"}
          hover:bg-white hover:text-gray-700`}
              >
                <UserRound size={18} />
              </button>
            </Link>

            {/* Dropdown Menu */}
            <div
              className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-lg border
        opacity-0 invisible group-hover:opacity-100 group-hover:visible
        transition-all duration-200 z-50"
            >
              <ul className=" text-sm text-gray-700">
                <li>
                  <Link
                    href="/my-bookings"
                    className="block px-4 py-2 hover:bg-gray-100 hover:rounded-xl"
                  >
                    My Bookings
                  </Link>
                </li>

                <li>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                </li>

                <li>
                  <Link
                    href="/favourites"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Favourite
                  </Link>
                </li>

                <li className="block px-4 py-2 hover:bg-gray-100 text-red-600 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          </div>
          <Link
            href="/listing-form-registration"
            className="relative hidden md:flex items-center gap-2
            bg-red-600 px-5 py-2 rounded-full font-semibold text-white
            overflow-hidden group"
          >
            <span
              className="absolute inset-0 bg-red-700
              transform -translate-x-full
              group-hover:translate-x-0
              transition-transform duration-500 ease-out"
            />
            <span className="relative z-10 flex items-center gap-2">
              <Plus
                size={18}
                className="transition-transform duration-500 group-hover:rotate-180"
              />
              Add Listing
            </span>
          </Link>
          <Link
            href="/listing-form"
            className="relative hidden md:flex items-center gap-2
            bg-red-600 px-5 py-2 rounded-full font-semibold hover:text-white text-white
            overflow-hidden group hover:bg-red-700 transition transition-300"
          >
            Login
          </Link>
          <button onClick={() => setOpen(true)} className=" hidden md:block">
            <Menu size={26} />
          </button>
        </div>
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/70 z-40"
          />
        )}
        {/* menu */}
        <div
          className={`
            fixed top-0 right-0 h-full
            w-full md:w-1/3
            bg-black text-white z-50
            transform transition-transform duration-500 ease-in-out
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex justify-end p-6">
            <button onClick={() => setOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col items-center text-center px-6 mt-30 space-y-8">
            <Image src={logo} alt="Coworkseek" />

            <hr className="w-full border-gray-700" />

            <div>
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                Karuna Conclave, Anna Nagar <br />
                Chennai, Tamil Nadu
              </p>
              <p className="mt-2 font-medium">+91 99622 62210</p>
            </div>

            <hr className="w-full border-gray-700" />

            <div className="flex gap-4">
              <Link
                className="icon-btn border border-gray-700 rounded-full p-2 hover:text-red-800 transition"
                href="#"
              >
                <Facebook />
              </Link>
              <Link
                className="icon-btn border border-gray-700 rounded-full p-2 hover:text-red-800 transition"
                href="#"
              >
                <Twitter />
              </Link>
              <Link
                className="icon-btn border border-gray-700 rounded-full p-2 hover:text-red-800 transition"
                href="#"
              >
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
