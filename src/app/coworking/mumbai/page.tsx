"use client";

import { useState } from "react";
import Image from "next/image";
import { mumbaiSpaces } from "../../../data/mumbaispace";

const areas = [
  "All",
  "Vashi",
  "Bandra",
  "Dadar",
  "Marol",
  "Andheri",
  "Lower Parel",
  "Navi Mumbai",
];

export default function ChennaiPage() {
  const [activeArea, setActiveArea] = useState("All");

  const filteredSpaces =
    activeArea === "All"
      ? mumbaiSpaces
      : mumbaiSpaces.filter((space) => space.area === activeArea);

  return (
    <section className="max-w-7xl mx-auto mt-30 px-4 py-6">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-4">Home / Coworking / Mumbai</p>

      {/* Title + Filters */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-2xl font-bold text-black">
          Coworking Space in Mumbai
        </h1>

        <select className="border px-3 py-2 rounded text-sm">
          <option>Select Price</option>
          <option>Below ₹7,000</option>
          <option>₹7,000 – ₹10,000</option>
          <option>Above ₹10,000</option>
        </select>
      </div>

      {/* Area Tabs */}
      <div className="flex gap-2 flex-wrap mt-5">
        {areas.map((area) => (
          <button
            key={area}
            onClick={() => setActiveArea(area)}
            className={`border px-4 py-2 rounded text-sm transition
              ${
                activeArea === area
                  ? "bg-red-600 text-white border-red-600"
                  : "hover:bg-red-600 hover:text-white"
              }`}
          >
            {area}
          </button>
        ))}
      </div>

      {/* Listing Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {filteredSpaces.map((space, i) => (
          <div
            key={i}
            className="bg-white border rounded-xl overflow-hidden relative"
          >
            {/* Badge */}
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
              <p className="text-sm text-gray-500">{space.area}, Mumbai</p>
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
      </div>
    </section>
  );
}
