"use client";

import Image from "next/image";
import profile from "../../assets/user.png";
import banner from "../../assets/empty-living-room-decorated-fun-gathering-with-friends-having-alcoholic-drinks-snacks-nobody-apartment-with-modern-board-games-chess-enjoy-home-meeting-entertainment.jpg"
export default function ProfilePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[350px] overflow-hidden">
        <Image
          src={banner}
          alt="Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide animate-fadeIn">
            My Account
          </h1>
        </div>
      </section>

      <section className="bg-gray-100 min-h-screen py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* PROFILE HEADER */}
          <div className="bg-white rounded-2xl shadow p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-gray-200">
              <Image
                src={profile}
                alt="Profile Picture"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-800"> User Name</h1>
              <p className="text-gray-500 mt-1">Coworking Space Owner</p>
              <p className="text-sm text-gray-400 mt-2">
                Member since Jan 2024
              </p>
            </div>
          </div>

          {/* PROFILE DETAILS */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* CONTACT INFO */}
            <div className="bg-white rounded-2xl shadow p-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">
                Contact Information
              </h2>

              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium"> user@coworkseek.com</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Mobile Number</p>
                  <p className="font-medium">+91 98765 43210</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">City</p>
                  <p className="font-medium">Chennai</p>
                </div>
              </div>
            </div>

            {/* BUSINESS STATS */}
            <div className="bg-white rounded-2xl shadow p-8 text-center">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">
                Business Overview
              </h2>

              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-bold text-red-500">6</p>
                  <p className="text-gray-500">Total Locations</p>
                </div>

                <div>
                  <p className="text-4xl font-bold text-red-500">4</p>
                  <p className="text-gray-500">Active Listings</p>
                </div>
              </div>
            </div>

            {/* ABOUT */}
            <div className="bg-white rounded-2xl shadow p-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">
                Company Description
              </h2>

              <p className="text-gray-600 leading-relaxed">
                I manage and operate multiple coworking spaces across Chennai,
                focused on providing flexible, affordable and professional
                workspaces for startups, freelancers and enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
