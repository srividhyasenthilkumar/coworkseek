"use client";
import { kolkataSpaces } from "../../../data/kolkata";
import CityTemplate from "@/components/CityTemplate";

export default function KolkataPage() {
  return (
    <CityTemplate
      cityName="Kolkata"
      cityImage="/assets/places/kolkata.jpg"
      tagline="The Cultural Capital"
      description="Discover high-performance workspaces where heritage meets historical innovation and modern growth."
      spaces={kolkataSpaces}
    />
  );
}
