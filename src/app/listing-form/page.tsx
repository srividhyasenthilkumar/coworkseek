"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchApi, BASE_URL } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import logo from "../../assets/logo.webp";
import banner from "../../assets/home/3d-rendering-business-meeting-working-room-office-building-1-scaled.webp";
import Modal from "@/components/Modal";
import { 
  Building2, 
  MapPin, 
  IndianRupee, 
  CheckCircle2, 
  Image as ImageIcon, 
  Info, 
  Users,
  Clock
} from "lucide-react";

export default function ListingForm() {
  const { user } = useAuth();
  const router = useRouter();
  const [cities, setCities] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    area: "",
    price: "",
    facilities: "",
    description: "",
    booking_rooms_details: "",
    image: null as File | null,
  });
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Modal State
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    type: "success" | "error";
    title: string;
    message: string;
    onAction?: () => void;
  }>({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  });

  const closeModal = () => setModalConfig({ ...modalConfig, isOpen: false });

  useEffect(() => {
    fetchApi("/cities/")
      .then((data) => setCities(data))
      .catch((err) => console.error(err));
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, image: file });
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.image) {
      setModalConfig({
        isOpen: true,
        type: "error",
        title: "Missing Image",
        message: "Please upload a high-quality image of your workspace.",
      });
      return;
    }

    setLoading(true);
    const data = new FormData();
    data.append("name", formData.name);
    // Note: Backend Area model uses ID. We might need to handle city area mapping better.
    // For now, if city is selected, we need to ensure area exists or is created.
    // Assuming backend handles basic creation or we use existing area ID.
    // Based on previous code, the backend expects city (ID) and area (Name).
    data.append("city", formData.city);
    data.append("area", formData.area);
    data.append("price", formData.price);
    data.append("facilities", formData.facilities);
    data.append("description", formData.description);
    data.append("booking_rooms_details", formData.booking_rooms_details);
    data.append("image", formData.image);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/spaces/`, {
        method: "POST",
        headers: {
          "Authorization": `Token ${token}`,
        },
        body: data,
      });

      if (!response.ok) throw new Error("Failed to create listing");

      setModalConfig({
        isOpen: true,
        type: "success",
        title: "Space Published",
        message: "Your workspace is now live on CoworkSeek! Welcome to the elite host community.",
        onAction: () => router.push("/profile")
      });
    } catch (err: any) {
      setModalConfig({
        isOpen: true,
        type: "error",
        title: "Publication Failed",
        message: err.message || "Something went wrong while publishing your space.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center">
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Info size={40} />
          </div>
          <h2 className="text-2xl font-black italic uppercase text-gray-900 mb-4">Elite Access Required</h2>
          <p className="text-gray-500 font-medium mb-8">Please log in to your account to list and manage your coworking territories.</p>
          <button
            onClick={() => router.push("/login")}
            className="w-full bg-red-600 text-white font-black uppercase text-xs tracking-[0.3em] py-5 rounded-2xl shadow-xl hover:bg-gray-950 transition-all active:scale-95"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* HERO HEADER */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image
          src={banner}
          alt="List your space"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
          <div className="inline-flex items-center gap-3 bg-red-600/20 backdrop-blur-xl border border-red-500/30 px-6 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <p className="uppercase tracking-[0.3em] text-[10px] font-black">Partner with Excellence</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-center">
            List Your <br />
            <span className="text-red-500">Territory.</span>
          </h1>
        </div>
      </section>

      {/* FORM CONTAINER */}
      <section className="max-w-5xl mx-auto px-6 -mt-20 relative z-20">
        <div className="bg-white rounded-[3rem] shadow-3xl overflow-hidden border border-gray-100 italic">
          <div className="flex flex-col md:flex-row">
            {/* FORM SIDE */}
            <div className="flex-1 p-8 md:p-14">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-3xl font-black text-gray-900 uppercase">Space Intel</h2>
                  <p className="text-gray-400 font-medium mt-1">Details for your elite listing</p>
                </div>
                <Image src={logo} alt="Logo" width={100} className="brightness-0 opacity-20" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-8 not-italic">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* SPACE NAME */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4 flex items-center gap-2">
                       <Building2 size={12} className="text-red-600" /> Space Name
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Skyline Innovation Hub"
                      className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-red-600 transition-all font-sans"
                    />
                  </div>

                  {/* PRICE */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4 flex items-center gap-2">
                       <IndianRupee size={12} className="text-red-600" /> Monthly Price (₹)
                    </label>
                    <input
                      required
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      placeholder="e.g. 15000"
                      className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-red-600 transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* CITY */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Target City</label>
                    <div className="relative">
                      <select
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-red-600 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select Domain</option>
                        {cities.map((city) => (
                          <option key={city.id} value={city.id}>{city.name}</option>
                        ))}
                      </select>
                      <MapPin size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  {/* AREA */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Specific Area</label>
                    <input
                      required
                      type="text"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      placeholder="e.g. Anna Nagar West"
                      className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-red-600 transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* CAPACITY DETAILS */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4 flex items-center gap-2">
                       <Users size={12} className="text-red-600" /> Capacity / Details
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.booking_rooms_details}
                      onChange={(e) => setFormData({ ...formData, booking_rooms_details: e.target.value })}
                      placeholder="e.g. 50 Seats · 5 Cabins"
                      className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-red-600 transition-all"
                    />
                  </div>

                  {/* AMENITIES */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4 flex items-center gap-2">
                       <CheckCircle2 size={12} className="text-red-600" /> Amenities (Comma Sep)
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.facilities}
                      onChange={(e) => setFormData({ ...formData, facilities: e.target.value })}
                      placeholder="Wi-Fi, AC, Coffee, Gym..."
                      className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-red-600 transition-all"
                    />
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Space Manifesto / Description</label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe the vibe and infrastructure of your workspace..."
                    rows={4}
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-red-600 transition-all resize-none"
                  />
                </div>

                {/* IMAGE UPLOAD */}
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Visual Asset</label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-200 group-hover:border-red-400 transition-colors" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    />
                    <div className="relative py-12 flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-red-600 shadow-xl mb-4 group-hover:scale-110 transition-transform">
                        <ImageIcon size={28} />
                      </div>
                      <p className="text-sm font-black uppercase tracking-widest text-gray-900">Upload Territory Snap</p>
                      <p className="text-xs text-gray-400 mt-1">High resolution .webp, .jpg or .png</p>
                    </div>
                  </div>
                  
                  {previewUrl && (
                    <div className="relative h-48 w-full rounded-[2rem] overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-500">
                      <Image src={previewUrl} alt="Preview" fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <p className="text-white text-xs font-black uppercase tracking-[0.2em]">Change Image</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`
                    w-full py-6 rounded-[2rem] font-black text-sm uppercase tracking-[0.4em] shadow-2xl transition-all duration-500 transform active:scale-[0.98]
                    flex items-center justify-center gap-4
                    ${loading
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-red-600 text-white hover:bg-gray-950 shadow-red-900/20"}
                  `}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-300 border-t-gray-600"></div>
                      <span>Publishing...</span>
                    </>
                  ) : (
                    <span>Publish Space</span>
                  )}
                </button>
              </form>
            </div>

            {/* INFO SIDE */}
            <div className="w-full md:w-80 bg-gray-50 p-8 md:p-14 md:border-l border-gray-100 italic">
              <h3 className="text-xl font-black text-gray-900 uppercase mb-8">Host Benefits</h3>
              <div className="space-y-10 not-italic">
                <div className="flex gap-4">
                   <div className="shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center text-red-600 shadow-sm"><CheckCircle2 size={18} /></div>
                   <div>
                     <p className="text-xs font-black uppercase tracking-widest text-gray-900 mb-1">Global Reach</p>
                     <p className="text-xs text-gray-500 font-medium">Connect with elite professionals nationwide.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center text-red-600 shadow-sm"><IndianRupee size={18} /></div>
                   <div>
                     <p className="text-xs font-black uppercase tracking-widest text-gray-900 mb-1">Direct Profit</p>
                     <p className="text-xs text-gray-500 font-medium">Keep 100% of your listed platform revenue.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center text-red-600 shadow-sm"><Clock size={18} /></div>
                   <div>
                     <p className="text-xs font-black uppercase tracking-widest text-gray-900 mb-1">Instant Live</p>
                     <p className="text-xs text-gray-500 font-medium">Vetted listings go live within 24 hours.</p>
                   </div>
                </div>
              </div>

              <div className="mt-20 p-6 rounded-3xl bg-red-600 text-white shadow-3xl shadow-red-900/20">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4">Concierge Support</p>
                <p className="text-sm font-bold leading-relaxed mb-6">Need help optimizing your listing for maximum conversion?</p>
                <button className="w-full bg-white text-gray-900 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all">Request Audit</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        type={modalConfig.type}
        title={modalConfig.title}
        message={modalConfig.message}
        onAction={modalConfig.onAction}
      />
    </div>
  );
}
