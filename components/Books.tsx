import React from "react";
import BooksContent from "./BooksContent";
import SearchForm from "./SearchForm";

// interface Props {
//   searchParams: { [key: string]: string | undefined };
// }
const Books = () => {
  return (
    <div className="m-6 space-y-4">
      <h1 className="font-bold text-3xl">Books</h1>
      <div className="w-full flex items-center gap-2 md:gap-5">
        <SearchForm />
        <select className="select select-bordered w-full max-w-xs">
          <option disabled>Who shot first?</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      <div>
        <BooksContent />
      </div>
    </div>
  );
};

export default Books;
