import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams();
    const groupSize = localStorage.getItem("groupSize");
    const food = localStorage.getItem("food");
    const location = localStorage.getItem("location");
    const activity = localStorage.getItem("activity");
    const numDays = localStorage.getItem("numDays");
    const originAirport = localStorage.getItem("originAirport");
    const destinationAirport = localStorage.getItem("destinationAirport");

    if (
      !food ||
      !location ||
      !activity ||
      !groupSize ||
      !numDays ||
      !originAirport ||
      !destinationAirport
    ) {
      console.error("cannot generate API call due to missing parameter");
      router.push("/onboarding/landing");
      return;
    }
    params.set(
      "interests",
      `Food: ${food},Location:${location},Activity:${activity}`
    );
    params.set("groupSize", groupSize);
    params.set("location", location);
    params.set("numDays", numDays);
    params.set("originAirport", originAirport);
    params.set("destinationAirport", destinationAirport);
    fetch(`/api/itinerary-creation?${params.toString()}`)
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("itinerary", JSON.stringify(json));
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-sky"></div>
      <div className="absolute w-full text-center top-6 mb-8 text-white font-bold text-3xl">
        travyl
      </div>

      <div className="absolute w-full h-full flex items-center justify-center">
        <h1 className="text-4xl text-white font-bold">
          planning the
          <br />
          <span style={{ color: "#55FFD2" }}>perfect</span> getaway
        </h1>
      </div>

      <div className="absolute bottom-9 w-full flex items-center justify-center">
        <div className="w-3/4 flex items-center justify-center">
          {loading ? (
            <div className="py-3 block flex-1 flex items-center justify-center text-center font-medium text-xl text-white">
              <img src="/loading.svg" alt="loading" className="w-7 h-7 mr-4" />
              <span>planning engine is working...</span>
            </div>
          ) : (
            <Link
              href="/onboarding/step-9"
              className="py-3 block flex-1 text-center font-medium text-xl bg-white text-black rounded-full"
            >
              view itinerary
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
