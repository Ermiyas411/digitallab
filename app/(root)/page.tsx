import Books from "@/components/Books";
import Hero from "@/components/Hero";
import React from "react";

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Home = ({ searchParams }: Props) => {
  return (
    <main className="w-full">
      <Hero />
      <Books />
    </main>
  );
};

export default Home;
