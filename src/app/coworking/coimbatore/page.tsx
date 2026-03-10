"use client";
import { coimbatoreSpaces } from "../../../data/coimbatorespace";
import CityTemplate from "@/components/CityTemplate";

export default function CoimbatorePage() {
  return (
    <CityTemplate
      cityName="Coimbatore"
      cityImage="/assets/places/coimbatore.jpg"
      tagline="The Manchester of South India"
      description="Vibrant entrepreneurship meets serene surroundings in India's fastest-growing business landscape."
      spaces={coimbatoreSpaces}
    />
  );
}
