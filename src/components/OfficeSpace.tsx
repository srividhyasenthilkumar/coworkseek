import Image from "next/image";

import workspace_1 from "../assets/home/empty-office-workplace-with-table-chair-computer-scaled.webp"
import workspace_2 from "../assets/home/Virtual-Office-scaled.webp"
import workspace_3 from "../assets/home/3d-rendering-business-meeting-working-room-office-building-scaled.webp"
import workspace_4 from "../assets/home/conference-room-with-large-screen-that-says-conference-scaled.webp"
import workspace_5 from "../assets/home/Commercial-Spaces-scaled.webp"
import workspace_6 from "../assets/home/3d-rendering-business-meeting-working-room-office-building-1-scaled.webp"
import workspace_7 from "../assets/home/events-scaled.webp"
const images = [
  { src: workspace_1, title: "Coworking Space" },
  { src: workspace_2, title: "Virtual Office" },
  { src: workspace_3, title: "Managed Office" },
  { src: workspace_4, title: "Meeting Room" },
  { src: workspace_5, title: "Office/Commercial Space" },
  { src: workspace_6, title: "Day Pass" },
  { src: workspace_7, title: "Events Space" },
];

export default function CoworkingGallery() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <p className="text-red-500 uppercase tracking-wide text-sm">
          Our Latest Listing
        </p>
        <h2 className="text-4xl font-bold mt-2">
          Flexible Coworking and Collaborative Office Spaces
        </h2>
        <p className="text-gray-500 mt-4 max-w-6xl mx-auto">
         we believe where you work shapes how you work. We’re on a mission to make finding the perfect coworking spot as effortless as ordering your morning coffee
        </p>
      </div>
   <div className="flex h-[420px] overflow-hidden rounded-[32px]">
  {images.map((item, index) => (
    <div
      key={index}
      className="relative flex-1 hover:flex-[3]
                 transition-[flex] duration-700 ease-in-out
                 group overflow-hidden">
      <Image
        src={item.src}
        alt={item.title}
        fill
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-black/60 opacity-0
                   group-hover:opacity-100 transition duration-500"
      />
      <div
        className="absolute inset-0 flex items-center justify-center
                   opacity-0 translate-y-4
                   group-hover:opacity-100 group-hover:translate-y-0
                   transition-all duration-500 delay-100"
      >
        <div className="text-center text-white">
          <h3 className="text-2xl font-semibold">{item.title}</h3>

          <button
            className="mt-4 px-6 py-2 border border-white rounded-full text-sm
                       hover:bg-white hover:text-black transition"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  ))}
</div>


    </section>
  );
}
