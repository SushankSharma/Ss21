// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Social } from "@/typings";

const query = groq`
  *[_type == "social"]
`;

type Data = {
  socials: Social[];
};

type ErrorResponse = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>
) {
  try {
    const socials: Social[] = await sanityClient.fetch(query);
    res.status(200).json({ socials });
  } catch (error) {
    console.error("Error fetching socials:", error);
    const errorResponse: ErrorResponse = { error: "Internal server error" };
    res.status(500).json(errorResponse); // Send the error response
  }
}
