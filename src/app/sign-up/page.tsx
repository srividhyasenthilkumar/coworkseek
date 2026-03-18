"use client";

import Image from "next/image";
import image from "../../assets/home/casually-dressed-businessmen-and-businesswomen-hav-2026-01-05-06-34-12-utc.jpg";
import logo from "../../assets/logo.webp";
import banner from "../../assets/home/office-modern-loft-2026-01-05-06-03-15-utc.jpg";
import Link from "next/link";
import { useState } from "react";
import { fetchApi } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function ListingForm() {
  const [isLogin, setIsLogin] = useState(true);
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

    // Client-side validation
    const newErrors: { [key: string]: string } = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!isLogin && !formData.email) {
      newErrors.email = "Email is required";
    } else if (!isLogin && !validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) newErrors.password = "Password is required";
    else if (!isLogin && formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      if (isLogin) {
        const data = await fetchApi("/users/login/", {
          method: "POST",
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
          }),
        });
        authLogin(data);
      } else {
        const data = await fetchApi("/users/register/", {
          method: "POST",
          body: JSON.stringify(formData),
        });
        authLogin(data);
      }
    } catch (err: any) {
      if (err.message && err.message.includes("Credentials")) {
        setServerError("Invalid username or password");
      } else {
        setServerError(err.message || "An error occurred. Please try again.");
      }
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
      <div className="w-full max-w-5xl bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden grid md:grid-cols-2 border border-gray-100">
        {/* LEFT – FORM */}
        <div className="p-8 md:p-16 flex flex-col justify-center bg-white relative">
          <div className="mb-10 text-center md:text-left">
            <div className="relative w-32 h-16 mx-auto md:mx-0 mb-6 transition-transform hover:scale-105 duration-300">
              <Image
                src={logo}
                alt="Coworking Seek Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
              {isLogin ? "Welcome Back" : "Start Your Journey"}
            </h1>
            <p className="text-gray-500 mt-3 text-lg">
              {isLogin
                ? "Access your dashboard and bookings"
                : "Join the elite network of coworking spaces"}
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {serverError && (
              <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-2xl flex items-center gap-3 animate-shake">
                <AlertCircle size={20} />
                <p className="text-sm font-semibold">{serverError}</p>
              </div>
            )}

            {/* USERNAME */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="johndoe"
                className={`
                  w-full px-5 py-4 border-2 rounded-2xl text-gray-900 font-medium
                  focus:outline-none focus:ring-4 focus:ring-red-100
                  transition-all duration-300
                  ${errors.username ? 'border-red-400 bg-red-50' : 'border-gray-100 hover:border-gray-200 focus:border-red-500'}
                `}
              />
              {errors.username && <p className="text-red-500 text-xs font-bold ml-1">{errors.username}</p>}
            </div>

            {/* EMAIL (Only for Sign-up) */}
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@coworkseek.com"
                  className={`
                    w-full px-5 py-4 border-2 rounded-2xl text-gray-900 font-medium
                    focus:outline-none focus:ring-4 focus:ring-red-100
                    transition-all duration-300
                    ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-100 hover:border-gray-200 focus:border-red-500'}
                  `}
                />
                {errors.email && <p className="text-red-500 text-xs font-bold ml-1">{errors.email}</p>}
              </div>
            )}

            {/* PASSWORD */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`
                  w-full px-5 py-4 border-2 rounded-2xl text-gray-900 font-medium
                  focus:outline-none focus:ring-4 focus:ring-red-100
                  transition-all duration-300
                  ${errors.password ? 'border-red-400 bg-red-50' : 'border-gray-100 hover:border-gray-200 focus:border-red-500'}
                `}
              />
              {errors.password && <p className="text-red-500 text-xs font-bold ml-1">{errors.password}</p>}
            </div>

            {/* OPTIONS */}
            <div className="flex items-center justify-between text-sm px-1">
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-gray-200 accent-red-500 focus:ring-red-500 transition-all cursor-pointer" />
                <span className="font-semibold group-hover:text-gray-900 transition-colors">Remember me</span>
              </label>

              {isLogin && (
                <span className="text-red-500 font-bold hover:text-red-600 transition-colors cursor-pointer tracking-tight">
                  Forgot?
                </span>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className={`
                w-full bg-gray-950 text-white font-black text-xs uppercase tracking-[0.3em] py-5 rounded-2xl
                hover:bg-red-600 hover:shadow-2xl hover:shadow-red-900/40
                active:scale-[0.98]
                transition-all duration-500
                flex items-center justify-center gap-3
                ${loading ? 'opacity-70 cursor-not-allowed' : ''}
              `}
            >
              {loading ? (
                <div className="w-5 h-5 border-3 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                isLogin ? "Login Now" : "Create Account"
              )}
            </button>
          </form>

          {/* EXTRA */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 font-medium">
              {isLogin ? "New to CoworkSeek?" : "Already a member?"}
            </p>
            <button
              type="button"
              className="text-red-500 font-black text-sm uppercase tracking-widest mt-2 hover:text-red-600 transition-colors"
              onClick={() => {
                setIsLogin(!isLogin);
                setErrors({});
                setServerError("");
              }}
            >
              {isLogin ? "Register Account" : "Login Account"}
            </button>
          </div>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="relative hidden md:block group overflow-hidden">
          <Image
            src={image}
            alt="Coworking Space"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-16 left-12 right-12 text-white">
            <div className="bg-red-600/90 backdrop-blur-md px-4 py-1.5 rounded-full inline-block text-[10px] font-black uppercase tracking-widest mb-6">
              Premium Spaces
            </div>
            <h2 className="text-4xl font-black leading-tight mb-4">
              Work from anywhere,<br />Achieve anything at <span className="text-red-500">CoworkSeek.</span>
            </h2>
            <p className="text-gray-300 font-medium text-lg leading-relaxed">
              Experience the future of workspace with premium amenities and a global community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
