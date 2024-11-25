import React from "react";
import { getCatagoryResources } from "@/sanity/actions";

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const page = async ({ searchParams }: Props) => {
  const resources = await getCatagoryResources({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    page: "1",
  });
  return (
    <div>
      <p className="body-regular text-white-400">No resources found</p>
    </div>
  );
};

export default page;
