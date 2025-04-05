import React from "react";
import SearchBar from "../components/SearchBar";
import LandingPageImg from "../assets/img/Florante_at_Laura.png";
import ShowAllData from "../components/ShowAllData";

function Home() {
  return (
    <div>
      <section className="relative min-h-screen w-full flex flex-col items-center bg-[url(/src/assets/img/background.jpg)] bg-no-repeat bg-cover">
        <ShowAllData />

        <div className="relative">
          <img
            className="w-[350px] lg:w-[500px]"
            src={LandingPageImg}
            width={500}
            height={457}
            alt="Florante_at_Laura"
          />
        </div>
        <div>
          <SearchBar />
        </div>
      </section>
    </div>
  );
}

export default Home;
