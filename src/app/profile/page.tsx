"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { fetchApi } from "@/lib/api";
import SpaceCard from "@/components/SpaceCard";
import { useSearchParams } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Heart,
  Layout,
  ChevronRight,
  LogOut,
  Settings
} from "lucide-react";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") as any;

  const [bookings, setBookings] = useState<any[]>([]);
  const [listings, setListings] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"profile" | "bookings" | "favourites" | "listings">(
    ["profile", "bookings", "favourites", "listings"].includes(initialTab) ? initialTab : "profile"
  );

  useEffect(() => {
    if (user) {
      setLoading(true);
      Promise.all([
        fetchApi("/bookings/"),
        fetchApi("/spaces/?listed_by=me"),
        fetchApi("/favorites/")
      ])
        .then(([bookingsData, listingsData, favoritesData]) => {
          setBookings(bookingsData);
          setListings(listingsData);
          setFavorites(favoritesData);
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl text-center max-w-md">
          <div className="w-20 h-20 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <User size={40} />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">Access Denied</h2>
          <p className="text-gray-500 mb-8 font-medium">Please log in to your account to view your personalized profile, bookings, and favorites.</p>
          <button
            onClick={() => window.location.href = "/sign-up"}
            className="w-full bg-red-600 text-white py-4 rounded-2xl font-bold hover:bg-black transition-all duration-300 shadow-lg shadow-red-100"
          >
            Login to Account
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* PROFILE HEADER CARD */}
        <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="h-40 bg-gradient-to-r from-gray-900 to-gray-800 relative">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          </div>
          <div className="px-10 pb-10 flex flex-col md:flex-row items-end gap-8 -mt-16 relative z-10">
            <div className="relative group">
              <div className="h-40 w-40 rounded-3xl border-8 border-white bg-gray-100 overflow-hidden shadow-2xl relative">
                <img
                  src={`https://ui-avatars.com/api/?name=${user.username}`}
                  alt="Profile"
                />
              </div>
              <button className="absolute bottom-4 right-4 bg-white p-2 rounded-xl shadow-lg text-gray-600 hover:text-red-600 transition-colors">
                <Settings size={16} />
              </button>
            </div>

            <div className="flex-grow pb-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h1 className="text-4xl font-black text-gray-900 mb-2 italic uppercase">
                    {user.username}
                  </h1>
                  <div className="flex flex-wrap gap-4">
                    <span className="flex items-center gap-1.5 text-gray-500 font-bold text-xs uppercase tracking-tight">
                      <Mail size={14} className="text-red-600" />
                      {user.email}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500 font-bold text-xs uppercase tracking-tight">
                      <MapPin size={14} className="text-red-600" />
                      Chennai, India
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className="bg-gray-50 text-gray-600 px-6 py-3 rounded-2xl font-bold text-sm hover:bg-red-50 hover:text-red-600 transition-all border border-gray-100"
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={logout}
                    className="bg-red-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-black transition-all flex items-center gap-2 shadow-lg shadow-red-100"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* SIDEBAR TABS */}
          <div className="lg:col-span-1 space-y-2">
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all border
                ${activeTab === "profile"
                  ? "bg-red-600 text-white border-red-600 shadow-xl shadow-red-100 translate-x-2"
                  : "bg-white text-gray-500 border-transparent hover:bg-gray-100 hover:text-gray-900"
                }
              `}
            >
              <User size={18} />
              My Profile
              <ChevronRight size={16} className={`ml-auto opacity-50 ${activeTab === "profile" ? "block" : "hidden"}`} />
            </button>
            <button
              onClick={() => setActiveTab("bookings")}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all border
                ${activeTab === "bookings"
                  ? "bg-red-600 text-white border-red-600 shadow-xl shadow-red-100 translate-x-2"
                  : "bg-white text-gray-500 border-transparent hover:bg-gray-100 hover:text-gray-900"
                }
              `}
            >
              <Calendar size={18} />
              My Bookings
              <ChevronRight size={16} className={`ml-auto opacity-50 ${activeTab === "bookings" ? "block" : "hidden"}`} />
            </button>
            <button
              onClick={() => setActiveTab("favourites")}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all border
                ${activeTab === "favourites"
                  ? "bg-red-600 text-white border-red-600 shadow-xl shadow-red-100 translate-x-2"
                  : "bg-white text-gray-500 border-transparent hover:bg-gray-100 hover:text-gray-900"
                }
              `}
            >
              <Heart size={18} />
              My Favourites
              <ChevronRight size={16} className={`ml-auto opacity-50 ${activeTab === "favourites" ? "block" : "hidden"}`} />
            </button>
            <button
              onClick={() => setActiveTab("listings")}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all border
                ${activeTab === "listings"
                  ? "bg-red-600 text-white border-red-600 shadow-xl shadow-red-100 translate-x-2"
                  : "bg-white text-gray-500 border-transparent hover:bg-gray-100 hover:text-gray-900"
                }
              `}
            >
              <Layout size={18} />
              My Listings
              <ChevronRight size={16} className={`ml-auto opacity-50 ${activeTab === "listings" ? "block" : "hidden"}`} />
            </button>
          </div>

          {/* TAB CONTENT */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 min-h-[500px]">
              {activeTab === "profile" && (
                <div>
                  <div className="mb-10">
                    <h2 className="text-2xl font-black text-gray-900 italic uppercase">Your Profile</h2>
                    <p className="text-gray-500 font-medium">Manage your personal information and preferences</p>
                  </div>

                  <div className="space-y-8 max-w-2xl">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Username</label>
                        <div className="bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100 font-bold text-gray-900">{user.username}</div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                        <div className="bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100 font-bold text-gray-900">{user.email}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Member Since</label>
                      <div className="bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100 font-bold text-gray-900">January 2026</div>
                    </div>

                    <button className="bg-gray-950 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-red-600 transition-all shadow-xl shadow-gray-200 hover:shadow-red-200 mt-4">
                      Update Profile Details
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "bookings" && (
                <div>
                  <div className="mb-10">
                    <h2 className="text-2xl font-black text-gray-900 italic uppercase">Your Bookings</h2>
                    <p className="text-gray-500 font-medium">Manage your workspace reservations and history</p>
                  </div>

                  {loading ? (
                    <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-red-600"></div></div>
                  ) : bookings.length === 0 ? (
                    <div className="text-center py-20 bg-gray-50 rounded-3xl">
                      <p className="text-gray-400 font-bold italic">No bookings found yet.</p>
                      <button className="mt-4 text-red-600 font-bold hover:underline" onClick={() => window.location.href = '/coworking'}>Explore Spaces</button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {bookings.map((booking) => (
                        <div key={booking.id} className="p-8 rounded-[2.5rem] border border-gray-100 hover:border-red-200 hover:bg-red-50/20 transition-all group bg-white shadow-sm overflow-hidden relative">
                          <div className="absolute top-0 right-0 p-6">
                            <span className={`
                              px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest
                              ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                                booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                  'bg-red-100 text-red-700'}
                            `}>
                              {booking.status}
                            </span>
                          </div>

                          <div className="flex flex-col md:flex-row gap-8">
                            <div className="w-24 h-24 bg-gray-50 rounded-3xl flex items-center justify-center border border-gray-100 group-hover:scale-105 transition-transform shrink-0">
                              <Calendar className="text-red-600" size={32} />
                            </div>

                            <div className="flex-grow space-y-4">
                              <div>
                                <h3 className="text-2xl font-black text-gray-900 italic uppercase mb-1">{booking.space_name}</h3>
                                <div className="flex flex-wrap gap-4 items-center text-gray-500">
                                  <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-red-600">
                                    <Calendar size={14} /> {booking.date}
                                  </span>
                                  <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest">
                                    <Clock size={14} /> {booking.time_slot}
                                  </span>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-gray-50">
                                <div className="space-y-1">
                                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Duration</p>
                                  <p className="font-bold text-gray-900">{booking.duration || '1 Day'}</p>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Seats</p>
                                  <p className="font-bold text-gray-900">{booking.seats || 1} Person</p>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Contact</p>
                                  <p className="font-bold text-gray-900 text-xs truncate">{booking.email}</p>
                                </div>
                                <div className="space-y-1 text-right">
                                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Ref ID</p>
                                  <p className="font-bold text-gray-900">#BK-{booking.id}</p>
                                </div>
                              </div>

                              {booking.notes && (
                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Notes</p>
                                  <p className="text-sm text-gray-600 font-medium italic">"{booking.notes}"</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === "favourites" && (
                <div>
                  <div className="mb-10">
                    <h2 className="text-2xl font-black text-gray-900 italic uppercase">Saved Spaces</h2>
                    <p className="text-gray-500 font-medium">Your curated list of favorite workspaces</p>
                  </div>

                  {loading ? (
                    <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-red-600"></div></div>
                  ) : favorites.length === 0 ? (
                    <div className="text-center py-20 bg-gray-50 rounded-3xl">
                      <p className="text-gray-400 font-bold italic">No favorites saved yet.</p>
                      <button className="mt-4 text-red-600 font-bold hover:underline" onClick={() => window.location.href = '/coworking'}>Add some spaces</button>
                    </div>
                  ) : (
                    <div className="grid sm:grid-cols-2 gap-8">
                      {favorites.map((fav) => (
                        <SpaceCard
                          key={fav.id}
                          space={{ ...fav.space_details, is_favorite: true }}
                          onToggle={(isFav) => {
                            if (!isFav) {
                              setFavorites(prev => prev.filter(f => f.id !== fav.id));
                            }
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === "listings" && (
                <div>
                  <div className="mb-10">
                    <h2 className="text-2xl font-black text-gray-900 italic uppercase">Your Listed Spaces</h2>
                    <p className="text-gray-500 font-medium">Manage the coworking hubs you've published</p>
                  </div>

                  {loading ? (
                    <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-red-600"></div></div>
                  ) : listings.length === 0 ? (
                    <div className="text-center py-20 bg-gray-50 rounded-3xl">
                      <p className="text-gray-400 font-bold italic">You haven't listed any spaces yet.</p>
                      <button className="mt-4 text-red-600 font-bold hover:underline">List a Space</button>
                    </div>
                  ) : (
                    <div className="grid sm:grid-cols-2 gap-8">
                      {listings.map((space) => (
                        <SpaceCard key={space.id} space={space} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
