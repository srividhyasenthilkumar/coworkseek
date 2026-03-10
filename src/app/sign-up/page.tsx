"use client";

import Image from "next/image";
import image from "../../assets/home/casually-dressed-businessmen-and-businesswomen-hav-2026-01-05-06-34-12-utc.jpg";
import logo from "../../assets/logo.webp";
import banner from "../../assets/home/office-modern-loft-2026-01-05-06-03-15-utc.jpg";
import Link from "next/link";
import { useState } from "react";
import { fetchApi } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

export default function ListingForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { login: authLogin } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
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
      setError(err.message || "An error occurred");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className="min-h-screen flex items-center justify-center py-30 md:py-3 bg-gray-100 px-6">
      {/* <Link href="/">
        <Image
          src={banner}
          alt="Coworking space"
          fill
          priority
          className="object-cover "
        />
      </Link>
      <div className="absolute inset-0 bg-black/50 " /> */}
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* LEFT – FORM */}
        <div className="p-10 md:p-14 flex flex-col justify-center z-10 bg-white">
          <div className="flex items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="text-gray-500 mt-2">
                {isLogin
                  ? "Login to manage your coworking listings"
                  : "Join us to find or list the best coworking spaces"}
              </p>
            </div>
            <div className="relative w-28 h-14">
              <Image
                src={logo}
                alt="Coworking Seek Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}
            {/* USERNAME */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="johndoe"
                required
                className="
                  w-full px-4 py-3 border rounded-xl
                  focus:outline-none focus:ring-2 focus:ring-red-500
                  transition
                "
              />
            </div>

            {/* EMAIL (Only for Sign-up) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@coworkseek.com"
                  required
                  className="
                    w-full px-4 py-3 border rounded-xl
                    focus:outline-none focus:ring-2 focus:ring-red-500
                    transition
                  "
                />
              </div>
            )}

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="
                  w-full px-4 py-3 border rounded-xl
                  focus:outline-none focus:ring-2 focus:ring-red-500
                  transition
                "
              />
            </div>

            {/* OPTIONS */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-red-500" />
                Remember me
              </label>

              {isLogin && (
                <span className="text-red-500 font-semibold hover:underline cursor-pointer">
                  Forgot password?
                </span>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full bg-red-500 text-white font-bold py-3 rounded-xl
                hover:bg-red-600 hover:scale-[1.02]
                active:scale-95
                transition-all duration-300
              "
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          {/* EXTRA */}
          <p className="text-center text-sm text-gray-500 mt-8">
            {isLogin ? "Don’t have an account? " : "Already have an account? "}
            <span
              className="text-red-500 font-semibold cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Register" : "Login"}
            </span>
          </p>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="relative hidden md:block">
          <Image
            src={image}
            alt="Coworking Space"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute bottom-10 left-10 right-10 text-white">
            {/* <h2 className="text-2xl font-bold">Manage Your Coworking Spaces</h2>
            <p className="text-gray-200 mt-2">
              Add, update and track your listings in one place
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
