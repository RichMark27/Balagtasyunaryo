import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import LandingPageImg from "../assets/img/Florante_at_Laura.png";

function DictionaryPage() {
  const [dictionary, setDictionary] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`/api/dictionary/${id}`)
      .then((response) => response.json())
      .then((data) => setDictionary(data));
  }, [id]);

  return (
    <div>
      <header className="absolute w-full flex justify-between items-center py-4 px-8 lg:px-16 z-20">
        <div>
          <SearchBar />
        </div>

        <Link to={"/"}>
          <div className="h-15 w-15 lg:h-20 lg:w-20 rounded-full">
            <img src={LandingPageImg} alt="Logo" />
          </div>
        </Link>
      </header>

      <section className="min-h-screen w-full  flex flex-col bg-[url(/src/assets/img/background.jpg)] items-center gap-12 lg:gap-22 pt-20 lg:pt-10">
        <div>
          <img
            className="h-70 w-full object-contain"
            src={dictionary.img_URL}
            alt={dictionary.title}
          />

          <h1 className="mt-5 text-5xl font-bold text-center text-stroke">
            {dictionary.title}
          </h1>
        </div>
        <div className=" bg-slate-200 p-8 rounded-md xl:space-y-16 space-y-5">
          <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-16 xl:gap-64 xl:px-64">
            <div>
              <h2 className="text-3xl font-medium mb-2">Denotasyon</h2>
              <p>{dictionary.denotasyon}</p>
            </div>

            <div>
              <h2 className="text-3xl font-medium mb-2">Konotasyon</h2>
              <p>{dictionary.konotasyon}</p>
            </div>
          </div>

          <div className="w-full xl:pl-32 ">
            <h2 className="text-3xl font-medium mb-2">Pangungusap</h2>
            <p>{dictionary.pangungusap}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DictionaryPage;
