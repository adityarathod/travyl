import generateCompletion from "@/openai/completion";

const PROMPT_TEMPLATE = `
Give me a list of $NUM_RESULTS cities with airports in America with a personalized description for each.
This is for a group of $GROUP_SIZE that requires a spot that contains all the following interests: $INTERESTS.
Use a valid JSON formatted list of objects with the keys "city", "airport", "airportCode", and "description".
Make sure the list is ranked in order of best to worst for this group.
`;

export interface CitySuggestionPromptData {
  numResults?: number;
  groupSize: number;
  interests: string[];
}

export interface CitySuggestionResponse {
  city: string;
  airport: string;
  airportCode: string;
  description: string;
}

export default async function citySuggestion(
  promptData: CitySuggestionPromptData
): Promise<CitySuggestionResponse[]> {
  let PROMPT = PROMPT_TEMPLATE.replace("\n", "");
  PROMPT = PROMPT.replace("$NUM_RESULTS", `${promptData.numResults || 5}`);
  PROMPT = PROMPT.replace("$GROUP_SIZE", `${promptData.groupSize}`);
  PROMPT = PROMPT.replace("$INTERESTS", `${promptData.interests.join(", ")}`);
  const completion = await generateCompletion(
    PROMPT,
    Math.max(500, 400 * (promptData.numResults || 5))
  );
  console.log(completion);
  const parsedCompletion = JSON.parse(completion || "{}");
  return parsedCompletion as CitySuggestionResponse[];
}
