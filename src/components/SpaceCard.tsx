"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Heart, MapPin, Users, Zap, Wifi, Monitor, Coffee, Globe } from "lucide-react";
import { fetchApi } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

export default function SpaceCard({ space, onToggle }: { space: any, onToggle?: (isFav: boolean) => void }) {
  const router = useRouter();
  const { user } = useAuth();
  const [isFavorite, setIsFavorite] = useState(space.is_favorite);
  const [favLoading, setFavLoading] = useState(false);

  const toggleFavorite = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) {
      alert("Please log in to add favorites.");
      router.push("/sign-up");
      return;
    }

    setFavLoading(true);
    try {
      const data = await fetchApi("/favorites/toggle/", {
        method: "POST",
        body: JSON.stringify({ space_id: space.id }),
      });
      setIsFavorite(data.is_favorite);
      if (onToggle) onToggle(data.is_favorite);
    } catch (err: any) {
      console.error(err);
    } finally {
      setFavLoading(false);
    }
  };

  const handleGetQuote = () => {
    router.push(`/book/${space.id}`);
  };

  return (
    <div
      onClick={handleGetQuote}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer flex flex-col h-full"
    >
      {/* IMAGE CONTAINER */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={space.image}
          alt={space.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* TAGS */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
          {space.tag && (
            <span className="bg-red-600/90 backdrop-blur-md text-white text-[10px] font-black px-4 py-1.5 rounded-xl uppercase tracking-[0.2em] shadow-2xl">
              {space.tag}
            </span>
          )}
          <span className="bg-gray-950/50 backdrop-blur-md text-white text-[10px] font-bold px-4 py-1.5 rounded-xl uppercase tracking-[0.2em] border border-white/10">
            {space.space_type_name || "Workspace"}
          </span>
        </div>

        {/* FAVORITE BUTTON */}
        <button
          onClick={toggleFavorite}
          disabled={favLoading}
          className={`
            absolute top-4 right-4 p-2 rounded-full backdrop-blur-md transition-all duration-300
            ${isFavorite ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'}
            ${favLoading ? 'opacity-50 cursor-not-allowed scale-90' : 'hover:scale-110 active:scale-90'}
            shadow-lg
          `}
        >
          <Heart
            size={18}
            fill={isFavorite ? "currentColor" : "none"}
            className={favLoading ? "animate-pulse" : ""}
          />
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl text-gray-800 group-hover:text-red-600 transition-colors">
            {space.name}
          </h3>
          <div className="flex items-center gap-1 text-yellow-500">
            <Zap size={14} fill="currentColor" />
            <span className="text-xs font-bold text-gray-600">4.8</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-gray-500 mb-4">
          <MapPin size={14} />
          <p className="text-sm">{space.area}, {space.city_name || space.city}</p>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 mb-6 flex-grow">
          {space.description || "A professional, fully-equipped space designed for productivity and growth."}
        </p>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-2 gap-4 mb-8 py-6 border-y border-gray-50 mt-auto">
          <div className="flex items-center gap-3 text-gray-500">
            <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center text-red-600 shadow-sm border border-gray-100">
              <Users size={16} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest leading-none">6 Seater</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center text-red-600 shadow-sm border border-gray-100">
              <Wifi size={16} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Gigabit</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center text-red-600 shadow-sm border border-gray-100">
              <Monitor size={16} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Elite Tech</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center text-red-600 shadow-sm border border-gray-100">
              <Coffee size={16} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Concierge</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Starting from</p>
            <p className="text-xl font-black text-gray-900">₹{Number(space.price).toLocaleString()}<span className="text-sm font-normal text-gray-500">/mo</span></p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); handleGetQuote(); }}
            className="
              bg-gray-950 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em]
              hover:bg-red-600 hover:shadow-2xl hover:shadow-red-900/40
              transition-all duration-500 transform active:scale-95
            "
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}
