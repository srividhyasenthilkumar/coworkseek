"use client";
import { delhiSpaces } from "../../../data/delhispace";
import CityTemplate from "@/components/CityTemplate";

export default function DelhiPage() {
  return (
    <CityTemplate
      cityName="Delhi"
      cityImage="/assets/places/delhi.jpg"
      tagline="The Power Center of India"
      description="Establish your presence in the capital's most prestigious districts, curated for influence and dominance."
      spaces={delhiSpaces}
    />
  );
}
