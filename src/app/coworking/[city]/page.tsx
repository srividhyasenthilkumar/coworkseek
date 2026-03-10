"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { fetchApi } from "@/lib/api";
import CityTemplate from "@/components/CityTemplate";

export default function DynamicCityPage() {
  const params = useParams();
  const city = params.city as string;
  const [spaces, setSpaces] = useState<any[]>([]);
  const [cityDetails, setCityDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (city) {
      setLoading(true);
      fetchApi(`/spaces/?city=${city}`)
        .then((data) => setSpaces(data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));

      fetchApi(`/cities/`)
        .then((data: any[]) => {
          const matchedCity = data.find(c => c.name.toLowerCase() === city.toLowerCase());
          if (matchedCity) {
            setCityDetails(matchedCity);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [city]);

  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  const cityImage = cityDetails?.image || (spaces.length > 0 ? spaces[0].city_image : `/assets/places/${city}.jpg`);

  const cityFallbacks: any = {
    chennai: { tagline: "The Gateway to South India", desc: "Experience the perfect blend of traditional values and modern workspace innovation in the cultural capital." },
    hyderabad: { tagline: "The City of Pearls", desc: "Network in the heart of India's tech revolution, where history meets high-end global infrastructure." },
    noida: { tagline: "The Corporate Hub of NCR", desc: "Strategically located for enterprise growth, Noida offers high-performance hubs for elite global teams." },
    coimbatore: { tagline: "The Manchester of South India", desc: "Vibrant entrepreneurship meets serene surroundings in India's fastest-growing business landscape." },
    bangalore: { tagline: "The Silicon Valley of India", desc: "Innovate alongside the world's brightest minds in the global capital of technology and startups." },
    mumbai: { tagline: "The City of Dreams", desc: "Claim your territory in the financial heartbeat of India, where ambition and success know no limits." },
    delhi: { tagline: "The Power Center of India", desc: "Establish your presence in the capital's most prestigious districts, curated for influence and dominance." },
    pune: { tagline: "The Oxford of the East", desc: "A thriving hub for education and IT, Pune offers a dynamic environment for collaborative achievement." }
  };

  return (
    <CityTemplate
      cityName={cityName}
      cityImage={cityImage}
      tagline={cityDetails?.tagline || cityFallbacks[city.toLowerCase()]?.tagline}
      description={cityDetails?.description || cityFallbacks[city.toLowerCase()]?.desc}
      spaces={spaces}
      loading={loading}
    />
  );
}
