import openai from "./config";

async function generateCompletion(prompt: string, maxTokens: number = 500) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    n: 1,
    max_tokens: maxTokens,
  });
  return completion.data.choices[0].text;
}

export default generateCompletion;
