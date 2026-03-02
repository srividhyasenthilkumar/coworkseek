import { spaces } from "../../../data/spaces";
import SpaceCard from "../../../components/SpaceCard";
import LocationFilters from "../../../components/LocationFilters";

export default function CityPage({ params }: any) {
  const citySpaces = spaces.filter((space) => space.city === params.city);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-3">
        Home / Coworking / {params.city}
      </p>

      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-2xl font-bold text-black">
          Coworking Space in {params.city}
        </h1>
      </div>

      <LocationFilters />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {citySpaces.map((space, i) => (
          <SpaceCard key={i} space={space} />
        ))}
      </div>
    </section>
  );
}
