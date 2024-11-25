import PDFReader from "@/components/PDFReader";
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
      {resources?.length > 0 ? (
        resources.map((resource: any) => (
          <PDFReader key={resource._id} url={resource.url} />
        ))
      ) : (
        <p className="body-regular text-white-400">No resources found</p>
      )}
    </div>
  );
};

export default page;
