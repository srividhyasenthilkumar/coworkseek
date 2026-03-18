"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { fetchApi } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import Modal from "@/components/Modal";
import {
    Check,
    MapPin,
    Users,
    Wifi,
    Coffee,
    Monitor,
    Calendar,
    Clock,
    ChevronLeft,
    Star,
    TriangleAlert
} from "lucide-react";

export default function BookingPage() {
    const { id } = useParams();
    const router = useRouter();
    const { user } = useAuth();
    const [space, setSpace] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [bookingDate, setBookingDate] = useState(new Date().toISOString().split('T')[0]);
    const [bookingTime, setBookingTime] = useState("09:00");
    const [fullName, setFullName] = useState(user?.username || "");
    const [email, setEmail] = useState(user?.email || "");
    const [phone, setPhone] = useState("");
    const [duration, setDuration] = useState("1 Day");
    const [seats, setSeats] = useState(1);
    const [notes, setNotes] = useState("");
    const [isBooking, setIsBooking] = useState(false);

    // Modal State
    const [modalConfig, setModalConfig] = useState<{
        isOpen: boolean;
        type: "success" | "error";
        title: string;
        message: string;
        actionText?: string;
        onAction?: () => void;
    }>({
        isOpen: false,
        type: "success",
        title: "",
        message: "",
    });

    const closeModal = () => setModalConfig({ ...modalConfig, isOpen: false });

    useEffect(() => {
        if (user) {
            setFullName(user.username);
            setEmail(user.email);
        }
    }, [user]);

    useEffect(() => {
        fetchApi(`/spaces/${id}/`)
            .then((data) => setSpace(data))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [id]);

    const handleBook = async () => {
        if (!user) {
            setModalConfig({
                isOpen: true,
                type: "error",
                title: "Login Required",
                message: "Please log in to book this elite workspace.",
                actionText: "Go to Login",
                onAction: () => router.push("/login")
            });
            return;
        }

        if (!fullName || !email || !phone || !bookingDate || !bookingTime) {
            setModalConfig({
                isOpen: true,
                type: "error",
                title: "Missing Info",
                message: "Please fill in all required fields to proceed with your booking.",
            });
            return;
        }

        setIsBooking(true);
        try {
            await fetchApi("/bookings/", {
                method: "POST",
                body: JSON.stringify({
                    space: space.id,
                    full_name: fullName,
                    email: email,
                    phone: phone,
                    date: bookingDate,
                    time_slot: bookingTime,
                    duration: duration,
                    seats: seats,
                    notes: notes,
                    status: 'Confirmed'
                }),
            });
            setModalConfig({
                isOpen: true,
                type: "success",
                title: "Hub Reserved",
                message: "Your booking was successful. Welcome to the elite network!",
                actionText: "View Bookings",
                onAction: () => router.push("/profile?tab=bookings")
            });
        } catch (err: any) {
            setModalConfig({
                isOpen: true,
                type: "error",
                title: "Booking Failed",
                message: err.message || "An unexpected error occurred. Please try again.",
            });
        } finally {
            setIsBooking(false);
        }
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-gray-100 border-t-red-600 rounded-full animate-spin"></div>
            </div>
        </div>
    );

    if (!space) return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center">
                <p className="text-2xl font-black italic uppercase text-gray-900 mb-4">Space Not Found</p>
                <button onClick={() => router.push('/')} className="text-red-600 font-bold uppercase text-xs tracking-widest">Return to Home</button>
            </div>
        </div>
    );

    return (
        <div className="bg-white min-h-screen pb-32">
            {/* HEADER / NAVIGATION */}
            <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between mt-24">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-red-600 transition-all group"
                >
                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Return to Search</span>
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">

                {/* LEFT COLUMN: SPACE DETAILS */}
                <div className="lg:col-span-2 space-y-16">

                    {/* IMAGE HERO */}
                    <div className="relative h-[550px] w-full rounded-[4rem] overflow-hidden shadow-3xl group">
                        <Image
                            src={space.image}
                            alt={space.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        {space.tag && (
                            <div className="absolute top-8 left-8 bg-red-600 text-white px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl">
                                {space.tag}
                            </div>
                        )}
                    </div>

                    {/* OVERVIEW SECTION */}
                    <div>
                        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600 mb-4">Verified Listing #{space.id}</p>
                                <h1 className="text-4xl md:text-6xl font-black text-gray-950 italic uppercase tracking-tighter leading-tight mb-4">{space.name}</h1>
                                <div className="flex items-center gap-3 text-gray-500 font-medium">
                                    <MapPin size={18} className="text-red-600" />
                                    <span>{space.area}, {space.city_name}</span>
                                </div>
                            </div>
                            <div className="flex flex-row md:flex-col items-center md:items-end gap-2 bg-gray-50 px-8 py-4 rounded-[2.5rem] border border-gray-100">
                                <div className="flex items-center gap-2 text-yellow-500">
                                    <Star size={24} fill="currentColor" />
                                    <span className="text-2xl font-black text-gray-900 tracking-tighter">4.9</span>
                                </div>
                                <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Top Rated Hub</span>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed">
                            <p className="border-l-4 border-red-600 pl-8 italic text-xl mb-10 text-gray-900">
                                "Elevate your professional footprint in this meticulously curated environment designed for high-impact teams and innovators."
                            </p>
                            <p>
                                {space.description || "Experience productivity in a whole new way. This premium workspace offers high-speed internet, ergonomic furniture, and a community of like-minded professionals. Perfect for startups, freelancers, and small teams looking for a professional and inspiring environment."}
                            </p>
                        </div>

                        {/* KEY FEATURES */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-gray-100 mt-16">
                            {[
                                { icon: Users, label: "6 Seater", val: "Elite Suite" },
                                { icon: Wifi, label: "Fiber Optic", val: "1 Gbps" },
                                { icon: Coffee, label: "Concierge", val: "Unlimited" },
                                { icon: Monitor, label: "Hardware", val: "Ready" },
                            ].map((feat, i) => (
                                <div key={i} className="flex flex-col items-center text-center gap-4">
                                    <div className="w-16 h-16 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center"><feat.icon size={28} /></div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{feat.label}</p>
                                    <p className="font-bold text-gray-900">{feat.val}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CORE AMENITIES */}
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100">
                            <h3 className="text-2xl font-black italic uppercase mb-8 flex items-center gap-3">
                                <Check className="text-red-600" /> Operational Excellence
                            </h3>
                            <ul className="space-y-5">
                                {[
                                    "Industrial grade ergonomic infrastructure",
                                    "Encrypted high-speed network access",
                                    "Premium lounge & breakout zones",
                                    "Dedicated climate control",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-gray-600 font-bold text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100">
                            <h3 className="text-2xl font-black italic uppercase mb-8 flex items-center gap-3">
                                <MapPin className="text-red-600" /> Territory Intel
                            </h3>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                Strategically positioned in {space.city_name}'s prime business corridor. Proximal to global banking hubs, luxury transit, and world-class hospitality. It's more than an office; it's a strategic asset.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: BOOKING CARD */}
                <div className="lg:col-span-1">
                    <div className="sticky top-32 bg-white border border-gray-100 rounded-[3.5rem] shadow-3xl p-10 space-y-10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[6px] bg-red-600" />

                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4">Investment Strategy</p>
                            <div className="flex items-end gap-2">
                                <span className="text-5xl font-black text-gray-950 tracking-tighter">₹{Number(space.price).toLocaleString()}</span>
                                <span className="text-gray-400 text-lg font-bold mb-1 tracking-tight">/ mo</span>
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-green-600">
                                <Check size={14} className="font-bold" />
                                <span className="text-[10px] font-black uppercase tracking-widest">All Infrastructure Costs Included</span>
                            </div>
                        </div>

                        <div className="space-y-6 pt-10 border-t border-gray-100 italic">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Full Name</label>
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="John Doe"
                                        className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-red-600 transition-all not-italic"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Email Address</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="john@example.com"
                                        className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-red-600 transition-all not-italic"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="+1 234 567 890"
                                        className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-red-600 transition-all not-italic"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Duration</label>
                                    <select
                                        value={duration}
                                        onChange={(e) => setDuration(e.target.value)}
                                        className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-red-600 transition-all not-italic appearance-none"
                                    >
                                        <option>1 Day</option>
                                        <option>1 Week</option>
                                        <option>1 Month</option>
                                        <option>Custom</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 flex items-center gap-2 mb-1 ml-4">
                                        <Calendar size={14} className="text-red-600" /> Deployment Date
                                    </label>
                                    <input
                                        type="date"
                                        value={bookingDate}
                                        onChange={(e) => setBookingDate(e.target.value)}
                                        className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-black outline-none focus:ring-2 focus:ring-red-600 transition-all not-italic"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 flex items-center gap-2 mb-1 ml-4">
                                        <Clock size={14} className="text-red-600" /> Arrival Time
                                    </label>
                                    <input
                                        type="time"
                                        value={bookingTime}
                                        onChange={(e) => setBookingTime(e.target.value)}
                                        className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-black outline-none focus:ring-2 focus:ring-red-600 transition-all font-sans not-italic"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Number of Seats</label>
                                <input
                                    type="number"
                                    min="1"
                                    value={seats}
                                    onChange={(e) => setSeats(parseInt(e.target.value))}
                                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-red-600 transition-all not-italic"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Special Requests / Notes</label>
                                <textarea
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    placeholder="Any technical requirements or preferences..."
                                    rows={3}
                                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-red-600 transition-all not-italic resize-none"
                                />
                            </div>
                        </div>

                        <button
                            onClick={handleBook}
                            disabled={isBooking}
                            className={`
                                w-full py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] shadow-2xl transition-all duration-500 transform active:scale-[0.98]
                                flex items-center justify-center gap-4
                                ${isBooking
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    : "bg-red-600 text-white hover:bg-gray-900 shadow-red-900/20"}
                            `}
                        >
                            {isBooking ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-gray-600"></div>
                                    <span>Processing...</span>
                                </>
                            ) : (
                                <span>BOOK ROOM</span>
                            )}
                        </button>

                        <div className="text-center">
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
                                No immediate charge. <br />
                                <span className="text-red-600">Concierge review required.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalConfig.isOpen}
                onClose={closeModal}
                type={modalConfig.type}
                title={modalConfig.title}
                message={modalConfig.message}
                actionText={modalConfig.actionText}
                onAction={modalConfig.onAction}
            />
        </div>
    );
}
