"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import review from "../assets/home/review_persion.webp";
import Image from "next/image";
const testimonials = [
  {
    rating: 4,
    text: "CoworkSeek made it incredibly easy to find the perfect space for our remote team. The filters and reviews helped us narrow it down quickly—and we moved in within a week!",
    name: "Donald",
  },
  {
    rating: 5,
    text: "From private cabins to open desks, CoworkSeek had all the options I needed. Booking a tour was effortless, and the space was exactly as listed.",
    name: "Robert",
  },
  {
    rating: 3,
    text: "CoworkSeek gave me the freedom to explore coworking spaces in different cities without the hassle. It's like having an office wherever I go.",
    name: "Robert Meera",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);
  };

  const current = testimonials[index];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center ">
<div className="relative flex justify-center md:justify-start">
  <div className="relative w-[280px] md:w-[320px] lg:w-[350px] mx-auto">
    <Image
      src={review}
      alt="testimonial"
      className="rounded-3xl object-cover"
      width={350}
      height={430}
      priority
    />

    <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-xl p-4 text-center">
      <p className="text-2xl font-bold">15k</p>
      <p className="text-sm text-gray-500">Top Reviews</p>
    </div>
  </div>
</div>


      {/* RIGHT CONTENT */}
      <div className="space-y-6 ">

        {/* STATIC HEADING */}
        <h2 className="text-3xl font-bold">
          Reviews from some of our <br /> recent clients
        </h2>

      {/* SLIDER CONTENT */}
<div className="relative overflow-hidden h-[220px]">
  <div
    className="flex transition-transform duration-[900ms] ease-in-out"
    style={{ transform: `translateX(-${index * 100}%)` }}
  >
    {testimonials.map((item, i) => (
      <div key={i} className="min-w-full pr-4">
        
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, starIndex) => (
            <Star
              key={starIndex}
              size={18}
              className={
                starIndex < item.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
        </div>

        {/* Text */}
        <p className="text-gray-600 leading-relaxed">
          “{item.text}”
        </p>

        {/* Name */}
        <p className="mt-4 font-semibold">{item.name}</p>
      </div>
    ))}
  </div>
</div>

        {/* ARROWS */}
        <div className="flex gap-4 pt-6">
          <button
            onClick={prevSlide}
            className="w-12 h-12 border border-red-500 text-red-500 rounded-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-red-500 text-white rounded-lg flex items-center justify-center hover:bg-red-600 transition"
          >
            <ChevronRight />
          </button>
        </div>

      </div>
    </section>
  );
}
