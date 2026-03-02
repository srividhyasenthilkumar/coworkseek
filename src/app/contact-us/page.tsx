import Image from "next/image";
import banner from "../../assets/home/3d-rendering-business-meeting-working-room-office-building-1-scaled.webp"
import { MapPin, Phone, Mail } from "lucide-react";
export default function ContactSection() {
  return (
    <>
      <section className="relative w-full h-[450px] overflow-hidden">
        <Image
          src={banner}
          alt="Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="w-full bg-gradient-to-br from-gray-100 via-white to-gray-200 py-24 px-6 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-10 mb-20">
            <div className="group bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-10 text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
              <MapPin
                className="mx-auto text-red-500 mb-6 group-hover:scale-125 transition duration-500"
                size={45}
              />
              <h3 className="text-xl font-semibold mb-4">Office Address</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Karuna Conclave, AD 42 & 45, 4th Ave, Shanthi Colony, Anna
                Nagar, Chennai, Tamil Nadu 600040
              </p>
            </div>

            <div className="group bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-10 text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
              <Phone
                className="mx-auto text-red-500 mb-6 group-hover:scale-125 transition duration-500"
                size={45}
              />
              <h3 className="text-xl font-semibold mb-4">Call to Us</h3>
              <p className="text-gray-600 text-sm">Mobile: +91 99622 62210</p>
            </div>

            <div className="group bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-10 text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
              <Mail
                className="mx-auto text-red-500 mb-6 group-hover:scale-125 transition duration-500"
                size={45}
              />
              <h3 className="text-xl font-semibold mb-4">Email Address</h3>
              <p className="text-gray-600 text-sm">info@coworkseek.com</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition duration-500">
              <iframe
                src="https://maps.google.com/maps?q=Anna%20Nagar%20Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[520px]"
                loading="lazy"
              ></iframe>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-12 hover:shadow-red-200 transition duration-500">
              <h2 className="text-3xl font-bold mb-8 relative inline-block">
                Send Us Message
                <span className="absolute left-0 -bottom-2 w-16 h-1 bg-red-500 rounded-full"></span>
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Phone No"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                />

                <textarea
                  rows={5}
                  placeholder="Message"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                ></textarea>

                <button
                  type="submit"
                  className="relative overflow-hidden bg-red-500 hover:bg-red-600 text-white px-10 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
