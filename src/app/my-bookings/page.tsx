
"use client";
import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import profileImg from "../../assets/user.png";
import bannerImg from "../../assets/empty-living-room-decorated-fun-gathering-with-friends-having-alcoholic-drinks-snacks-nobody-apartment-with-modern-board-games-chess-enjoy-home-meeting-entertainment.jpg"

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
      <section className="relative w-full h-[350px] overflow-hidden">
        <Image
          src={bannerImg}
          alt="Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide animate-fadeIn">
            My bookings
          </h1>
        </div>
      </section>

      <section className="bg-gray-100 min-h-screen py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* PROFILE HEADER */}
          <div className="bg-white rounded-2xl shadow p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-gray-200">
              <Image
                src={profileImg}
                alt="Profile Picture"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-800"> {user.username}</h1>
              <p className="text-gray-500 mt-1">My Bookings</p>
            </div>
          </div>

          {/* BOOKINGS LIST */}
          <div className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Your Booked Spaces</h2>
            {loading ? (
              <p>Loading bookings...</p>
            ) : bookings.length === 0 ? (
              <p className="text-gray-500 italic">No bookings found.</p>
            ) : (
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div key={booking.id} className="flex border-b pb-4 items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg">{booking.space_name}</h3>
                      <p className="text-sm text-gray-500 italic">Booked on: {booking.booking_date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${booking.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                      booking.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                      {booking.status}
                    </span>
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
