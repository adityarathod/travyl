/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

export default function CitySuggestionPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [groupSize, setGroupSize] = useState<string>("");
  const [interests, setInterests] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const submitRequest = async () => {
    const params = new URLSearchParams();
    params.set("groupSize", groupSize);
    params.set("interests", interests);
    setLoading(true);
    const res = await fetch(`/api/city-suggestion?${params.toString()}`);
    const txt = await res.text();
    setLoading(false);
    setResult(txt);
  };

  return (
    <div>
      <div className="p-8 font-mono">
        <h1 className="text-3xl font-bold">city suggestion test</h1>
        <br />
        <p>Prompt template:</p>
        <p>
          Give me a list of $NUM_RESULTS cities with airports in America with a
          personalized description for each. This is for a group of $GROUP_SIZE
          that requires a spot that contains all the following interests:
          $INTERESTS. Use a valid JSON formatted list of objects with the keys
          "city", "airport", "airportCode", and "description". Make sure the
          list is ranked in order of best to worst for this group.
        </p>
        <br />
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
        <p className="py-4">
          <label htmlFor="interests" className="mr-4">
            interests
          </label>
          <input
            type="text"
            name="groupSize"
            className="border-b-2 outline-none border-spacing-4 w-full"
            placeholder="interest a,thing b,foo c"
            onChange={(e) => setInterests(e.target.value)}
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
