"use client";
import { puneSpaces } from "../../../data/punespace";
import CityTemplate from "@/components/CityTemplate";

export default function PunePage() {
  return (
    <CityTemplate
      cityName="Pune"
      cityImage="/assets/places/pune.jpg"
      tagline="The Oxford of the East"
      description="A thriving hub for education and IT, Pune offers a dynamic environment for collaborative achievement."
      spaces={puneSpaces}
    />
  );
}
