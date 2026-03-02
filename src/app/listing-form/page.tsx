"use client";

import Image from "next/image";
import image from "../../assets/home/casually-dressed-businessmen-and-businesswomen-hav-2026-01-05-06-34-12-utc.jpg";
import logo from "../../assets/logo.webp"
import banner from "../../assets/home/office-modern-loft-2026-01-05-06-03-15-utc.jpg"
import Link from "next/link";
export default function ListingForm() {
  return (
    <section className="min-h-screen flex items-center justify-center py-30 md:py-3 bg-gray-100 px-6">
      {/* <Link href="/">
        <Image
          src={banner}
          alt="Coworking space"
          fill
          priority
          className="object-cover "
        />
      </Link>
      <div className="absolute inset-0 bg-black/50 " /> */}
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* LEFT – FORM */}
        <div className="p-10 md:p-14 flex flex-col justify-center z-10 bg-white">
          <div className="flex items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
              <p className="text-gray-500 mt-2">
                Login to manage your coworking listings
              </p>
            </div>
            <div className="relative w-28 h-14">
              <Image
                src={logo}
                alt="Coworking Seek Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          <form className="mt-10 space-y-6">
            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@coworkseek.com"
                className="
                  w-full px-4 py-3 border rounded-xl
                  focus:outline-none focus:ring-2 focus:ring-red-500
                  transition
                "
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="
                  w-full px-4 py-3 border rounded-xl
                  focus:outline-none focus:ring-2 focus:ring-red-500
                  transition
                "
              />
            </div>

            {/* OPTIONS */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-red-500" />
                Remember me
              </label>

              <span className="text-red-500 font-semibold hover:underline cursor-pointer">
                Forgot password?
              </span>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full bg-red-500 text-white font-bold py-3 rounded-xl
                hover:bg-red-600 hover:scale-[1.02]
                active:scale-95
                transition-all duration-300
              "
            >
              Login
            </button>
          </form>

          {/* EXTRA */}
          <p className="text-center text-sm text-gray-500 mt-8">
            Don’t have an account?{" "}
            <span className="text-red-500 font-semibold cursor-pointer">
              Register
            </span>
          </p>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="relative hidden md:block">
          <Image
            src={image}
            alt="Coworking Space"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute bottom-10 left-10 right-10 text-white">
            {/* <h2 className="text-2xl font-bold">Manage Your Coworking Spaces</h2>
            <p className="text-gray-200 mt-2">
              Add, update and track your listings in one place
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
