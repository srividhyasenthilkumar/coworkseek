"use client";
import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";
import CityCard from "@/components/CityCard";
import { MapPin, Search, Globe, Shield, Sparkles, ArrowRight, Zap, Target } from "lucide-react";

export default function LocationsPage() {
  const [cities, setCities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchApi("/cities/")
      .then((data) => setCities(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-12 h-12 border-4 border-gray-100 border-t-red-600 rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      {/* MASSIVE LUXURY HERO */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/20 via-transparent to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-2xl border border-white/10 px-6 py-3 rounded-2xl mb-12 animate-fade-in-down">
            <Globe size={16} className="text-red-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">The Global Hub Network</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-white leading-[0.95] mb-12 italic uppercase tracking-tighter">
            Select Your <br />
            <span className="text-red-600">Territory.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 font-medium leading-relaxed opacity-80">
            Establish your presence in India's most prestigious business districts. Elite workspaces designed for the architects of tomorrow.
          </p>

          {/* LUXURY SEARCH */}
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute inset-0 bg-red-600/20 blur-2xl group-focus-within:bg-red-600/40 transition-all duration-700"></div>
            <div className="relative flex items-center bg-white rounded-3xl p-2 shadow-2xl border border-gray-100">
              <Search size={24} className="ml-6 text-gray-400 group-focus-within:text-red-600 transition-colors" />
              <input
                type="text"
                placeholder="Search Territory..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none py-6 px-4 text-lg font-black uppercase tracking-widest outline-none text-gray-900 placeholder:text-gray-300"
              />
              <button className="bg-gray-950 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-600 transition-all duration-500 shadow-xl">
                Scan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CITIES GRID - LUXURY PRESENTATION */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12 px-4">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-red-600" />
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 italic">Available Districts</p>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-950 italic uppercase tracking-tighter">
              Discover <br />
              <span className="text-red-600">The Network.</span>
            </h2>
          </div>
          <div className="flex flex-col md:items-end gap-10 max-w-md">
            <p className="text-gray-500 font-medium leading-relaxed md:text-right italic">
              Our inventory spans the most strategic coordinates in the nation. Every location is verified for elite-grade performance and security.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-xl">
                    <div className="w-full h-full bg-red-600/10 flex items-center justify-center">
                      <MapPin size={18} className="text-red-600" />
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-2xl font-black italic text-gray-900 leading-none">10 Cities</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Expanding Weekly</p>
              </div>
            </div>
          </div>
        </div>

        {filteredCities.length === 0 ? (
          <div className="py-40 text-center bg-gray-50 rounded-[5rem] border-2 border-dashed border-gray-100">
            <div className="max-w-md mx-auto px-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl border border-gray-100">
                <Target className="text-red-600" size={40} />
              </div>
              <h3 className="text-3xl font-black italic uppercase text-gray-900 mb-6">No matches found</h3>
              <p className="text-gray-500 font-medium leading-relaxed italic">The requested coordinate is not currently in our network. We are expanding rapidly – check back soon.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {filteredCities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        )}
      </section>

      {/* PERFORMANCE BAR */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-3 gap-12 border-y border-gray-100 py-20 px-10">
          <div className="flex items-start gap-8 group">
            <div className="w-16 h-16 bg-gray-50 rounded-3xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm">
              <Zap size={32} />
            </div>
            <div>
              <h4 className="text-xl font-black italic uppercase text-gray-900 mb-2">Gigabit Velocity</h4>
              <p className="text-gray-400 font-medium text-sm leading-relaxed">Enterprise-grade network infrastructure in every location.</p>
            </div>
          </div>
          <div className="flex items-start gap-8 group">
            <div className="w-16 h-16 bg-gray-50 rounded-3xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm">
              <Shield size={32} />
            </div>
            <div>
              <h4 className="text-xl font-black italic uppercase text-gray-900 mb-2">Elite Security</h4>
              <p className="text-gray-400 font-medium text-sm leading-relaxed">Multi-layered physical and digital protection as standard.</p>
            </div>
          </div>
          <div className="flex items-start gap-8 group">
            <div className="w-16 h-16 bg-gray-50 rounded-3xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm">
              <Sparkles size={32} />
            </div>
            <div>
              <h4 className="text-xl font-black italic uppercase text-gray-900 mb-2">Superior Vibe</h4>
              <p className="text-gray-400 font-medium text-sm leading-relaxed">Architect-led design for maximum inspiration and comfort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US CTA - MASSIVE UPGRADE */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <div className="bg-gray-950 rounded-[5rem] p-16 md:p-32 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-red-600/5 rounded-full -mr-96 -mt-96 blur-[180px] group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-2xl mb-12 shadow-2xl shadow-red-900/40">
                <Sparkles size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Enterprise Readiness</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black mb-10 italic uppercase leading-[0.9] tracking-tighter">Ready to <br /><span className="text-red-600">Scale Globally?</span></h2>
              <p className="text-gray-400 text-xl font-medium opacity-90 leading-relaxed mb-12 max-w-xl">Join the most successful workforce in the nation. Your next hub is waiting at the intersection of tech and ambition.</p>
              <div className="flex flex-wrap gap-8 items-center pt-8 border-t border-white/5">
                <div>
                  <p className="text-3xl font-black italic text-white uppercase leading-none mb-1">2.4k+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Global Members</p>
                </div>
                <div className="w-[1px] h-10 bg-white/10"></div>
                <div>
                  <p className="text-3xl font-black italic text-white uppercase leading-none mb-1">98%</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Retention rate</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto">
              <button className="w-full lg:w-auto bg-red-600 text-white px-16 py-10 rounded-[3rem] font-black text-sm uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all duration-700 shadow-[0_32px_96px_-16px_rgba(220,38,38,0.4)] flex items-center justify-center gap-4 group/btn">
                Launch Hub <ArrowRight size={24} className="group-hover/btn:translate-x-6 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
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
      `}</style>
    </div>
  );
}
