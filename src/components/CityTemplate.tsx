"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SpaceCard from "@/components/SpaceCard";
import { ChevronRight, Globe, MapPin, Sparkles, TrendingUp, Building2, Users, ArrowRight } from "lucide-react";

interface CityTemplateProps {
    cityName: string;
    cityImage?: string;
    tagline?: string;
    description?: string;
    spaces: any[];
    loading?: boolean;
}

export default function CityTemplate({
    cityName,
    cityImage,
    tagline = "Elite Hub for Innovation",
    description = "A premier business landscape designed for the next generation of global leaders.",
    spaces,
    loading = false
}: CityTemplateProps) {
    const [activeArea, setActiveArea] = useState("All");
    const [isSticky, setIsSticky] = useState(false);
    const filterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (filterRef.current) {
                const offset = filterRef.current.offsetTop;
                setIsSticky(window.scrollY > offset - 100);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const areas = ["All", ...Array.from(new Set(spaces.map((s) => s.area)))];
    const filteredSpaces = activeArea === "All"
        ? spaces
        : spaces.filter(s => s.area === activeArea);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-gray-100 border-t-red-600 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* ULTRA-PREMIUM HERO */}
            <section className="relative h-[85vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 scale-105 animate-slow-zoom">
                    {cityImage && (
                        <Image
                            src={cityImage}
                            alt={cityName}
                            fill
                            priority
                            className="object-cover brightness-75"
                        />
                    )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-white">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-red-500 mb-12 animate-fade-in-down">
                        <span className="cursor-pointer hover:underline" onClick={() => (window.location.href = "/")}>Network</span>
                        <span className="text-gray-500">/</span>
                        <span className="cursor-pointer hover:underline" onClick={() => (window.location.href = "/coworking")}>Territories</span>
                        <span className="text-gray-500">/</span>
                        <span className="text-white">{cityName}</span>
                    </div>

                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-2xl border border-white/20 px-6 py-3 rounded-2xl mb-8 animate-fade-in-up">
                            <Sparkles size={16} className="text-red-500 animate-pulse" />
                            <p className="uppercase tracking-[0.3em] text-[10px] font-black">
                                {tagline}
                            </p>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-black mb-12 leading-[0.95] italic uppercase tracking-tighter animate-fade-in-up delay-100">
                            {cityName}<span className="text-red-600">.</span>
                        </h1>

                        <p className="text-2xl text-gray-300 mb-16 max-w-2xl leading-relaxed font-medium opacity-90 animate-fade-in-up delay-200">
                            {description}
                        </p>

                        {/* HERO STATS */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl animate-fade-in-up delay-300">
                            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 group hover:bg-red-600/20 transition-all duration-500">
                                <p className="text-4xl font-black italic text-red-500 mb-1 group-hover:text-white">{spaces.length}+</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white">Active Hubs</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 group hover:bg-red-600/20 transition-all duration-500">
                                <p className="text-4xl font-black italic text-white mb-1">24/7</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white">Secure Access</p>
                            </div>
                            <div className="hidden md:block bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 group hover:bg-red-600/20 transition-all duration-500">
                                <p className="text-4xl font-black italic text-white mb-1">{areas.length > 1 ? areas.length - 1 : areas.length}</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white">Districts</p>
                            </div>
                            <div className="hidden md:block bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 group hover:bg-red-600/20 transition-all duration-500">
                                <p className="text-4xl font-black italic text-white mb-1">01</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white">Elite Network</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MOUSE SCROLL INDICATOR */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                    <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-red-600 to-transparent"></div>
                </div>
            </section>

            {/* STICKY FILTER NAVIGATION */}
            <div ref={filterRef} className="h-1 lg:h-4"></div>
            <section className={`
        sticky top-20 z-50 transition-all duration-500 px-6
        ${isSticky ? "translate-y-0 opacity-100" : "translate-y-4 opacity-100 py-12 -mt-20"}
      `}>
                <div className={`
            max-w-7xl mx-auto bg-white rounded-[3rem] p-4 lg:p-6 transition-all duration-500 border border-gray-100
            ${isSticky ? "shadow-2xl rounded-2xl" : "shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[3rem] p-10"}
        `}>
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div className={isSticky ? "hidden lg:block" : "block"}>
                            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-red-600 mb-2">District Intelligence</p>
                            <h2 className="text-2xl font-black italic uppercase text-gray-950 tracking-tight leading-none">Territories</h2>
                        </div>
                        <div className="flex flex-wrap gap-2 lg:justify-end overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
                            {areas.map(area => (
                                <button
                                    key={area}
                                    onClick={() => setActiveArea(area)}
                                    className={`
                    px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 border whitespace-nowrap
                    ${activeArea === area
                                            ? "bg-red-600 text-white border-red-600 shadow-2xl shadow-red-900/30 scale-105"
                                            : "bg-white text-gray-400 border-gray-100 hover:border-red-600 hover:text-red-600 hover:shadow-lg"
                                        }
                  `}
                                >
                                    {area}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CITY VIBE STORYTELLING */}
            <section className="max-w-7xl mx-auto px-6 py-32 bg-gray-50/50 rounded-[4rem] my-20">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative h-[500px] rounded-[3rem] overflow-hidden group">
                        {cityImage && <Image src={cityImage} alt="Vibe" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-600/40 to-transparent mix-blend-overlay"></div>
                    </div>
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <p className="text-red-600 text-[10px] font-black uppercase tracking-[0.5em]">The Ecosystem</p>
                            <h2 className="text-5xl md:text-6xl font-black italic uppercase text-gray-950 leading-tight">Elite Hubs for <br /><span className="text-red-600">{cityName} Founders.</span></h2>
                        </div>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed opacity-80">
                            {description} We have curated the most prestigious business districts in {cityName} to provide your team with an environment that fuels productivity and commands respect.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <TrendingUp className="text-red-600" size={32} />
                                <h4 className="font-black uppercase text-xs tracking-widest text-gray-900">High Growth</h4>
                                <p className="text-sm text-gray-500 font-medium">Top performing districts in {cityName}.</p>
                            </div>
                            <div className="space-y-2">
                                <Building2 className="text-red-600" size={32} />
                                <h4 className="font-black uppercase text-xs tracking-widest text-gray-900">Prime Areas</h4>
                                <p className="text-sm text-gray-500 font-medium">A+ Grade infrastructures guaranteed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LISTINGS GRID */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 px-4 gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-[2px] bg-red-600" />
                            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">Inventory Status</p>
                        </div>
                        <h3 className="text-4xl md:text-7xl font-black italic uppercase text-gray-950 tracking-tighter leading-tight">
                            {activeArea === "All" ? "Global Selection" : `${activeArea} Network`}
                        </h3>
                    </div>
                    <div className="flex items-center gap-4 bg-gray-50 px-8 py-4 rounded-2xl border border-gray-100">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                    <div className="w-full h-full bg-red-600/20 flex items-center justify-center">
                                        <Users size={16} className="text-red-600" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <p className="text-lg font-black italic text-gray-900 leading-none">1.2k+</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Members in City</p>
                        </div>
                    </div>
                </div>

                {filteredSpaces.length === 0 ? (
                    <div className="py-40 text-center bg-gray-50 rounded-[4rem] border-2 border-dashed border-gray-100">
                        <div className="max-w-md mx-auto px-6">
                            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                                <Globe className="text-gray-300" size={32} />
                            </div>
                            <h3 className="text-2xl font-black italic uppercase text-gray-900 mb-4">No Spaces Found</h3>
                            <p className="text-gray-500 font-medium leading-relaxed">We're expanding rapidly. Check back soon or explore other territories in {cityName}.</p>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                        {filteredSpaces.map((space) => (
                            <SpaceCard key={space.id} space={space} />
                        ))}
                    </div>
                )}
            </section>

            {/* FOOTER CTA */}
            <section className="max-w-7xl mx-auto px-6 mt-32">
                <div className="bg-gray-950 rounded-[5rem] p-16 md:p-32 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/5 rounded-full -mr-96 -mt-96 blur-[150px] group-hover:scale-110 transition-transform duration-1000"></div>
                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <p className="text-red-600 text-[10px] font-black uppercase tracking-[1em] mb-12">Global Enterprise Hub</p>
                        <h2 className="text-5xl md:text-8xl font-black italic uppercase mb-12 leading-[0.9] tracking-tighter">Your custom <br /><span className="text-red-600">Headquarters.</span></h2>
                        <p className="text-gray-400 text-xl font-medium opacity-80 leading-relaxed mb-16 max-w-2xl mx-auto">Our scouts are standing by to find and bespoke build the perfect territory for your global team in {cityName}.</p>
                        <button className="bg-white text-black px-16 py-8 rounded-3xl font-black text-xs uppercase tracking-[0.5em] hover:bg-red-600 hover:text-white transition-all duration-500 shadow-2xl flex items-center gap-4 mx-auto group/btn">
                            Get Started <ArrowRight size={20} className="group-hover/btn:translate-x-4 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* CUSTOM ANIMATIONS */}
            <style jsx>{`
        @keyframes slow-zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
            animation: slow-zoom 20s infinite alternate ease-in-out;
        }
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.8s forwards ease-out;
        }
        @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
            animation: fade-in-down 0.8s forwards ease-out;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
        </div>
    );
}
