"use client";
import { noidaSpaces } from "../../../data/noidaspace";
import CityTemplate from "@/components/CityTemplate";

export default function NoidaPage() {
  return (
    <CityTemplate
      cityName="Noida"
      cityImage="/assets/places/noida.jpg"
      tagline="The Corporate Hub of NCR"
      description="Strategically located for enterprise growth, Noida offers high-performance hubs for elite global teams."
      spaces={noidaSpaces}
    />
  );
}
