import FlightCard from "@/components/flight-card";
import NewlineText from "@/components/newline-text";
import { CitySuggestionResponse } from "@/prompts/city-suggestion";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FlightSelector() {
  const router = useRouter();
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const [originAirport, setOriginAirport] = useState<string>();
  const [destinationAirport, setDestinationAirport] = useState<string>();

  const [startFlights, setStartFlights] = useState<any[]>([]);
  const [endFlights, setEndFlights] = useState<any[]>([]);

  const [selectedStart, setSelectedStart] = useState<number>();
  const [selectedEnd, setSelectedEnd] = useState<number>();

  useEffect(() => {
    const savedStartDate = localStorage.getItem("startDate");
    const savedEndDate = localStorage.getItem("endDate");
    const savedOriginAirport = localStorage.getItem("originAirport");
    const savedDestinationAirport = localStorage.getItem("destinationAirport");

    if (
      !savedStartDate ||
      !savedEndDate ||
      !savedDestinationAirport ||
      !savedOriginAirport
    ) {
      router.push("/onboarding/landing");
      return;
    }

    setStartDate(savedStartDate);
    setEndDate(savedEndDate);
    setOriginAirport(savedOriginAirport);
    setDestinationAirport(savedDestinationAirport);

    const params = new URLSearchParams();
    params.set("date", savedStartDate);
    params.set("origin", savedOriginAirport);
    params.set("destination", savedDestinationAirport);

    fetch(
      `${
        process.env.NEXT_PUBLIC_FLIGHT_ENGINE_URL
      }/flights?${params.toString()}`
    )
      .then((res) => res.json())
      .then((json) => {
        setStartFlights(json);
      });

    // return flight
    params.set("date", savedEndDate);
    params.set("origin", savedDestinationAirport);
    params.set("destination", savedOriginAirport);

    fetch(
      `${
        process.env.NEXT_PUBLIC_FLIGHT_ENGINE_URL
      }/flights?${params.toString()}`
    )
      .then((res) => res.json())
      .then((json) => {
        setEndFlights(json);
      });
  }, []);

  useEffect(() => {
    if (
      typeof selectedStart !== "undefined" &&
      typeof selectedEnd !== "undefined"
    ) {
      localStorage.setItem(
        "startFlight",
        JSON.stringify(startFlights[selectedStart])
      );
      localStorage.setItem(
        "endFlight",
        JSON.stringify(endFlights[selectedEnd])
      );
    }
  }, [selectedStart, selectedEnd]);

  return (
    <div>
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-neutral"></div>
      <div className="absolute w-full text-center top-6 mb-8 text-sky font-bold text-3xl">
        travyl
      </div>
      <main className="w-full h-full overflow-scroll text-center mt-28">
        <h1 className="font-bold text-5xl">available flights</h1>
        <section className="mt-10 mb-24 flex flex-col items-center min-h-min justify-center px-6">
          <h1 className="font-medium text-2xl mb-4">departure</h1>
          {startFlights.map((flight, idx) => (
            <FlightCard
              key={idx}
              details={flight}
              selected={idx === selectedStart}
              onClick={() => setSelectedStart(idx)}
            />
          ))}
          <h1 className="font-medium text-2xl mb-4">return</h1>
          {endFlights.map((flight, idx) => (
            <FlightCard
              key={idx}
              details={flight}
              selected={idx === selectedEnd}
              onClick={() => setSelectedEnd(idx)}
            />
          ))}
        </section>

        <div className="fixed bottom-9 w-full flex items-center justify-center">
          <div className="w-3/4 flex items-center justify-center">
            <Link
              href="/onboarding/final-step"
              className="py-3 block flex-1 text-center font-medium text-xl bg-sky text-white rounded-full"
            >
              book tickets on AA.com &rarr;
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
