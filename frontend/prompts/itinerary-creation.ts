import generateCompletion from "@/openai/completion";

const PROMPT_TEMPLATE = `
Give me a multi-step, bullet point list itinerary for a $NUM_DAYS-day trip in $LOCATION and its surrounding areas that are accessible by car.
Leave the first and last days as travel days, as the group is flying in from $ORIGIN_AIRPORT to $DEST_AIRPORT on the first day and flying back on the last day.
Be as detailed as possible in your response.
This is for a group of $GROUP_SIZE that requires itinerary stops that cater to the following interests: $INTERESTS
`;

export interface ItineraryCreationPromptData {
  numDays: number;
  location: string;
  originAirport: string;
  destinationAirport: string;
  groupSize: number;
  interests: string[];
}

export interface ItineraryCreationResponse {
  itinerary: string;
}

export default async function itineraryCreation(
  promptData: ItineraryCreationPromptData
): Promise<ItineraryCreationResponse> {
  let PROMPT = PROMPT_TEMPLATE.replace("\n", "");
  PROMPT = PROMPT.replace("$NUM_DAYS", `${promptData.numDays}`);
  PROMPT = PROMPT.replace("$LOCATION", `${promptData.location}`);
  PROMPT = PROMPT.replace("$ORIGIN_AIRPORT", `${promptData.originAirport}`);
  PROMPT = PROMPT.replace("$DEST_AIRPORT", `${promptData.destinationAirport}`);
  PROMPT = PROMPT.replace("$GROUP_SIZE", `${promptData.groupSize}`);
  PROMPT = PROMPT.replace("$INTERESTS", `${promptData.interests.join(", ")}`);
  const completion = await generateCompletion(PROMPT, 500);
  console.log(completion);
  return { itinerary: completion as string };
}
