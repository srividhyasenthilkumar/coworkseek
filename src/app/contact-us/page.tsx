import Image from "next/image";
import banner from "../../assets/home/3d-rendering-business-meeting-working-room-office-building-1-scaled.webp"
import { MapPin, Phone, Mail } from "lucide-react";
export default function ContactSection() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <Image
          src={banner}
          alt="Contact Support"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-white text-center">
          <div className="inline-flex items-center gap-3 bg-red-600/10 backdrop-blur-md border border-red-500/30 px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <p className="uppercase tracking-[0.2em] text-[10px] font-black">
              Connect With Excellence
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] italic uppercase tracking-tight">
            Let's Start Your <br />
            <span className="text-red-600">Breakthrough.</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed font-medium max-w-2xl mx-auto">
            Whether you're looking for an elite workspace or scaling your host network, our team is here to ensure your journey is seamless.
          </p>
        </div>
      </section>

      {/* CONTACT INFO BLOCKS */}
      <section className="py-32 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Elite Command Center", detail: "Karuna Conclave, Anna Nagar, Chennai, TN 600040", icon: MapPin },
              { title: "Direct Assistance", detail: "+91 99622 62210", icon: Phone },
              { title: "Digital Correspondence", detail: "info@coworkseek.com", icon: Mail },
            ].map((block) => (
              <div key={block.title} className="group bg-white p-12 rounded-[3.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 -mr-16 -mt-16 rounded-full group-hover:scale-[3] transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                    <block.icon size={28} />
                  </div>
                  <h3 className="text-xl font-black italic uppercase text-gray-900 mb-4">{block.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{block.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* MAP AND FORM SECTION */}
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* Map */}
            <div className="relative rounded-[4rem] overflow-hidden shadow-3xl min-h-[500px] border-8 border-white">
              <iframe
                src="https://maps.google.com/maps?q=Anna%20Nagar%20Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-none grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              ></iframe>
            </div>

            {/* Form */}
            <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-3xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[6px] bg-red-600" />
              <h3 className="text-3xl font-black italic uppercase text-gray-900 mb-10">
                Send a <br />
                <span className="text-red-600 text-5xl">Transmission</span>
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 pl-4">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-red-600 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 pl-4">Digital Identity (Email)</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-red-600 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 pl-4">Primary Contact No.</label>
                  <input
                    type="text"
                    placeholder="+91 00000 00000"
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-red-600 transition-all outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 pl-4">Your Intel (Message)</label>
                  <textarea
                    rows={6}
                    placeholder="Tell us about your breakthrough requirements..."
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-red-600 transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-gray-900 text-white font-black uppercase text-xs tracking-[0.3em] py-6 rounded-2xl shadow-xl shadow-red-900/20 transition-all active:scale-[0.98]"
                >
                  Establish Connection
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
