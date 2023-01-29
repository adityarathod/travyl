import citySuggestion, {
  CitySuggestionResponse,
} from "@/prompts/city-suggestion";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CitySuggestionResponse[] | { error: string }>
) {
  try {
    const { groupSize: rawGroupSize, interests: rawInterests } = req.query;

    if (typeof rawGroupSize !== "string") {
      throw Error("Group size is not string: " + rawGroupSize);
    }
    const groupSize = parseInt(rawGroupSize);

    if (typeof rawInterests !== "string") {
      throw Error("Interests is not string: " + rawInterests);
    }
    const interests = rawInterests.split(",");

    const suggestions = await citySuggestion({ groupSize, interests });
    res.status(200).json(suggestions);
  } catch (err) {
    console.error("Faced error generating suggestions: " + err);
    res.status(500).json({ error: `${err}` });
  }
}
