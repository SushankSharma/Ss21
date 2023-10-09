// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Experience } from "@/typings";

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;

type Data = {
  experiences: Experience[];
};

type ErrorResponse = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>,
) {
  try {
    const experiences: Experience[] = await sanityClient.fetch(query);
    res.status(200).json({ experiences });
  } catch (error) {
    console.error("Error fetching experiences:", error);
    const errorResponse: ErrorResponse = { error: "Internal server error" };
    res.status(500).json(errorResponse); // Send the error response
  }
}
