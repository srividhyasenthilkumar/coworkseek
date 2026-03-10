"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchApi, BASE_URL } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import logo from "../../assets/logo.webp"

export default function ListingForm() {
  const { user } = useAuth();
  const router = useRouter();
  const [cities, setCities] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    area: "",
    price: "",
    image: null as File | null,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApi("/cities/")
      .then((data) => setCities(data))
      .catch((err) => console.error(err));
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-semibold mb-4">Please log in to list a space.</p>
          <button
            onClick={() => router.push("/sign-up")}
            className="bg-red-500 text-white px-6 py-2 rounded-lg"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.image) {
      alert("Please upload an image.");
      return;
    }

    setLoading(true);
    const data = new FormData();
    data.append("name", formData.name);
    data.append("city", formData.city);
    data.append("area", formData.area);
    data.append("price", formData.price);
    data.append("image", formData.image);

    try {
      // Use raw fetch for FormData as fetchApi might be set for JSON
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/spaces/`, {
        method: "POST",
        headers: {
          "Authorization": `Token ${token}`,
        },
        body: data,
      });

      if (!response.ok) throw new Error("Failed to create listing");

      alert("Listing created successfully!");
      router.push("/profile");
    } catch (err: any) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
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
              <h1 className="text-3xl font-bold text-gray-800">List Your Space</h1>
              <p className="text-gray-500 mt-2">
                Share your workspace with the community
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

          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            {/* NAME */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Space Name
              </label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Creative Hub"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>

            {/* CITY & AREA */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">City</label>
                <select
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.id}>{city.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Area</label>
                <input
                  required
                  type="text"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  placeholder="e.g. T Nagar"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>
            </div>

            {/* PRICE */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Price (Monthly ₹)
              </label>
              <input
                required
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="e.g. 5000"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>

            {/* IMAGE */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Space Image
              </label>
              <input
                required
                type="file"
                accept="image/*"
                onChange={(e) => setFormData({ ...formData, image: e.target.files?.[0] || null })}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full bg-red-500 text-white font-bold py-3 rounded-xl
                hover:bg-red-600 transition disabled:bg-gray-400 mt-4
              "
            >
              {loading ? "Creating..." : "List Space Now"}
            </button>
          </form>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-red-600/10 z-10" />
          {/* Use a placeholder or different image since I don't have the original import now */}
          <div className="h-full w-full bg-gray-200 flex items-center justify-center">
            <Image
              src={logo}
              alt="placeholder"
              width={200}
              height={100}
              className="opacity-50"
            />
          </div>

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
