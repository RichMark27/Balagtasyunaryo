import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  LeftArrow,
  RightArrow,
  UpArrow,
  DownArrow,
} from "../assets/icons/index";

const ShowAllData = () => {
  const [buods, setBuods] = useState([]);
  const [groupedInfo, setGroupedInfo] = useState({});
  const [sideBar, setSideBar] = useState(false);
  const [updownAtoZ, setUpdownAtoZ] = useState(false);
  const [updownBuod, setUpdownBuod] = useState(false);

  const getBuod = async () => {
    const res = await fetch("/api/buod");
    const buod = await res.json();
    setBuods(buod);
  };

  const getData = async () => {
    const res = await fetch("/api/dictionary");
    const dictionary = await res.json();

    const grouped = dictionary.reduce((acc, item) => {
      const firstLetter = item.title[0].toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(item);
      return acc;
    }, {});
    setGroupedInfo(grouped);
  };

  useEffect(() => {
    getBuod();
    getData();
  }, []);

  return (
    <div className="absolute top-0 left-0 z-10 flex flex-row">
      <div className="bg-green-300 min-h-screen max-h-screen overflow-auto">
        <div className={`bg-green-300 w-60 ${sideBar ? "block" : "hidden"}`}>
          {/* Buod */}
          <div
            className="relative flex flex-row justify-center items-center bg-slate-600"
            onClick={() => setUpdownBuod((prev) => !prev)}
          >
            <h1 className="text-white font-bold text-3xl">Buod</h1>
            <img
              className="absolute right-2 top-1 h-8 w-8 rounded-full"
              src={updownBuod ? UpArrow : DownArrow}
              alt="arrow"
            />
          </div>
          <div className={`${updownBuod ? "block" : "hidden"} pb-2`}>
            {buods.map((buod) => (
              <ul key={buod._id}>
                <Link to={`/buod/${buod._id}`}>
                  <li className="p-2 hover:bg-slate-500 hover:text-white">
                    {buod.title}
                  </li>
                </Link>
              </ul>
            ))}
          </div>
          {/* A to Z */}
          <div
            className="relative flex flex-row justify-center items-center bg-slate-600"
            onClick={() => setUpdownAtoZ((prev) => !prev)}
          >
            <h1 className="text-white font-bold text-3xl">A - Z</h1>
            <img
              className="absolute right-2 top-1 h-8 w-8 rounded-full"
              src={updownAtoZ ? UpArrow : DownArrow}
              alt="arrow"
            />
          </div>
          <div className={`${updownAtoZ ? "block" : "hidden"} pb-2`}>
            {Object.keys(groupedInfo)
              .sort()
              .map((letter) => (
                <div key={letter} className="px-2">
                  <h2 className="text-3xl font-bold">{letter}</h2>
                  <ul>
                    {groupedInfo[letter].map((item) => (
                      <Link key={item._id} to={`/dictionary/${item._id}`}>
                        <li className="p-2 hover:bg-slate-500 hover:text-white">
                          {item.title}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div
        className="relative h-10 w-10 bg-green-300 ml-2 mt-2 rounded-full flex justify-center items-center"
        onClick={() => setSideBar((prev) => !prev)}
      >
        <img
          className="h-3 w-3"
          src={sideBar ? LeftArrow : RightArrow}
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default ShowAllData;
