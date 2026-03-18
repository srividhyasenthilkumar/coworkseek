
"use client";
import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import profileImg from "../../assets/user.png";
import bannerImg from "../../assets/empty-living-room-decorated-fun-gathering-with-friends-having-alcoholic-drinks-snacks-nobody-apartment-with-modern-board-games-chess-enjoy-home-meeting-entertainment.jpg";
import { CheckCircle2, Building2, Calendar, Clock } from "lucide-react";

export default function MyBookingsPage() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchApi("/bookings/")
        .then((data) => setBookings(data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Please log in to view your bookings.</p>
      </div>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[40vh] overflow-hidden">
        <Image
          src={bannerImg}
          alt="Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white pt-10">
          <div className="inline-flex items-center gap-3 bg-red-600/20 backdrop-blur-xl border border-red-500/30 px-6 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <p className="uppercase tracking-[0.3em] text-[10px] font-black">Member Dashboard</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter animate-fadeIn">
            My <span className="text-red-500">Bookings.</span>
          </h1>
        </div>
      </section>

      <section className="bg-gray-100 min-h-screen py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* PROFILE HEADER */}
          <div className="bg-white rounded-[2.5rem] shadow-3xl p-8 flex flex-col md:flex-row items-center gap-8 border border-gray-100 -mt-16 relative z-30 italic">
            <div className="relative h-32 w-32 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl rotate-[-3deg]">
              <Image
                src={profileImg}
                alt="Profile Picture"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center md:text-left not-italic">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Authenticated Account</p>
              <h2 className="text-3xl font-black text-gray-900 italic uppercase italic"> {user.username}</h2>
              <p className="text-red-600 font-bold flex items-center gap-2 mt-2">
                <CheckCircle2 size={16} /> Verified Elite Member
              </p>
            </div>
          </div>

          {/* BOOKINGS LIST */}
          <div className="bg-white rounded-[2.5rem] shadow-3xl p-10 border border-gray-100">
            <div className="flex items-center justify-between mb-10 italic">
               <div>
                 <h2 className="text-2xl font-black text-gray-900 uppercase">Your Territories</h2>
                 <p className="text-gray-400 font-medium">History of your reserved hubs</p>
               </div>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="w-10 h-10 border-4 border-gray-100 border-t-red-600 rounded-full animate-spin"></div>
              </div>
            ) : bookings.length === 0 ? (
              <div className="py-20 text-center bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-100">
                <p className="text-gray-400 font-medium italic">No active deployments found.</p>
              </div>
            ) : (
              <div className="grid gap-6">
                {bookings.map((booking) => (
                  <div key={booking.id} className="flex flex-col md:flex-row bg-gray-50/50 rounded-3xl p-6 items-center justify-between border border-transparent hover:border-red-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                    <div className="flex items-center gap-6 mb-4 md:mb-0">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-red-600 shadow-sm border border-gray-100 group-hover:bg-red-600 group-hover:text-white transition-all">
                        <Building2 size={24} />
                      </div>
                      <div>
                        <h3 className="font-black text-xl text-gray-900 italic uppercase">{booking.space_name}</h3>
                        <div className="flex items-center gap-4 mt-1 text-gray-400 text-xs font-bold uppercase tracking-widest">
                          <span className="flex items-center gap-1"><Calendar size={12} /> {booking.date}</span>
                          <span className="flex items-center gap-1"><Clock size={12} /> {booking.time_slot}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                      <div className="text-right">
                         <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Reserved Seats</p>
                         <p className="font-black text-gray-900">{booking.seats} Elite Units</p>
                      </div>
                      <span className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm ${
                        booking.status.toLowerCase() === 'confirmed' ? 'bg-green-500 text-white shadow-green-500/20' :
                        booking.status.toLowerCase() === 'pending' ? 'bg-yellow-500 text-white shadow-yellow-500/20' :
                        'bg-red-500 text-white shadow-red-500/20'
                        }`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
