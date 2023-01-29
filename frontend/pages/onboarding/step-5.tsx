import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [originAirport, setOriginAirport] = useState<string>("");
  const [groupSize, setGroupSize] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  useEffect(() => {
    if (originAirport) {
      localStorage.setItem("originAirport", originAirport);
    }
    if (groupSize) {
      localStorage.setItem("groupSize", groupSize);
    }
    if (startDate && endDate) {
      let diff = new Date(endDate).valueOf() - new Date(startDate).valueOf();
      const numDays = Math.ceil(diff / (1000 * 3600 * 24) + 1);
      localStorage.setItem("numDays", `${numDays}`);
      localStorage.setItem("startDate", startDate);
      localStorage.setItem("endDate", endDate);
    }
  }, [originAirport, groupSize, startDate, endDate]);

  // 259200000/(1000*3600*24) + 1
  return (
    <div>
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-neutral"></div>
      <div className="absolute w-full text-center top-6 mb-8 text-sky font-bold text-3xl">
        travyl
      </div>
      <h1 className="mt-[150px] font-bold text-5xl text-center">about you</h1>

      <section className="mt-10 px-4">
        <div className="mb-4">
          <label
            className="font-bold block text-lg p-2"
            htmlFor="originAirport"
          >
            where are you flying from?
          </label>
          <input
            className="border-b-2 border-gray-300 bg-transparent outline-none p-2 w-full"
            type="text"
            name="originAirport"
            placeholder="SJC"
            onChange={(e) => setOriginAirport(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="font-bold block text-lg p-2" htmlFor="groupSize">
            how many people are traveling?
          </label>
          <input
            className="border-b-2 border-gray-300 bg-transparent outline-none p-2 w-full"
            type="text"
            name="groupSize"
            placeholder="4"
            onChange={(e) => setGroupSize(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="font-bold block text-lg p-2" htmlFor="startDate">
            dates of travel?
          </label>
          <input
            className="border-b-2 border-gray-300 bg-transparent outline-none p-2 w-full mb-2"
            type="date"
            name="startDate"
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            className="border-b-2 border-gray-300 bg-transparent outline-none p-2 w-full "
            type="date"
            name="endDate"
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </section>

      <div className="absolute bottom-9 w-full flex items-center justify-center">
        <div className="w-3/4 flex items-center justify-center">
          <Link
            href="/onboarding/step-4"
            className="py-3 px-3 mr-2 aspect-square block text-center font-medium text-xl bg-gray-200 text-black rounded-full"
          >
            &nbsp;&larr;&nbsp;
          </Link>
          <Link
            href="/onboarding/step-6"
            className="py-3 block flex-1 text-center font-medium text-xl bg-sky text-white rounded-full"
          >
            let's go
          </Link>
        </div>
      </div>
    </div>
  );
}
