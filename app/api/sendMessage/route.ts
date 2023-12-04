import OpenAI from "openai";
import type { PromptPayload } from "../../../lib/openai";
import type { NextApiResponse } from "next";
import { NextResponse } from "next/server";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function main(req: Request, res: NextApiResponse) {
  try {
    const body = await req.json();

    const payload: PromptPayload = {
      model: "gpt-4-1106-preview",
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: "You are a helpful assistant that will suggest gift ideas designed to output JSON." },
        {
          role: "user",
          content: `Give me 4 gift ideas with the format {giftname: giftdescription} in json for a person named ${body.firstName}, who is a ${body.age}-year-old ${body.gender}. 
        They are a ${body.occupation}, and the budget of the gift is ${body.budget} Canadian dollars. 
        The gift is for my ${body.relationship}, and they are interested in ${body.interests[0]}, ${body.interests[1]}, and ${body.interests[2]}. 
        Here's a brief bio of them: ${body.biography}.
        Return a JSON object with the following structure:
        Example:
          "gift1": {"name": "GoPro Camera", "description": "A high-quality camera for capturing memorable moments, perfect for a photography enthusiast."},
          "gift2": {"name": "Professional Kitchen Knives", "description": "A set of professional-grade kitchen knives for the aspiring chef, offering precision and durability."},
          "gift3": {"name": "Online Learning Platform Subscription", "description": "A subscription to an online learning platform, ideal for someone who loves to learn new skills."},
          "gift4": {"name": "Personalized Artwork", "description": "A thoughtful and unique piece of personalized artwork for someone who appreciates creativity."}`,
        },
      ],
      temperature: 1,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stream: false,
    };

    const completion = (await openai.chat.completions.create(payload)) as any;
    const message: string = completion?.choices[0]?.message?.content;
    return NextResponse.json({ message: JSON.parse(message) });
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      // Handle OpenAI API errors
      console.log(error.status); // e.g., 400
      console.log(error.name); // e.g., BadRequestError
      return NextResponse.json({ message: error.message });
    } else {
      // Handle other types of errors
      console.log(error);
      return NextResponse.json({ message: "An unexpected error occurred" });
    }
  }
}

export async function POST(req: Request, res: NextApiResponse) {
  const result = await main(req, res);
  return result;
}
