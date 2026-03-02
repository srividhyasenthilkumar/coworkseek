"use client";

import { useState } from "react";
import Image from "next/image";

import { chennaiSpaces } from "../../../data/chennaiSpaces";
import { bangaloreSpaces } from "../../../data/bangalorespace";
import { puneSpaces } from "../../../data/punespace";
import { coimbatoreSpaces } from "../../../data/coimbatorespace";
import { noidaSpaces } from "../../../data/noidaspace";
import { delhiSpaces } from "../../../data/delhispace";
import { mumbaiSpaces } from "../../../data/mumbaispace";
import { hyderabadSpaces } from "../../../data/hyderabad";
import { kolkataSpaces } from "../../../data/kolkata";

export default function AllHotDeskPage() {
  /* 🔥 STEP 1: Merge all cities with city name */
  const allSpaces = [
    ...chennaiSpaces.map((s) => ({ ...s, city: "Chennai" })),
    ...coimbatoreSpaces.map((s) => ({ ...s, city: "Coimbatore" })),
    ...bangaloreSpaces.map((s) => ({ ...s, city: "Bangalore" })),
    ...delhiSpaces.map((s) => ({ ...s, city: "Delhi" })),
    ...noidaSpaces.map((s) => ({ ...s, city: "Noida" })),
    ...mumbaiSpaces.map((s) => ({ ...s, city: "Mumbai" })),
    ...puneSpaces.map((s) => ({ ...s, city: "Pune" })),
    ...hyderabadSpaces.map((s) => ({ ...s, city: "Hyderabad" })),
    ...kolkataSpaces.map((s) => ({ ...s, city: "Kolkata" })),
  ];

  /* 🔥 STEP 2: Meeting rooms only */
  const meetingRooms = allSpaces.filter((space) =>
    space.bookspace?.toLowerCase().includes("hot"),
  );

  /* 🔥 STEP 3: Locations list */
  const locations = [
    "All",
    "Chennai",
    "Coimbatore",
    "Bangalore",
    "Delhi",
    "Noida",
    "Mumbai",
    "Pune",
    "Hyderabad",
    "Kolkata",
  ];

  const [activeLocation, setActiveLocation] = useState("All");

  const filteredRooms =
    activeLocation === "All"
      ? meetingRooms
      : meetingRooms.filter((space) => space.city === activeLocation);

  return (
    <section className="max-w-7xl mx-auto mt-30 px-4 py-6">
      <p className="text-sm text-gray-500 mb-4">Home / Hot Desk</p>

      <h1 className="text-2xl font-bold text-black">
        Hot Desk – All Locations
      </h1>

      {/* 🔥 LOCATION TABS */}
      <div className="flex gap-2 flex-wrap mt-5">
        {locations.map((loc) => (
          <button
            key={loc}
            onClick={() => setActiveLocation(loc)}
            className={`border px-4 py-2 rounded text-sm transition
              ${
                activeLocation === loc
                  ? "bg-red-600 text-white border-red-600"
                  : "hover:bg-red-600 hover:text-white"
              }`}
          >
            {loc}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {filteredRooms.map((space, i) => (
          <div
            key={i}
            className="bg-white border rounded-xl overflow-hidden relative"
          >
            {space.tag && (
              <span className="absolute top-3 left-3 bg-white px-3 py-1 text-xs rounded shadow">
                {space.tag}
              </span>
            )}

            <Image
              src={space.image}
              alt={space.name}
              width={400}
              height={260}
              className="h-44 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold">{space.name}</h3>

              {/* ✅ AREA + CITY */}
              <p className="text-sm text-gray-500">
                {space.area}, {space.city}
              </p>

              <p className="text-sm text-gray-500">{space.bookspace}</p>

              <div className="flex items-center justify-between mt-3">
                <span className="font-bold">
                  ₹{space.price.toLocaleString()} / month
                </span>

                <button className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-black transition">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredRooms.length === 0 && (
          <p className="text-gray-500">No Hot Desks available.</p>
        )}
      </div>
    </section>
  );
}
