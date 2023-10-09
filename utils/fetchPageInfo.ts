import { PageInfo } from "@/typings";

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );

  // check res for error
  if (!res.ok) {
    // console.log(res.statusText);
    console.error(`Error fetching data: ${res.statusText}`);
    throw new Error(`Failed to fetch data: ${res.statusText}`);
  }

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  // console.log("fetching", pageInfo);

  return pageInfo;
};
