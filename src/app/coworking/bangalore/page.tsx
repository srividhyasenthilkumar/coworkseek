"use client";

import { useState } from "react";
import Image from "next/image";
import { bangaloreSpaces } from "../../../data/bangalorespace";

const areas = [
  "All",
  "Koramangala",
  "MG Road",
  "Hebbal",
  "Ashok Nagar",
  "Marathahalli",
  "Electronic City",
  "Indiranagar",
];

export default function BangalorePage() {
  const [activeArea, setActiveArea] = useState("All");

  const filteredSpaces =
    activeArea === "All"
      ? bangaloreSpaces
      : bangaloreSpaces.filter((space) => space.area === activeArea);

  return (
    <section className="max-w-7xl mx-auto mt-30 px-4 py-6">
      <p className="text-sm text-gray-500 mb-4">Home / Coworking / Bangalore</p>

      <h1 className="text-2xl font-bold text-black">
        Coworking Space in Bangalore
      </h1>

      {/* Area Tabs */}
      <div className="flex gap-2 flex-wrap mt-5">
        {areas.map((area) => (
          <button
            key={area}
            onClick={() => setActiveArea(area)}
            className={`border px-4 py-2 rounded text-sm
              ${
                activeArea === area
                  ? "bg-red-600 text-white"
                  : "hover:bg-red-600 hover:text-white"
              }`}
          >
            {area}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {filteredSpaces.map((space, i) => (
          <div key={i} className="bg-white border rounded-xl overflow-hidden">
            <Image
              src={space.image}
              alt={space.name}
              width={400}
              height={260}
              className="h-44 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold">{space.name}</h3>
              <p className="text-sm text-gray-500">{space.area}, Bangalore</p>
              <p className="text-sm text-gray-500">{space.bookspace}</p>

              <div className="flex justify-between mt-3">
                <span className="font-bold">
                  ₹{space.price.toLocaleString()}
                </span>
                <button className="bg-red-600 text-white px-4 py-2 rounded text-sm">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
