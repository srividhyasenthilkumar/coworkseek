export default function LocationFilters() {
  const locations = [
    "HSR Layout",
    "Koramangala",
    "MG Road",
    "Indiranagar",
    "Whitefield",
  ];

  return (
    <div className="flex gap-2 flex-wrap mt-6">
      {locations.map((loc) => (
        <button
          key={loc}
          className="border px-4 py-2 rounded text-sm hover:bg-red-600 hover:text-white transition"
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
