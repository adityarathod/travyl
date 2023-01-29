import NewlineText from "@/components/newline-text";
import { CitySuggestionResponse } from "@/prompts/city-suggestion";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ItinerarySelector() {
  const router = useRouter();
  const [itinerary, setItinerary] = useState<{ itinerary: string }>();
  const [numDays, setNumDays] = useState<string>();
  const [groupSize, setGroupSize] = useState<string>();
  const [originAirport, setOriginAirport] = useState<string>();
  const [destinationAirport, setDestinationAirport] = useState<string>();

  useEffect(() => {
    const savedItinerary = localStorage.getItem("itinerary");
    const savedNumDays = localStorage.getItem("numDays");
    const savedGroupSize = localStorage.getItem("groupSize");
    const savedOriginAirport = localStorage.getItem("originAirport");
    const savedDestinationAirport = localStorage.getItem("destinationAirport");

    if (
      !savedItinerary ||
      !savedGroupSize ||
      !savedNumDays ||
      !savedDestinationAirport ||
      !savedOriginAirport
    ) {
      router.push("/onboarding/landing");
      return;
    }

    setItinerary(JSON.parse(savedItinerary));
    setNumDays(savedNumDays);
    setGroupSize(savedGroupSize);
    setOriginAirport(savedOriginAirport);
    setDestinationAirport(savedDestinationAirport);
  }, []);

  return (
    <div>
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-neutral"></div>
      <div className="absolute w-full text-center top-6 mb-8 text-sky font-bold text-3xl">
        travyl
      </div>
      <main className="w-full h-full overflow-scroll text-center mt-28">
        <h1 className="font-bold text-5xl">itinerary</h1>
        <section className="mt-10 mb-24 flex flex-col items-center min-h-min justify-center px-6">
          <div
            className={classNames(
              "mb-4",
              "rounded-lg",
              "shadow-sm",
              "hover:shadow-md",
              "transition-shadow",
              "duration-300",
              "border",
              "mx-auto",
              "mt-0",
              "max-w-md",
              "py-3",
              "px-4",
              "text-left",
              "w-full"
            )}
          >
            <h2 className="text-xl font-medium">
              {originAirport} to {destinationAirport}
            </h2>
            <h3 className="text-lg ">
              {numDays} days &bull; {groupSize} people
            </h3>
            <div>
              <NewlineText text={itinerary?.itinerary || ""} />
            </div>
          </div>
        </section>
        <div className="fixed bottom-9 w-full flex items-center justify-center">
          <div className="w-3/4 flex items-center justify-center">
            <Link
              href="/onboarding/step-10"
              className="py-3 block flex-1 text-center font-medium text-xl bg-sky text-white rounded-full"
            >
              select AA flights &rarr;
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
