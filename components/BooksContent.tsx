import React from "react";
import Card from "./Card";
import { getResources } from "@/sanity/actions";
import Link from "next/link";

export const revalidate = 60;

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const BooksContent = async ({ searchParams }: Props) => {
  const resources = await getResources({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    page: "1",
  });
  return (
    <div className="flex flex-wrap items-center gap-5">
      {resources?.length > 0 ? (
        resources.map((resource: any) => (
          <Link href={`/${resource.title}`}>
            <Card
              key={resource._id}
              title={resource.title}
              id={resource._id}
              image={resource.image}
              downloadLink={resource.downloadLink}
            />
          </Link>
        ))
      ) : (
        <p className="body-regular text-white-400">No resources found</p>
      )}
    </div>
  );
};

export default BooksContent;
