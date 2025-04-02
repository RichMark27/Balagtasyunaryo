import { useState, useEffect } from "react";
import SearchResultList from "./SearchResultList";

function SearchBar({ setResults }) {
  const [query, setQuery] = useState(); // Search input value

  const fetchData = (value) => {
    fetch("/api/dictionary")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((dictionary) => {
          return (
            value &&
            dictionary &&
            dictionary.title &&
            dictionary.title.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setQuery(value);
    fetchData(value);
  };

  const resetInput = (e) => {
    e.target.value = "";
  };

  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <div className="relative">
        <input
          className="w-full bg-gray-300 placeholder:text-slate-700 text-slate-700 text-sm border border-slate-200 rounded-md pr-3 pl-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Magsaliksik..."
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={(e) => resetInput(e)}
        />
        <div
          className="absolute top-1 left-1 flex items-center rounded bg-transparent p-1.5 border border-transparent text-center text-sm text-slate-700"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
