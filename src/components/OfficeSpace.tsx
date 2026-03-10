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
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-red-600" />
              <p className="text-red-600 uppercase tracking-widest text-xs font-black">
                Curated Workspaces
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight italic uppercase">
              Tailored Spaces for <br />
              <span className="text-red-600">Every Ambition</span>
            </h2>
          </div>
          <p className="text-gray-500 font-medium max-w-sm leading-relaxed">
            We believe where you work shapes how you work. Explore our hand-picked collection of premium environments designed for peak productivity.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row h-auto lg:h-[500px] overflow-hidden rounded-[3rem] shadow-2xl border border-gray-100">
          {images.map((item, index) => (
            <div
              key={index}
              className="relative flex-1 hover:flex-[4] h-[300px] lg:h-full
                                transition-[flex] duration-1000 ease-out-expo
                                group overflow-hidden border-r border-white/10 last:border-none"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0"
              />

              {/* Shadow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-700" />

              {/* Vertical Title (Minimized State) */}
              <div className="absolute inset-0 flex items-center justify-center lg:group-hover:opacity-0 transition-opacity duration-500">
                <span className="hidden lg:block -rotate-90 whitespace-nowrap text-white/40 font-black uppercase tracking-[0.3em] text-sm">
                  {item.title}
                </span>
              </div>

              {/* Content (Expanded State) */}
              <div className="absolute inset-0 flex flex-col justify-end p-10 opacity-0 lg:group-hover:opacity-100 transition-all duration-700 translate-y-10 lg:group-hover:translate-y-0">
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20">
                  <h3 className="text-3xl font-black text-white italic uppercase mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm font-medium mb-6 line-clamp-2">
                    Premium infrastructure equipped with high-speed internet and professional amenities.
                  </p>
                  <button
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all"
                  >
                    Explore Details
                  </button>
                </div>
              </div>

              {/* Mobile Only Title */}
              <div className="lg:hidden absolute bottom-6 left-6">
                <h3 className="text-xl font-black text-white italic uppercase">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
