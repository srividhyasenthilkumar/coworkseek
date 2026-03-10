"use client";
import { hyderabadSpaces } from "../../../data/hyderabad";
import CityTemplate from "@/components/CityTemplate";

export default function HyderabadPage() {
  return (
    <CityTemplate
      cityName="Hyderabad"
      cityImage="/assets/places/hyderabad.jpg"
      tagline="The City of Pearls"
      description="Network in the heart of India's tech revolution, where history meets high-end global infrastructure."
      spaces={hyderabadSpaces}
    />
  );
}
