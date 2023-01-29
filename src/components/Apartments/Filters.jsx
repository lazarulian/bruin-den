import React from "react";
import Link from "next/link";
import {
  FaRoad,
  FaRainbow,
  FaShuttleVan,
  FaSkiing,
  FaCouch,
  FaFire,
  FaCity,
  FaShieldAlt,
  FaWind,
  FaSatellite,
} from "react-icons/fa";

const Filters = () => {
  return (
    <div className="container bg-sky-100 w-auto rounded-lg m-4 p-4">
      <Link href="/streets/gayley">
        <button className="bg-sky-800 hover:opacity-50 duration-300 text-white py-1 m-1 px-3 rounded-full">
          <div className="flex items-center justify-center">
            <FaCity />
            &nbsp;Gayley
          </div>
        </button>
      </Link>
      <Link href="/streets/glenrock">
        <button className="bg-sky-800 hover:opacity-50 duration-300 text-white py-1 m-1 px-3 rounded-full">
          <div className="flex items-center justify-center">
            <FaSkiing />
            &nbsp;Glenrock
          </div>
        </button>
      </Link>
      <Link href="/streets/kelton">
        <button className="bg-sky-800 hover:opacity-50 duration-300 text-white py-1 px-3 rounded-full">
          <div className="flex items-center justify-center">
            <FaRoad />
            &nbsp;Kelton
          </div>
        </button>
      </Link>
      <Link href="/streets/landfair">
        <button className="bg-sky-800 hover:opacity-50 duration-300 text-white py-1 m-1 px-3 rounded-full">
          <div className="flex items-center justify-center">
            <FaCouch />
            &nbsp;Landfair
          </div>
        </button>
      </Link>
      <Link href="/streets/levering">
        <button className="bg-sky-800 hover:opacity-50 duration-300 text-white py-1 m-1 px-3 rounded-full">
          <div className="flex items-center justify-center">
            <FaSatellite />
            &nbsp;Levering
          </div>
        </button>
      </Link>
      <Link href="/streets/midvale">
        <button className="bg-sky-800 hover:opacity-50 duration-300 text-white py-1 m-1 px-3 rounded-full">
          <div className="flex items-center justify-center">
            <FaRainbow />
            &nbsp;Midvale
          </div>
        </button>
      </Link>
      <Link href="/streets/ophir">
        <button className="bg-sky-800 hover:opacity-50 duration-300 text-white py-1 m-1 px-3 rounded-full">
          <div className="flex items-center justify-center">
            <FaShieldAlt />
            &nbsp;Ophir
          </div>
        </button>
      </Link>
      <Link href="/streets/roebling">
        <button className="bg-sky-800 hover:opacity-50 duration-300 text-white py-1 m-1 px-3 rounded-full">
          <div className="flex items-center justify-center">
            <FaFire />
            &nbsp;Roebling
          </div>
        </button>
      </Link>
      <Link href="/streets/strathmore">
        <button className="bg-sky-800 hover:opacity-50 duration-300 text-white py-1 m-1 px-3 rounded-full">
          <div className="flex items-center justify-center">
            <FaWind />
            &nbsp;Strathmore
          </div>
        </button>
      </Link>
      <Link href="/streets/veteran">
        <button className="bg-sky-800 hover:opacity-50 duration-300 text-white py-1 m-1 px-3 rounded-full">
          <div className="flex items-center justify-center">
            <FaShuttleVan />
            &nbsp;Veteran
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Filters;
