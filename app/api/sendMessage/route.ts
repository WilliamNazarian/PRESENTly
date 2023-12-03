import OpenAI from "openai";
import type { PromptPayload } from "../../../lib/openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const payload: PromptPayload = {
    model: "gpt-4-turbo",
    messages: [
      { role: "system", content: "I can suggest gifts by generating a structured command to search products on Amazon. The function `searchAmazonProducts` will be used for this purpose." },
      {
        role: "user",
        content: `Find products on Amazon for ${body.firstName}, a ${body.age}-year-old ${body.gender}. They are a ${body.occupation}, and the budget is ${body.budget} Canadian dollars. The gift is for my ${body.relationship}, and they are interested in ${body.interest[1]}, ${body.interest[2]}, and ${body.interest[3]}. Here's a brief bio: ${body.biography}. Suggest suitable Amazon products.`,
      },
    ],
    temperature: 1,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
  };

  async function main() {
    const completion = (await openai.chat.completions.create(payload)) as any;
    // for await (const chunk of stream) {
    //     process.stdout.write(chunk.choices[0]?.delta?.content || '');
    //   }
    console.log(completion.choices[0].message.content);
  }
  main();
}
