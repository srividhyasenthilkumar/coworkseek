"use client";
import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";
import SpaceCard from "@/components/SpaceCard";
import CityCard from "@/components/CityCard";
import { ChevronRight, Shield, Zap, Globe, Clock, ArrowLeft } from "lucide-react";

interface CategoryPageProps {
    title: string;
    subtitle: string;
    categorySlug: string;
    breadcrumb: string;
}

export default function CategoryPage({ title, subtitle, categorySlug, breadcrumb }: CategoryPageProps) {
    const [spaces, setSpaces] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeLocation, setActiveLocation] = useState("All");
    const [viewMode, setViewMode] = useState<"cities" | "spaces">("cities");

    const locations = [
        "All", "Chennai", "Bangalore", "Mumbai", "Delhi", "Hyderabad",
        "Pune", "Gurgaon", "Noida", "Kolkata", "Coimbatore",
    ];

    const availableCities = Array.from(new Set(spaces.map((s) => s.city_name)))
        .map((name) => {
            const space = spaces.find((s) => s.city_name === name);
            return {
                name,
                image: space?.city_image || "",
                id: space?.city_id
            };
        });

    useEffect(() => {
        setLoading(true);
        fetchApi(`/spaces/?space_type=${categorySlug}`)
            .then((data) => setSpaces(data))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [categorySlug]);

    const filteredSpaces = activeLocation === "All"
        ? spaces
        : spaces.filter((space) => space.city_name === activeLocation);

    return (
        <div className="bg-white min-h-screen">
            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto mt-32 px-6 py-16 md:py-24">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8">
                    <span className="cursor-pointer hover:text-red-600 transition-colors" onClick={() => (window.location.href = "/")}>Home</span>
                    <ChevronRight size={10} className="text-red-600" />
                    <span className={viewMode === "cities" ? "text-red-600" : "cursor-pointer hover:text-red-600 transition-colors"} onClick={() => setViewMode("cities")}>{breadcrumb}</span>
                    {viewMode === "spaces" && (
                        <>
                            <ChevronRight size={10} className="text-red-600" />
                            <span className="text-red-600">{activeLocation}</span>
                        </>
                    )}
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-950 leading-[1.1] mb-8 italic uppercase tracking-tighter">
                            {title} <br />
                            <span className="text-red-600">Built for Success.</span>
                        </h1>
                        <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-xl font-medium">
                            {subtitle} Access India's most elite workspaces, curated for performance and professional growth.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {/* FEATURE BADGES */}
                            <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-600 border border-gray-100">
                                <Shield size={16} className="text-red-600" />
                                <span>Verified Hubs</span>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-600 border border-gray-100">
                                <Zap size={16} className="text-red-600" />
                                <span>Elite Tech</span>
                            </div>
                        </div>
                    </div>

                    {/* STATS AREA */}
                    <div className="bg-gray-950 rounded-[4rem] p-12 text-white shadow-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full -mr-40 -mt-40 blur-[100px] group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="relative z-10 space-y-10">
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 text-red-600">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <h4 className="font-black italic uppercase text-lg mb-1 tracking-tight">Pan-India Network</h4>
                                    <p className="text-gray-400 text-sm font-medium">Seamless access across 12+ economic epicenters.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 text-red-600">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-black italic uppercase text-lg mb-1 tracking-tight">Premium Concierge</h4>
                                    <p className="text-gray-400 text-sm font-medium">Round-the-clock support for your elite team.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LISTING SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-100">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600 mb-4">Curated Inventory</p>
                        <h2 className="text-4xl md:text-5xl font-black italic uppercase text-gray-950 tracking-tight">
                            {viewMode === "cities" ? `Available in ${availableCities.length} Cities` : `Browse in ${activeLocation}`}
                        </h2>
                        <p className="text-gray-500 font-bold mt-2">
                            {viewMode === "cities"
                                ? "Select a location to view premium workspaces"
                                : `${filteredSpaces.length} High-Performance Options Available`}
                        </p>
                    </div>

                    {/* FILTER TABS / BACK BUTTON */}
                    <div className="flex gap-4 items-center">
                        {viewMode === "spaces" && (
                            <button
                                onClick={() => setViewMode("cities")}
                                className="flex items-center gap-2 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest bg-gray-950 text-white hover:bg-red-600 transition-all duration-500 shadow-xl shadow-black/10"
                            >
                                <ArrowLeft size={14} />
                                Back to Cities
                            </button>
                        )}
                        <div className="flex gap-2 flex-wrap max-w-2xl justify-start lg:justify-end">
                            {locations.map((loc) => (
                                <button
                                    key={loc}
                                    onClick={() => {
                                        setActiveLocation(loc);
                                        setViewMode("spaces");
                                    }}
                                    className={`
                                        px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 border
                                        ${activeLocation === loc && viewMode === "spaces"
                                            ? "bg-red-600 text-white border-red-600 shadow-xl shadow-red-900/20 scale-105"
                                            : "bg-white text-gray-400 border-gray-100 hover:border-red-600 hover:text-red-600"
                                        }
                                    `}
                                >
                                    {loc}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* GRID */}
                {loading ? (
                    <div className="flex items-center justify-center py-40">
                        <div className="relative">
                            <div className="w-16 h-16 border-4 border-gray-100 border-t-red-600 rounded-full animate-spin"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        {viewMode === "cities" ? (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                                {availableCities.map((city) => (
                                    <div
                                        key={city.name}
                                        onClick={() => {
                                            setActiveLocation(city.name);
                                            setViewMode("spaces");
                                        }}
                                        className="cursor-pointer"
                                    >
                                        <CityCard city={city} />
                                    </div>
                                ))}
                                {availableCities.length === 0 && (
                                    <div className="col-span-full py-40 text-center bg-gray-50 rounded-[4rem] border-2 border-dashed border-gray-100">
                                        <div className="max-w-md mx-auto px-6">
                                            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                                                <Globe className="text-gray-300" size={32} />
                                            </div>
                                            <h3 className="text-2xl font-black italic uppercase text-gray-900 mb-4">No Locations Found</h3>
                                            <p className="text-gray-500 font-medium leading-relaxed">We couldn't find any locations offering {title} at the moment. Please explore our other spaces.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                                {filteredSpaces.map((space) => (
                                    <SpaceCard key={space.id} space={space} />
                                ))}

                                {filteredSpaces.length === 0 && (
                                    <div className="col-span-full py-40 text-center bg-gray-50 rounded-[4rem] border-2 border-dashed border-gray-100">
                                        <div className="max-w-md mx-auto px-6">
                                            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                                                <Globe className="text-gray-300" size={32} />
                                            </div>
                                            <h3 className="text-2xl font-black italic uppercase text-gray-900 mb-4">Territory Uncharted</h3>
                                            <p className="text-gray-500 font-medium leading-relaxed">We currently don't have {title} listings in {activeLocation}. Our scouts are constantly working—check back soon or explore our other territories.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </>
                )}
            </section>

            {/* WHY CHOOSE US SECTION */}
            <section className="bg-gray-50 py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-black text-gray-900 mb-4">The CoworkSeek Experience</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg">We don't just provide space; we provide the foundation for your business to thrive.</p>
                </div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
                        <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-8"><Zap fill="currentColor" size={28} /></div>
                        <h3 className="text-xl font-bold mb-4">Instant Connectivity</h3>
                        <p className="text-gray-500 leading-relaxed font-medium">Plug and play with ultra-high speed fiber internet and seamless networking infrastructure.</p>
                    </div>
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
                        <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-8"><Shield size={28} /></div>
                        <h3 className="text-xl font-bold mb-4">Premium Security</h3>
                        <p className="text-gray-500 leading-relaxed font-medium">24/7 surveillance, biometric access, and secure lockers to keep your assets safe.</p>
                    </div>
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
                        <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-8"><Globe size={28} /></div>
                        <h3 className="text-xl font-bold mb-4">Vibrant Community</h3>
                        <p className="text-gray-500 leading-relaxed font-medium">Network with innovators, entrepreneurs, and established businesses in a collaborative environment.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
