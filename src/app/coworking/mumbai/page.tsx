"use client";
import { mumbaiSpaces } from "../../../data/mumbaispace";
import CityTemplate from "@/components/CityTemplate";

export default function MumbaiPage() {
  return (
    <CityTemplate
      cityName="Mumbai"
      cityImage="/assets/places/mumbai.jpg"
      tagline="The City of Dreams"
      description="Claim your territory in the financial heartbeat of India, where ambition and success know no limits."
      spaces={mumbaiSpaces}
    />
  );
}
