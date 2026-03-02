import Image from "next/image";

export default function SpaceCard({ space }: any) {
  return (
    <div className="bg-white border rounded-lg overflow-hidden relative">
      {space.tag && (
        <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded">
          {space.tag}
        </span>
      )}

      <Image
        src={space.image}
        alt={space.name}
        width={400}
        height={250}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{space.name}</h3>
        <p className="text-sm text-gray-600">{space.area}</p>

        <div className="flex items-center justify-between mt-3">
          <span className="font-bold">{space.price}</span>
          <button className="bg-red-600 text-white px-4 py-2 text-sm rounded hover:bg-black transition">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}
