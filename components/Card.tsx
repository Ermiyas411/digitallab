"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Props {
  title: string;
  id: string;
  image: string;
  downloadLink: string;
}

const Card = ({ title, id, image, downloadLink }: Props) => {
  return (
    <div key={id} className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <Image
          src={image}
          height="1000"
          width="500"
          className="h-96 w-full object-fill rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link
              href={downloadLink}
              target="__blank"
              className="px-4 py-2 rounded-xl text-md font-normal font-spaceGrotesk dark:text-white"
            >
              Download →
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
