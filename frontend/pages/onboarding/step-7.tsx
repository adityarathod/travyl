import CityCard from "@/components/city-card";
import { CitySuggestionResponse } from "@/prompts/city-suggestion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CitySelector() {
  const [loadedCities, setLoadedCities] = useState<CitySuggestionResponse[]>(
    []
  );
  const [selectedCity, setSelectedCity] = useState<number>();
  const router = useRouter();
  useEffect(() => {
    const savedSuggestions = localStorage.getItem("citySuggestions");
    if (!savedSuggestions) {
      router.push("/onboarding/landing");
      return;
    }
    setLoadedCities(JSON.parse(savedSuggestions));
  }, []);

  useEffect(() => {
    if (typeof selectedCity === "undefined") return;
    localStorage.setItem(
      "destinationAirport",
      loadedCities[selectedCity].airportCode
    );
    localStorage.setItem("location", loadedCities[selectedCity].city);
  }, [selectedCity]);

  return (
    <div>
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-neutral"></div>
      <div className="absolute w-full text-center top-6 mb-8 text-sky font-bold text-3xl">
        travyl
      </div>
      <main className="w-full h-full overflow-scroll text-center mt-36">
        <h1 className="font-bold text-5xl">curated picks</h1>
        <section className="mt-10 flex flex-col items-center min-h-min justify-center px-6">
          {loadedCities.map((city, idx) => (
            <CityCard
              details={city}
              key={idx}
              onClick={() => {
                if (idx === selectedCity) {
                  setSelectedCity(undefined);
                } else {
                  setSelectedCity(idx);
                }
              }}
              selected={idx === selectedCity}
            />
          ))}
        </section>
      </main>
      {typeof selectedCity !== "undefined" && (
        <div className="fixed bottom-9 w-full flex items-center justify-center">
          <div className="w-3/4 flex items-center justify-center">
            <Link
              href="/onboarding/step-8"
              className="py-3 block flex-1 text-center font-medium text-xl bg-sky text-white rounded-full"
            >
              generate itinerary &rarr;
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
