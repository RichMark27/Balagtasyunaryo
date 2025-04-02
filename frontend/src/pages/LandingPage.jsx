import React from "react";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchResultList from "../components/SearchResultList";
import Florante_at_Laura from "../assets";

function Home() {
  const [results, setResults] = useState([]);

  return (
    <div>
      <section className="relative min-h-screen w-full flex flex-col items-center bg-[url(/src/assets/img/background.jpg)] bg-no-repeat bg-cover">
        <div className="relative">
          <img
            className="w-[350px] lg:w-[500px]"
            src={Florante_at_Laura}
            width={500}
            height={457}
            alt="Florante_at_Laura"
          />
        </div>
        <div>
          <SearchBar setResults={setResults} />
          {results && results.length > 0 && (
            <SearchResultList results={results} />
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
