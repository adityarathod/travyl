import { useState } from "react";

export default function ItineraryCreationPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [numDays, setNumDays] = useState<string>("");
  const [interests, setInterests] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [originAirport, setOriginAirport] = useState<string>("");
  const [destinationAirport, setDestinationAirport] = useState<string>("");
  const [groupSize, setGroupSize] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const submitRequest = async () => {
    const params = new URLSearchParams();
    params.set("numDays", numDays);
    params.set("interests", interests);
    params.set("location", location);
    params.set("originAirport", originAirport);
    params.set("destinationAirport", destinationAirport);
    params.set("groupSize", groupSize);
    setLoading(true);
    const res = await fetch(`/api/itinerary-creation?${params.toString()}`);
    const txt = await res.text();
    setLoading(false);
    setResult(txt);
  };

  return (
    <div>
      <div className="p-8 font-mono">
        <h1 className="text-3xl font-bold">itinerary creation test</h1>
        <br />
        <p>Prompt template:</p>
        <p>
          Give me a multi-step, bullet point list itinerary for a $NUM_DAYS-day
          trip in $LOCATION and its surrounding areas that are accessible by
          car. Leave the first and last days as travel days, as the group is
          flying in from $ORIGIN_AIRPORT to $DEST_AIRPORT on the first day and
          flying back on the last day. Be as detailed as possible in your
          response. This is for a group of $GROUP_SIZE that requires itinerary
          stops that cater to the following interests: $INTERESTS
        </p>
        <br />
        <p className="py-4">
          <label htmlFor="numDays" className="mr-4">
            numDays
          </label>
          <input
            type="text"
            name="numDays"
            className="border-b-2 outline-none border-spacing-4 w-full"
            placeholder="5"
            onChange={(e) => setNumDays(e.target.value)}
          />
        </p>
        <p className="py-4">
          <label htmlFor="interests" className="mr-4">
            interests
          </label>
          <input
            type="text"
            name="interests"
            className="border-b-2 outline-none border-spacing-4 w-full"
            placeholder="interest a,thing b,foo c"
            onChange={(e) => setInterests(e.target.value)}
          />
        </p>
        <p className="py-4">
          <label htmlFor="location" className="mr-4">
            location
          </label>
          <input
            type="text"
            name="location"
            className="border-b-2 outline-none border-spacing-4 w-full"
            placeholder="San Francisco"
            onChange={(e) => setLocation(e.target.value)}
          />
        </p>
        <p className="py-4">
          <label htmlFor="originAirport" className="mr-4">
            originAirport
          </label>
          <input
            type="text"
            name="originAirport"
            className="border-b-2 outline-none border-spacing-4 w-full"
            placeholder="SFO"
            onChange={(e) => setOriginAirport(e.target.value)}
          />
        </p>
        <p className="py-4">
          <label htmlFor="destinationAirport" className="mr-4">
            destinationAirport
          </label>
          <input
            type="text"
            name="destinationAirport"
            className="border-b-2 outline-none border-spacing-4 w-full"
            placeholder="DFW"
            onChange={(e) => setDestinationAirport(e.target.value)}
          />
        </p>
        <p className="py-4">
          <label htmlFor="groupSize" className="mr-4">
            groupSize
          </label>
          <input
            type="text"
            name="groupSize"
            className="border-b-2 outline-none border-spacing-4 w-full"
            placeholder="4"
            onChange={(e) => setGroupSize(e.target.value)}
          />
        </p>
        <button
          className="px-4 py-1 bg-gray-400 font-bold mt-4 disabled:bg-red-700 "
          disabled={loading}
          onClick={submitRequest}
        >
          talk to gpt-3 pls
        </button>
        <div>{loading && <span>Loading...</span>}</div>
        <br />
        {result && (
          <div className="w-full overflow-scroll">
            <pre className="">{result}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
