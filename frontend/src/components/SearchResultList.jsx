import React from "react";
import { Link } from "react-router-dom";

function SearchResultList({ results, setInput }) {
  return (
    <div className="absolute z-10 max-h-50 overflow-hidden max-w-sm min-w-[200px] bg-gray-300 rounded-b-2xl p-1">
      {results.map((result) => {
        return (
          <div key={result._id}>
            <Link to={`/dictionary/${result._id}`}>
              <div className="hover:bg-slate-500 p-1 rounded-md">
                {result.title}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResultList;
