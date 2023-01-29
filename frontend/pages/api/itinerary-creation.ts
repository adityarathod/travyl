import itineraryCreation, {
  ItineraryCreationResponse,
} from "@/prompts/itinerary-creation";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ItineraryCreationResponse | { error: string }>
) {
  try {
    const {
      numDays: rawNumDays,
      interests: rawInterests,
      location: rawLocation,
      originAirport: rawOriginAirport,
      destinationAirport: rawDestinationAirport,
      groupSize: rawGroupSize,
    } = req.query;

    if (typeof rawNumDays !== "string") {
      throw Error("Num days is not string: " + rawGroupSize);
    }
    const numDays = parseInt(rawNumDays);

    if (typeof rawInterests !== "string") {
      throw Error("Interests is not string: " + rawInterests);
    }
    const interests = rawInterests.split(",");

    if (typeof rawLocation !== "string") {
      throw Error("Location is not string: " + rawGroupSize);
    }
    const location = rawLocation;

    if (typeof rawOriginAirport !== "string") {
      throw Error("Origin airport is not string: " + rawGroupSize);
    }
    const originAirport = rawOriginAirport;

    if (typeof rawDestinationAirport !== "string") {
      throw Error("Destination airport is not string: " + rawGroupSize);
    }
    const destinationAirport = rawDestinationAirport;

    if (typeof rawGroupSize !== "string") {
      throw Error("Group size is not string: " + rawGroupSize);
    }
    const groupSize = parseInt(rawGroupSize);

    const suggestions = await itineraryCreation({
      numDays,
      location,
      originAirport,
      destinationAirport,
      groupSize,
      interests,
    });
    res.status(200).json(suggestions);
  } catch (err) {
    console.error("Faced error generating suggestions: " + err);
    res.status(500).json({ error: `${err}` });
  }
}
