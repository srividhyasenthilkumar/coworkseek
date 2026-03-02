"use client";

import Image from "next/image";
import banner from "../../assets/home/3d-rendering-business-meeting-working-room-office-building-1-scaled.webp";
import user from "../../assets/user-profile.jpg"
export default function AddListingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[300px]">
        <Image
          src={banner}
          alt="Add Coworking Space"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Profile
          </h1>
          {/* <p className="mt-2 text-gray-300">
            Manage & publish your coworking locations
          </p> */}
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="bg-white rounded-2xl shadow p-8 grid md:grid-cols-3 gap-6 items-center">
            <div className="relative h-40 w-40 rounded-full overflow-hidden">
              <Image
                src={user}
                alt="Profile Picture"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* PROFILE DETAILS */}
            <div>
              <p className="text-sm text-gray-500">Owner Name</p>
              <p className="text-lg font-semibold text-gray-800">
                User
              </p>

              <p className="text-sm text-gray-500 mt-2">Email</p>
              <p className="text-gray-800">user@gmail.com</p>
            </div>

            {/* TOTAL LOCATIONS */}
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500">Total Locations Added</p>
              <p className="text-4xl font-bold text-red-500">5</p>
            </div>
          </div>

          {/* SPACE DETAILS */}
          <div className="bg-white rounded-2xl shadow p-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              Coworking Space Details
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <input placeholder="Space Name" className="input" />
              <input placeholder="City" className="input" />
              <input placeholder="Location / Area" className="input" />
              <select className="input">
                <option>Select Space Type</option>
                <option>Hot Desk</option>
                <option>Dedicated Desk</option>
                <option>Private Cabin</option>
                <option>Meeting Room</option>
                <option>Virtual Office</option>
                <option >Studio</option>
              </select>
              <input placeholder="Seating Capacity" className="input" />
              <input placeholder="Starting Price (₹)" className="input" />
            </div>

            <textarea
              rows={4}
              placeholder="Describe your workspace..."
              className="input mt-8"
            />
          </div>

          {/* IMAGE UPLOAD */}
          <div className="bg-white rounded-2xl shadow p-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Workspace Images
            </h2>

            <div className="border-2 border-dashed rounded-xl p-10 text-center">
              <p className="text-gray-500">Upload images of your workspace</p>
              <input type="file" multiple className="mt-4 mx-auto" />
            </div>

            {/* IMAGE PREVIEW PLACEHOLDER */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-32 bg-gray-200 rounded-lg animate-pulse"
                />
              ))}
            </div> */}
          </div>

          {/* SUBMIT */}
          <div className="text-center">
            <button className="bg-red-500 text-white px-16 py-4 rounded-full font-bold hover:bg-red-600 transition">
              Publish Listing
            </button>
          </div>
        </div>
      </section>

      {/* INPUT STYLES */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 14px;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          outline: none;
        }
        .input:focus {
          border-color: #ef4444;
        }
      `}</style>
    </>
  );
}
