"use client";
import { chennaiSpaces } from "../../../data/chennaiSpaces";
import CityTemplate from "@/components/CityTemplate";

export default function ChennaiPage() {
  return (
    <CityTemplate
      cityName="Chennai"
      cityImage="/assets/places/chennai.jpg"
      tagline="The Gateway to South India"
      description="Experience the perfect blend of traditional values and modern workspace innovation in the cultural capital."
      spaces={chennaiSpaces}
    />
  );
}
