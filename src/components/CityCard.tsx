import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function CityCard({ city }: any) {
  const slug = city.slug || city.name.toLowerCase();

  return (
    <Link
      href={`/coworking/${slug}`}
      className="group relative rounded-[2.5rem] overflow-hidden bg-gray-900 shadow-xl hover:shadow-[0_32px_96px_-16px_rgba(0,0,0,0.3)] transition-all duration-700 h-[380px] block border border-white/5"
    >
      <Image
        src={city.image || "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000"}
        alt={city.name}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100"
        onError={(e: any) => {
          e.target.src = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000";
        }}
      />
      {/* LUXURY OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:via-red-600/10 transition-all duration-700"></div>

      {/* CONTENT */}
      <div className="absolute inset-0 p-10 flex flex-col justify-end">
        <div className="flex items-end justify-between translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div>
            <div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
              <div className="w-6 h-[1px] bg-red-600" />
              <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.3em]">Verified Hubs</p>
            </div>
            <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter leading-none">
              {city.name}<span className="text-red-600">.</span>
            </h3>
          </div>

          <div className="bg-red-600 p-4 rounded-2xl text-white shadow-2xl opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 delay-150 rotate-12 group-hover:rotate-0">
            <ArrowUpRight size={24} />
          </div>
        </div>
      </div>
    </Link>
  );
}
