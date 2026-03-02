import Image from "next/image";
import banner from "../assets/home/coworking-space2-banner.webp";
import modern_office1 from "../assets/home/modern-office-teamwork-co-working-space.webp"
import modern_office2 from "../assets/home/deskbright-and-modern-open-space-.webp"
import modern_office3 from "../assets/home/modern-office-interior.webp"
import {CheckCircle, ArrowRight, Building2, CalendarCheck, FileCheck} from "lucide-react"
import Link from "next/link";
import anna_nagar from "../assets/Meeting-Room-anna-nagar.webp"
import anna_nagr2 from "../assets/Meeting-Room2-anna-nagar.webp"
import ReviewForm from "./ReviewForm"
import BlogsSection from "./BlogsSection";
import OfficeSpace from "./OfficeSpace"
import background_bannerr from "../assets/home/pexels-seven11nash-380769-1-scaled.webp"
import team_member from "../assets/home/team-member.webp"
import chennai from "../assets/places/chennai.jpg";
import coimbatore from "../assets/places/coimbatore.jpg";
import bangalore from "../assets/places/bangalore.jpg";
import delhi from "../assets/places/delhi.jpg";
import noida from "../assets/places/noida.jpg";
import gurgoan from "../assets/places/gurgaon.jpg";
import mumbai from "../assets/places/mumbai.jpg";
import pune from "../assets/places/pune.jpg";
import hyderabad from "../assets/places/hyderabad.jpg";
import kolkata from "../assets/places/kolkatta.jpg";
export default function HomeSection() {
  const features = [
  {
    title: "Member-Only Pricing",
    desc: "Enjoy special rates available exclusively to Coworkseek users.",
  },
  {
    title: "Verified Workspaces",
    desc: "Only vetted, high-quality spaces make it to our platform.",
  },
  {
    title: "Zero Booking Fees",
    desc: "Real people, ready to help when you need it.",
  },
  {
    title: "End-to-End Offline Support",
    desc: "We offer seamless assistance throughout your journey.",
  },
  {
    title: "Exclusive Partner Discounts",
    desc: "Get access to brand offers and deals just for members.",
  },
];
const cities = [
  {
    name: "Bangalore",
    image: bangalore,
    link: "/coworking/bangalore",
  },
  {
    name: "Coimbatore",
    image: coimbatore,
    link: "/coworking/coimbatore",
  },
  {
    name: "Noida",
    image: noida,
    link: "/coworking/noida",
  },
  {
    name: "Delhi",
    image: delhi,
    link: "/locations/delhi",
  },
  {
    name: "Mumbai",
    image: mumbai,
    link: "/locations/mumbai",
  },
  {
    name: "Pune",
    image: pune,
    link: "/locations/pune",
  },
];
const steps = [
  {
    title: "Find Your Space",
    desc: "Browse and compare top coworking spaces that fit your style and needs.",
    icon: Building2,
  },
  {
    title: "Book a Tour",
    desc: "Schedule a visit to explore the space and meet the community.",
    icon: CalendarCheck,
  },
  {
    title: "Move In & Start Working",
    desc: "Choose your workspace, finalize the details, and get to work with ease.",
    icon: FileCheck,
  },
];
  return (
    <>
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center pt-20 py-10 overflow-hidden">
        <Link href="/">
          <Image
            src={banner}
            alt="Coworking space"
            fill
            priority
            className="object-cover md:rounded-bl-[40%] md:rounded-br-[40%]"
          />
        </Link>
        <div className="absolute inset-0 bg-black/50 md:rounded-bl-[40%] md:rounded-br-[40%]" />
        <div className="relative z-10 w-full px-5 md:px-10 mx-auto text-white max-w-5xl">
          <p className="uppercase tracking-widest text-xs md:text-sm text-center font-bold mb-3 md:mb-4">
            Coworking made for creators and collaborators
          </p>

          <h1 className="text-3xl md:text-5xl text-center font-bold mb-6">
            Discover Your Perfect Workspace
          </h1>

          {/* Search Bar */}
          <div
            className="
          bg-white rounded-2xl md:rounded-full
          flex flex-col md:flex-row
          gap-3 md:gap-0
          p-3 md:p-1
          items-stretch
          max-w-3xl mx-auto
        "
          >
            <input
              type="text"
              placeholder="What are you looking for"
              className="px-5 py-3 outline-none text-black rounded-xl md:rounded-none flex-1"
            />

            <select className="px-4 py-3 outline-none text-gray-600 rounded-xl md:rounded-none">
              <option>Select Location</option>
              <option>Bangalore</option>
              <option>Chennai</option>
              <option>Coimbatore</option>
              <option>Delhi</option>
              <option>Noida</option>
              <option>Mumbai</option>
              <option>Pune</option>
              <option>Hyderabad</option>
              <option>Kolkatta</option>
            </select>

            <select className="px-4 py-3 outline-none text-gray-600 rounded-xl md:rounded-none">
              <option>Select Category</option>
              <option>Business</option>
              <option>Coworking Space</option>
              <option>Dedicated Desk</option>
              <option>Hot Desk</option>
              <option>Meeting Rooms</option>
              <option>Private Cabin</option>
              <option>Virtual Office</option>
              <option>Studio</option>
            </select>

            <button
              className="
            bg-red-500 text-white
            px-6 py-3 ml-5
            font-semibold
            rounded-xl md:rounded-full
            hover:bg-red-600
            transition
          "
            >
              Search
            </button>
          </div>

          <p className="mt-5 md:mt-6 text-gray-200 max-w-2xl mx-auto font-bold text-center text-sm md:text-base">
            Whether you’re a freelancer, a startup, or a remote team, we offer
            flexible workspaces to fit your needs.
          </p>
        </div>
      </section>
      <OfficeSpace />
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* LEFT IMAGES */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Large Image */}
            <div className="md:row-span-2">
              <Image
                src={modern_office2}
                alt="Workspace"
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>

            {/* Small Image 1 */}
            <Image
              src={modern_office1}
              alt="Coworking space"
              className="rounded-2xl object-cover w-full h-full"
            />

            {/* Small Image 2 */}
            <Image
              src={modern_office3}
              alt="Meeting room"
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-3">
              What We Do
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Choose Coworkseek
            </h2>

            <ul className="space-y-6">
              {features.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <CheckCircle className="text-red-500 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <p className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-3">
              Work. Connect. Grow
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Top Cities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Growing business, we offer flexible workspaces designed to help
              you thrive
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Big Card */}
            <Link
              href="/coworking/chennai "
              className="group block rounded-2xl border border-gray-400 overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative h-[200px] m-3">
                <Image
                  src={chennai}
                  alt="Chennai"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-5  flex items-center justify-between">
                <h3 className="text-xl font-semibold">Chennai</h3>
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-red-500 group-hover:text-white transition">
                  <ArrowRight size={18} />
                </span>
              </div>
            </Link>

            {/* Right Small Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {cities.map((city) => (
                <Link
                  key={city.name}
                  href={city.link}
                  className="group flex items-center gap-4 p-4 border border-gray-400 rounded-xl hover:shadow-md transition"
                >
                  <Image
                    src={city.image}
                    alt={city.name}
                    width={70}
                    height={70}
                    className="rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{city.name}</h4>
                    <p className="text-gray-500 text-sm">0 Listings</p>
                  </div>

                  <span className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-red-500 group-hover:text-white transition">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src={background_bannerr}
          alt="Coworking background"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <div className="text-white max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Discover. Compare. Work <br />
              Smarter.
            </h1>

            {/* Red underline */}
            <div className="w-20 h-1 bg-red-500 rounded mb-6" />

            <p className="text-gray-200 mb-4 leading-relaxed">
              At <span className="font-semibold text-white">CoworkSeek</span>,
              we’re redefining how professionals find and connect with coworking
              spaces. Our platform is dedicated to listing and showcasing the
              best coworking spaces across India — helping freelancers,
              startups, and businesses find their ideal workspace with ease and
              confidence.
            </p>

            <p className="text-gray-200 mb-8 leading-relaxed">
              We don’t just list spaces—we highlight experiences. Every location
              featured on CoworkSeek offers{" "}
              <strong>ergonomically designed infrastructure</strong> and
              extraordinary amenities that cater to modern workstyles. From{" "}
              <strong>Dedicated Desks</strong> to
              <strong> Private Cabins</strong> and{" "}
              <strong>Meeting Rooms</strong>.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 transition text-white font-semibold px-7 py-4 rounded-full"
            >
              More Information
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white/20">
                →
              </span>
            </Link>
          </div>

          {/* RIGHT FLOATING IMAGES */}
          <div className="relative hidden lg:block min-h-[420px]">
            {/* Image 1 */}
            <div className="absolute right-0 top-0 rotate-[6deg]">
              <Image
                src={anna_nagr2}
                alt="Workspace"
                width={300}
                height={220}
                className="rounded-xl border-4 border-white shadow-xl"
              />
            </div>

            {/* Image 2 */}
            <div className="absolute right-24 top-32 rotate-[-6deg]">
              <Image
                src={anna_nagar}
                alt="Office space"
                width={300}
                height={220}
                className="rounded-xl border-4 border-white shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center">
            <p className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-3">
              Popular Listings
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Top-Rated Workspaces Near You
            </h2>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Get Started in 3 Easy Steps
          </h2>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-20">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center relative">
                {/* Step Number */}
                <span className="absolute -top-10 right-10 text-6xl font-light text-gray-100 select-none">
                  {`0${index + 1}`}
                </span>

                {/* Icon */}
                <div className="mx-auto mb-6 w-20 h-20 rounded-2xl  hover:text-white   bg-red-50 flex items-center justify-center">
                  <step.icon className="text-red-500  w-9 h-9" />
                </div>

                <h4 className="text-xl font-semibold mb-3">{step.title}</h4>

                <p className="text-gray-600 max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="relative bg-red-500 rounded-3xl px-8 md:px-14 py-12 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden">
            {/* Left Image */}
            <div className="relative w-36 bg-white rounded-b-[50%] rounded-t-2xl h-36 shrink-0">
              <Image
                src={team_member}
                alt="Host"
                fill
                className="object-cover rounded-full"
              />
            </div>

            {/* Text */}
            <div className="text-white flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Showcase Your Space. We’ll Bring the Bookings
              </h3>
              <p className="text-red-100 max-w-2xl">
                List for free and let our experts do the heavy lifting. Keep
                your bookings, leads, and workspace management all in one
                streamlined platform.
              </p>
            </div>

            {/* Button */}
            <Link
              href="/contact"
              className="bg-white text-black font-semibold px-7 py-4 rounded-full flex items-center gap-3 hover:bg-gray-100 transition"
            >
              Contact With Us
              <span className="w-6 h-6 flex items-center justify-center rounded-full border">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
      <ReviewForm />
      <BlogsSection />
    </>
  );
}
