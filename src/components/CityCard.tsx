import Link from "next/link";
import Image from "next/image";

export default function CityCard({ city }: any) {
  return (
    <>
      <Link
        href={`/coworking/${city.slug}`}
        className="group border rounded-lg overflow-hidden bg-white hover:border-red-600 transition"
      >
        <Image
          src={city.image}
          alt={city.name}
          width={400}
          height={260}
          className="h-50 w-full object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold group-hover:text-red-600">
            {city.name}
          </h3>
        </div>
      </Link>
    </>
  );
}
