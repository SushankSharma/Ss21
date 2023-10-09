// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { PageInfo } from "@/typings";

const pageInfoQuery = groq`
  *[_type == "pageInfo"][0]
`;

type Data = {
  pageInfo: PageInfo;
};

type ErrorResponse = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>
) {
  try {
    const pageInfo: PageInfo = await sanityClient.fetch(pageInfoQuery);
    res.status(200).json({ pageInfo });
  } catch (error) {
    console.error("Error fetching page info:", error);
    const errorResponse: ErrorResponse = { error: "Internal server error" };
    res.status(500).json(errorResponse); // Send the error response
  }
}
