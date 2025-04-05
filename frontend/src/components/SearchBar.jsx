import React, { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState();
  const [results, setResults] = useState(null);
  const [error, setError] = useState();

  const fetchData = async (value) => {
    try {
      const response = await fetch("/api/dictionary");
      const data = await response.json();

      const filteredResults = data.filter((dictionary) =>
        dictionary?.title?.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);

      if (value.trim() && filteredResults.length === 0) {
        setError("No matching results found.");
      } else {
        setError(""); // Clear error if valid
      }
    } catch (error) {
      console.log("error fetching data:", error);
    }
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    fetchData(value);
  };

  const handleFocus = (e) => {
    console.log("Input field is focused");
  };

  return (
    <form>
      <div className="bg-slate-300 rounded-md w-full max-w-md relative">
        <div className="flex items-center p-1 gap-1">
          <div className="p-2 flex justify-center items-center bg-transparent text-black rounded-sm">
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

          {/* Search Input*/}
          <input
            className="bg-slate-300 w-full outline-none"
            name="dictionary"
            placeholder="Magsaliksik..."
            value={query}
            onChange={handleOnChange}
            onFocus={handleFocus}
          />
        </div>

        {/* error message */}
        {error && <p className="text-red-500 p-2 text-center">{error}</p>}

        {/* Search Results Dropdown */}
        {results && (
          <div className="absolute left-0 w-full rounded-b-md shadow-md bg-gray-300">
            <div className="max-h-50 overflow-hidden ">
              {results.map((result) => (
                <Link
                  key={result._id}
                  to={`/dictionary/${result._id}`}
                  onClick={() => {
                    setQuery("");
                    setResults([]);
                  }}
                >
                  <div className="hover:bg-slate-500 p-2 text-black cursor-pointer">
                    {result.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default SearchBar;
