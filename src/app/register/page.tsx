"use client";

import Image from "next/image";
import image from "../../assets/home/office-modern-loft-2026-01-05-06-03-15-utc.jpg";
import logo from "../../assets/logo.webp";
import Link from "next/link";
import { useState } from "react";
import { fetchApi } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import { AlertCircle, Mail, Lock, User as UserIcon, ArrowRight, ShieldCheck } from "lucide-react";

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [serverError, setServerError] = useState("");
    const { login: authLogin } = useAuth();
    const [loading, setLoading] = useState(false);

    const validateEmail = (email: string) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setServerError("");
        setErrors({});

        const newErrors: { [key: string]: string } = {};
        if (!formData.username) newErrors.username = "Username is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 8) {
            newErrors.password = "Minimum 8 characters";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);
        try {
            const data = await fetchApi("/users/register/", {
                method: "POST",
                body: JSON.stringify(formData),
            });
            authLogin(data);
        } catch (err: any) {
            setServerError(err.message || "An account with this username or email already exists.");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center py-20 bg-[#F9FAFB] px-6">
            <div className="w-full max-w-6xl bg-white rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.08)] overflow-hidden grid md:grid-cols-2 border border-gray-100 italic">
                {/* LEFT – IMAGE */}
                <div className="relative hidden md:block group overflow-hidden order-last md:order-first">
                    <Image
                        src={image}
                        alt="Premium Space"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-bl from-black/90 via-black/30 to-transparent" />
                    <div className="absolute bottom-20 left-16 right-16 text-white not-italic">
                        <div className="bg-red-600 px-5 py-2 rounded-2xl inline-block text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-2xl">
                            Future Ready
                        </div>
                        <h2 className="text-5xl font-black italic uppercase leading-tight tracking-tighter mb-6">
                            Join the <span className="text-red-600">Revolution.</span>
                        </h2>
                        <p className="text-gray-300 font-medium text-xl leading-relaxed max-w-md">
                            Start your journey with CoworkSeek today and experience the future of work.
                        </p>
                    </div>
                </div>

                {/* RIGHT – FORM */}
                <div className="p-8 md:p-20 flex flex-col justify-center bg-white not-italic">
                    <div className="mb-12">
                        <Link href="/" className="inline-block mb-10">
                            <div className="relative w-32 h-16 transition-transform hover:scale-105 duration-300">
                                <Image src={logo} alt="CoworkSeek Logo" fill priority className="object-contain" />
                            </div>
                        </Link>
                        <h1 className="text-5xl font-black text-gray-900 tracking-tight italic uppercase mb-4">
                            Begin <span className="text-red-600">Now.</span>
                        </h1>
                        <p className="text-gray-500 text-lg font-medium">
                            Join our global community of innovators.
                        </p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {serverError && (
                            <div className="bg-red-50 border border-red-100 text-red-600 px-6 py-4 rounded-2xl flex items-center gap-3 animate-shake">
                                <AlertCircle size={20} />
                                <p className="text-sm font-bold">{serverError}</p>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">
                                Username
                            </label>
                            <div className="relative">
                                <UserIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="e.g. innovator_01"
                                    className={`
                    w-full pl-14 pr-6 py-5 bg-gray-50 border-2 rounded-2xl text-gray-900 font-bold
                    focus:outline-none focus:ring-4 focus:ring-red-100 transition-all duration-300
                    ${errors.username ? 'border-red-400 bg-red-50' : 'border-transparent hover:border-gray-200 focus:border-red-600 focus:bg-white'}
                  `}
                                />
                            </div>
                            {errors.username && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest ml-4">{errors.username}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="contact@innovate.com"
                                    className={`
                    w-full pl-14 pr-6 py-5 bg-gray-50 border-2 rounded-2xl text-gray-900 font-bold
                    focus:outline-none focus:ring-4 focus:ring-red-100 transition-all duration-300
                    ${errors.email ? 'border-red-400 bg-red-50' : 'border-transparent hover:border-gray-200 focus:border-red-600 focus:bg-white'}
                  `}
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest ml-4">{errors.email}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">
                                Secure Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className={`
                    w-full pl-14 pr-6 py-5 bg-gray-50 border-2 rounded-2xl text-gray-900 font-bold
                    focus:outline-none focus:ring-4 focus:ring-red-100 transition-all duration-300
                    ${errors.password ? 'border-red-400 bg-red-50' : 'border-transparent hover:border-gray-200 focus:border-red-600 focus:bg-white'}
                  `}
                                />
                            </div>
                            {errors.password && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest ml-4">{errors.password}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`
                w-full bg-gray-950 text-white font-black text-xs uppercase tracking-[0.4em] py-6 rounded-2xl
                hover:bg-red-600 hover:shadow-2xl hover:shadow-red-900/40 active:scale-[0.98] mt-4
                transition-all duration-500 flex items-center justify-center gap-4
                ${loading ? 'opacity-70 cursor-not-allowed' : ''}
              `}
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-3 border-white/20 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <span>Create Account</span>
                                    <ArrowRight size={16} />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-12 text-center border-t border-gray-100 pt-8">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4">
                            Already have an account?
                        </p>
                        <Link href="/login" className="inline-flex items-center gap-2 group">
                            <span className="text-sm font-black uppercase tracking-widest text-gray-950 group-hover:text-red-600 transition-colors">Sign In Instead</span>
                            <ArrowRight size={14} className="text-red-600 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
