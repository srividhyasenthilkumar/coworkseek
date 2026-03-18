import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Shield, Zap, Users, ArrowRight, Target, Award } from "lucide-react";
import banner from "../../assets/home/3d-rendering-business-meeting-working-room-office-building-1-scaled.webp";
import team_img from "../../assets/home/modern-office-teamwork-co-working-space.webp";

export const metadata = {
    title: "About Us | CoworkSeek",
    description: "Discover the vision and mission behind India's elite coworking network.",
};

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* HERO SECTION */}
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <Image
                    src={banner}
                    alt="Mission Vision"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-white">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 bg-red-600/10 backdrop-blur-md border border-red-500/30 px-4 py-2 rounded-full mb-8">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <p className="uppercase tracking-[0.2em] text-[10px] font-black">
                                Redefining Coworking
                            </p>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] italic uppercase tracking-tight">
                            Where <span className="text-red-600">Ambition</span> <br />
                            Finds Its Home.
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed font-medium">
                            We are more than a listing platform. We are the architects of a new work culture—one where excellence is the standard and collaboration is the catalyst.
                        </p>
                    </div>
                </div>
            </section>

            {/* STATS STRIP */}
            <section className="bg-gray-950 py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {[
                        { label: "Verified Spaces", val: "500+" },
                        { label: "Active Members", val: "15k+" },
                        { label: "Major Cities", val: "12" },
                        { label: "Growth Rate", val: "200%" },
                    ].map(stat => (
                        <div key={stat.label}>
                            <p className="text-4xl md:text-5xl font-black text-white italic italic mb-2 uppercase">{stat.val}</p>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* THE MISSION */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="relative">
                        <div className="relative h-[600px] w-full rounded-[4rem] overflow-hidden shadow-3xl">
                            <Image
                                src={team_img}
                                alt="Our Team"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* floating decal */}
                        <div className="absolute -bottom-10 -right-10 hidden xl:block bg-red-600 text-white p-12 rounded-[3rem] shadow-3xl rotate-[-5deg]">
                            <Target size={40} className="mb-4" />
                            <h4 className="text-2xl font-black italic uppercase">The Goal</h4>
                            <p className="text-red-100 text-sm font-medium">Zero friction between <br /> you and your best work.</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-[2px] bg-red-600" />
                            <p className="text-red-600 uppercase tracking-widest text-xs font-black">
                                Our DNA
                            </p>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 italic uppercase leading-tight">
                            Beyond the <br />
                            <span className="text-red-600">Standard Desk.</span>
                        </h2>
                        <div className="space-y-8 text-gray-600 font-medium">
                            <p className="leading-relaxed text-lg italic border-l-4 border-red-600 pl-6">
                                "In an era of nomadic work, we saw a gap: many spaces had desks, but few had soul. CoworkSeek was born to bridge that gap."
                            </p>
                            <p className="leading-relaxed">
                                Our journey began with a simple observation: the environment in which you work is as critical as the work itself.
                                We spent years scouting India's tech hubs and creative districts to build a network that prioritizes three pillars:
                                Infrastructure, Community, and Convenience.
                            </p>
                            <p className="leading-relaxed">
                                Today, CoworkSeek serves thousands of professionals—from solo developers to Fortune 500 remote wings—providing
                                vetted, premium workspaces that inspire breakthrough performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE VALUES */}
            <section className="py-32 bg-gray-50 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-gray-900 mb-4">
                            The Values That <br />
                            <span className="text-red-600">Drive Our Hub</span>
                        </h2>
                        <p className="text-gray-500 font-bold tracking-[0.2em] uppercase text-xs">Integrity at the core of collaboration</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Elite Standard", desc: "Every space on our platform is personally vetted for high-speed fiber, ergonomics, and professional vibes.", icon: Award },
                            { title: "Radical Transparency", desc: "What you see is what you get. No hidden fees, no misleading photos—only verified high-grade listings.", icon: Shield },
                            { title: "Member Obsession", desc: "Our support team isn't just a helpdesk; we're your success partners, ensuring your workflow remains uninterrupted.", icon: Zap },
                        ].map(val => (
                            <div key={val.title} className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 -mr-16 -mt-16 rounded-full group-hover:scale-[3] transition-transform duration-700" />
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                                        <val.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black italic uppercase text-gray-900 mb-4">{val.title}</h3>
                                    <p className="text-gray-500 leading-relaxed font-medium">{val.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto bg-gray-950 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-3xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-red-600/10 blur-[100px]" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tight mb-8">
                            Ready to Level Up <br />
                            <span className="text-red-600">Your Workflow?</span>
                        </h2>
                        <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto">
                            Join the thousands of innovators who have transitioned to the CoworkSeek lifestyle. Your next breakthrough starts with a single click.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/coworking" className="w-full sm:w-auto bg-red-600 hover:bg-white hover:text-red-600 text-white px-12 py-5 rounded-2xl font-black uppercase text-sm tracking-widest transition-all shadow-xl shadow-red-900/20 active:scale-95">
                                Browse Spaces
                            </Link>
                            <Link href="/contact-us" className="w-full sm:w-auto border border-white/20 hover:bg-white hover:text-black text-white px-12 py-5 rounded-2xl font-black uppercase text-sm tracking-widest transition-all active:scale-95">
                                Connect Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
