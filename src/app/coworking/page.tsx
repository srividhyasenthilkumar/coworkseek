import { cities } from "../../data/cities";
import CityCard from "../../components/CityCard";

export default function LocationsPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 mt-20">
      <h1 className="text-3xl font-bold text-black text-center">
        Coworking Spaces Across India
      </h1>
      <p className="text-gray-600 text-center mt-3">
        Choose your city and explore flexible coworking spaces
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {cities.map((city) => (
          <CityCard key={city.slug} city={city} />
        ))}
      </div>
    </section>
  );
}
