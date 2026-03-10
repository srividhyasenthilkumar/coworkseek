import Image from "next/image";
import banner from "../assets/home/coworking-space2-banner.webp";
import modern_office1 from "../assets/home/modern-office-teamwork-co-working-space.webp"
import modern_office2 from "../assets/home/deskbright-and-modern-open-space-.webp"
import modern_office3 from "../assets/home/modern-office-interior.webp"
import { CheckCircle, ArrowRight, Building2, CalendarCheck, FileCheck } from "lucide-react"
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
      name: "Chennai",
      image: chennai,
      link: "/coworking/chennai",
    },
    {
      name: "Mumbai",
      image: mumbai,
      link: "/coworking/mumbai",
    },
    {
      name: "Delhi",
      image: delhi,
      link: "/coworking/delhi",
    },
    {
      name: "Hyderabad",
      image: hyderabad,
      link: "/coworking/hyderabad",
    },
    {
      name: "Pune",
      image: pune,
      link: "/coworking/pune",
    },
    {
      name: "Gurgaon",
      image: gurgoan,
      link: "/coworking/gurgaon",
    },
    {
      name: "Noida",
      image: noida,
      link: "/coworking/noida",
    },
    {
      name: "Kolkata",
      image: kolkata,
      link: "/coworking/kolkata",
    },
    {
      name: "Coimbatore",
      image: coimbatore,
      link: "/coworking/coimbatore",
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
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0">
          <Image
            src={banner}
            alt="Premium Coworking Hub"
            fill
            priority
            className="object-cover"
          />
          {/* Dynamic Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 mx-auto text-white max-w-7xl">
          <div className="max-w-3xl">
            {/* Tagline */}
            <div className="inline-flex items-center gap-3 bg-red-600/10 backdrop-blur-md border border-red-500/30 px-4 py-2 rounded-full mb-8 animate-fadeIn">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <p className="uppercase tracking-[0.2em] text-[10px] font-black">
                The Future of Collaborative Work
              </p>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] italic uppercase tracking-tight">
              Work from anywhere, <br />
              <span className="text-red-600">better.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-medium">
              Join India's most elite network of coworking spaces. From private studios to vibrant community hubs,
              find a workspace that inspires your next big breakthrough.
            </p>

            {/* SEARCH INTERFACE - Glassmorphism */}
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-2 rounded-[2rem] shadow-2xl animate-slideUp">
              <div className="grid grid-cols-1 md:grid-cols-10 gap-2">
                {/* Input Area */}
                <div className="md:col-span-4 relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-red-500 opacity-70 group-focus-within:opacity-100 transition-opacity">
                    <Building2 size={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search spaces, areas, or cities..."
                    className="w-full pl-14 pr-6 py-5 bg-white/10 rounded-2xl md:rounded-[1.5rem] outline-none text-white placeholder:text-gray-400 focus:bg-white/20 transition-all font-bold"
                  />
                </div>

                {/* Filters */}
                <div className="md:col-span-2 relative">
                  <select className="w-full px-6 py-5 bg-white/10 rounded-2xl md:rounded-[1.5rem] outline-none text-gray-200 font-bold appearance-none cursor-pointer focus:bg-white/20 transition-all border-none">
                    <option className="bg-gray-900 text-white">All Locations</option>
                    <option className="bg-gray-900 text-white">Chennai</option>
                    <option className="bg-gray-900 text-white">Bangalore</option>
                    <option className="bg-gray-900 text-white">Mumbai</option>
                    <option className="bg-gray-900 text-white">Delhi</option>
                  </select>
                </div>

                <div className="md:col-span-2 relative">
                  <select className="w-full px-6 py-5 bg-white/10 rounded-2xl md:rounded-[1.5rem] outline-none text-gray-200 font-bold appearance-none cursor-pointer focus:bg-white/20 transition-all border-none">
                    <option className="bg-gray-900 text-white">All Spaces</option>
                    <option className="bg-gray-900 text-white">Dedicated Desk</option>
                    <option className="bg-gray-900 text-white">Private Cabin</option>
                    <option className="bg-gray-900 text-white">Meeting Rooms</option>
                    <option className="bg-gray-900 text-white">Studio</option>
                  </select>
                </div>

                {/* Submit */}
                <div className="md:col-span-2">
                  <button className="w-full h-full bg-red-600 hover:bg-white hover:text-red-600 px-8 py-5 rounded-2xl md:rounded-[1.5rem] font-black uppercase text-sm tracking-widest transition-all duration-300 shadow-xl shadow-red-600/20 active:scale-95">
                    Find Space
                  </button>
                </div>
              </div>
            </div>

            {/* QUICK STATS */}
            <div className="mt-12 flex flex-wrap gap-8 opacity-80">
              <div className="flex flex-col">
                <span className="text-2xl font-black italic">500+</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Verified Spaces</span>
              </div>
              <div className="w-[1px] h-10 bg-white/20 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-2xl font-black italic">12</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Major Cities</span>
              </div>
              <div className="w-[1px] h-10 bg-white/20 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-2xl font-black italic">15k+</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Active Members</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Decals */}
        <div className="absolute bottom-20 right-20 hidden xl:block animate-bounceSlow">
          <div className="bg-white/10 backdrop-blur-3xl p-6 rounded-[2rem] border border-white/20 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center">
                <CheckCircle className="text-white" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest">Verified Hotspot</p>
                <p className="text-sm text-gray-400 font-medium">Safe, SECURE & High-Speed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OfficeSpace />
      {/* WHY CHOOSE US SECTION */}
      <section className="py-32 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-red-600" />
              <p className="text-red-600 uppercase tracking-widest text-xs font-black">
                Why CoworkSeek
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 italic uppercase leading-tight">
              Designed for the <br />
              <span className="text-red-600">Modern Professional</span>
            </h2>

            <p className="text-gray-500 font-medium text-lg mb-12 max-w-xl leading-relaxed">
              We've built a platform that removes the friction from finding your next workspace.
              Experience premium support and verified quality at every step.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((item) => (
                <div key={item.title} className="group p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-500">
                  <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-500">
                    <CheckCircle size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 italic uppercase">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGES - Collage Style */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-6 scale-95 lg:scale-100">
            <div className="pt-12">
              <div className="relative h-[450px] w-full rounded-[3rem] overflow-hidden shadow-2xl rotate-[-3deg] hover:rotate-0 transition-transform duration-700">
                <Image
                  src={modern_office2}
                  alt="Workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative h-[250px] w-full rounded-[3rem] overflow-hidden shadow-2xl rotate-[3deg] hover:rotate-0 transition-transform duration-700">
                <Image
                  src={modern_office1}
                  alt="Coworking space"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[250px] w-full rounded-[3rem] overflow-hidden shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                <Image
                  src={modern_office3}
                  alt="Meeting room"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE CITIES SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[2px] bg-red-600" />
                <p className="text-red-600 uppercase tracking-widest text-xs font-black">
                  Nationwide Network
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 italic uppercase">
                Explore Our <br />
                <span className="text-red-600">Prime Locations</span>
              </h2>
            </div>
            <p className="text-gray-500 font-medium max-w-sm">
              From tech hubs to cultural centers, discover premium coworking spaces in India's leading business districts.
            </p>
          </div>

          {/* City Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Featured Big Card - Chennai */}
            <Link
              href="/coworking/chennai"
              className="lg:col-span-1 group relative rounded-[3rem] overflow-hidden md:h-[1300px] h-[500px] shadow-2xl"
            >
              <Image
                src={chennai}
                alt="Chennai"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-4xl font-black text-white italic uppercase mb-2">Chennai</h3>
                <p className="text-gray-300 font-medium mb-6">Discover the soul of South India's hub.</p>
                <div className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest group-hover:bg-white group-hover:text-red-600 transition-all">
                  Browse Chennai
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            {/* Other Cities Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {cities.map((city) => (
                <Link
                  key={city.name}
                  href={city.link}
                  className="group relative h-[285px] rounded-[2.5rem] overflow-hidden shadow-lg"
                >
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.3] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-8 left-8 flex items-center justify-between right-8">
                    <div>
                      <h4 className="text-2xl font-black text-white italic uppercase">{city.name}</h4>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Leading Workspace Hub</p>
                    </div>
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 group-hover:bg-red-600 group-hover:border-red-600 transition-all">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVER INFO SECTION */}
      <section className="relative min-h-screen flex py-20 items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={background_bannerr}
            alt="Vision Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/85" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-900/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* LEFT TEXT */}
          <div className="text-white">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[2px] bg-red-600" />
              <p className="text-red-600 uppercase tracking-widest text-xs font-black">
                Our Vision
              </p>
            </div>

            <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-[1.1] mb-10 tracking-tighter">
              Redefining the <br />
              <span className="text-red-600">Soul of Work.</span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-medium">
              At <span className="font-black text-white italic">CoworkSeek</span>, we're not just providing desks; we're facilitating breakthroughs.
              We've curated an elite ecosystem where creators, startups, and enterprises converge to shape the future.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-600 shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-black italic uppercase mb-2">Unmatched Infrastructure</h4>
                  <p className="text-gray-400 font-medium leading-relaxed">Ergonomically designed layouts combined with ultra-high-speed fiber networks and professional meeting facilities.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-600 shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-black italic uppercase mb-2">Vibrant Communities</h4>
                  <p className="text-gray-400 font-medium leading-relaxed">Engage with a diverse network of innovators through exclusive member events and collaborative networking sessions.</p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-4 bg-red-600 hover:bg-white hover:text-red-600 transition-all text-white font-black uppercase text-xs tracking-[0.2em] px-10 py-5 rounded-2xl shadow-xl shadow-red-900/20"
            >
              Learn Our Story
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* RIGHT FLOATING IMAGES */}
          <div className="relative hidden lg:block h-[600px] w-full">
            <div className="absolute top-0 right-0 w-[450px] h-[350px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/5 rotate-[6deg] hover:rotate-0 transition-all duration-1000 z-10">
              <Image
                src={anna_nagr2}
                alt="Creative Hub"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[450px] h-[350px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/5 rotate-[-10deg] hover:rotate-0 transition-all duration-1000">
              <Image
                src={anna_nagar}
                alt="Collaborative Space"
                fill
                className="object-cover"
              />
            </div>

            {/* Decal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-2xl px-8 py-4 rounded-3xl border border-white/20 z-20 shadow-2xl">
              <p className="text-red-600 text-3xl font-black italic">EST. 2025</p>
              <p className="text-white text-[10px] uppercase tracking-widest font-black text-center mt-1">Leading the Work Revolution</p>
            </div>
          </div>
        </div>
      </section>
      {/* POPULAR LISTINGS SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[2px] bg-red-600" />
                <p className="text-red-600 uppercase tracking-widest text-xs font-black">
                  Editor's Choice
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 italic uppercase">
                Elite Workspaces <br />
                <span className="text-red-600">Near You</span>
              </h2>
            </div>
            <p className="text-gray-500 font-medium max-w-sm">
              Explore our most sought-after locations, vetted for premium amenities and prime connectivity.
            </p>
          </div>

          <OfficeSpace />
        </div>
      </section>

      {/* STEPS SECTION */}
      <section className="py-32 px-6 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 blur-[120px] -z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
              Launch your <br />
              <span className="text-red-600 underline decoration-red-600/30 underline-offset-8">Next Chapter</span>
            </h2>
            <p className="text-gray-400 font-medium tracking-widest uppercase text-xs">In 3 simple steps</p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16 items-start">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center relative group">
                {/* Connector Line (Desktop) */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-red-600/50 to-transparent z-0" />
                )}

                {/* Step Number */}
                <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-8xl font-black text-white/5 select-none transition-all duration-500 group-hover:text-red-600/10 group-hover:-translate-y-4">
                  {`0${index + 1}`}
                </span>

                {/* Icon Container */}
                <div className="relative z-10 mx-auto mb-10 w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-red-600 group-hover:border-red-600 group-hover:shadow-3xl group-hover:shadow-red-600/20 group-hover:rotate-6">
                  <step.icon className="text-red-600 group-hover:text-white w-10 h-10 transition-colors" />
                </div>

                <h4 className="text-2xl font-black italic uppercase mb-4 tracking-tight">{step.title}</h4>
                <p className="text-gray-400 font-medium leading-relaxed max-w-xs mx-auto text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-32 relative bg-gradient-to-r from-red-600 to-red-800 rounded-[3rem] px-8 md:px-16 py-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden shadow-3xl shadow-red-900/40">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            {/* Left Image & Stats */}
            <div className="relative group shrink-0">
              <div className="relative w-40 h-40 bg-white rounded-[2.5rem] p-2 rotate-[-4deg] group-hover:rotate-0 transition-transform duration-500 overflow-hidden shadow-2xl">
                <Image
                  src={team_member}
                  alt="Success Partner"
                  fill
                  className="object-cover rounded-[2rem]"
                />
              </div>
              {/* Mini Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gray-900 text-white p-4 rounded-2xl shadow-2xl border border-white/10 italic font-black text-sm">
                TOP HOST
              </div>
            </div>

            {/* Text Content */}
            <div className="text-white flex-1 text-center lg:text-left relative z-10">
              <h3 className="text-3xl md:text-5xl font-black italic uppercase leading-none mb-6">
                Own a space? <br />
                <span className="text-black/30">Let's scale it.</span>
              </h3>
              <p className="text-red-100 font-medium text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                List your workspace for free and gain access to India's fastest-growing professional community.
                We handle the leads; you focus on the hospitality.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="bg-black/20 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest border border-white/10">0% Commision</div>
                <div className="bg-black/20 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest border border-white/10">Instant Booking</div>
                <div className="bg-black/20 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest border border-white/10">Dedicated Support</div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="group relative bg-white text-gray-900 font-black uppercase text-xs tracking-[0.2em] px-12 py-6 rounded-2xl flex items-center gap-4 hover:bg-black hover:text-white transition-all shadow-2xl active:scale-95 shrink-0"
            >
              List Your Space
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS & BLOGS */}
      <div className="bg-gray-50/50">
        <ReviewForm />
        <BlogsSection />
      </div>
    </>
  );
}
