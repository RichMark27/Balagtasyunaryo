import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LandingPageImg from "../assets/img/Florante_at_Laura.png";

function BuodPage() {
  const [buod, setBuod] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`/api/buod/${id}`)
      .then((response) => response.json())
      .then((data) => setBuod(data));
  }, [id]);

  return (
    <div>
      <section className="relative px-8 lg:px-32 min-h-screen w-full flex flex-col justify-center items-center bg-[url(/src/assets/img/background.jpg)] bg-no-repeat bg-cover">
        <div className=" absolute w-full top-0 right-0">
          <header className=" w-full flex justify-end items-end py-4 px-8 lg:px-16 z-20">
            <Link to={"/"}>
              <div className="h-15 w-15 lg:h-20 lg:w-20 rounded-full">
                <img src={LandingPageImg} alt="Logo" />
              </div>
            </Link>
          </header>
        </div>

        <div className="max-w-3xl p-4 bg-slate-300 rounded-lg">
          <h2 className="text-stroke font-black text-4xl mb-4">{buod.title}</h2>
          <p className="text-start">{buod.buod}</p>
        </div>
      </section>
    </div>
  );
}

export default BuodPage;
