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
    <div className="container w-1/3 bg-sky-100 rounded-lg m-4 p-4">
      <Link href="/streets/kelton">
        <button class="bg-sky-800 hover:opacity-50 duration-300 text-white py-1 px-3 rounded-full">
          <div className="flex items-center justify-center">
            <FaRoad />
            &nbsp;Kelton
          </div>
        </button>
      </Link>
      <Link href="/">
        <button class="bg-sky-800 hover:opacity-50 duration-300 text-white py-1 m-1 px-3 rounded-full">
          <div className="flex items-center justify-center">
            <FaRainbow />
            &nbsp;Midvale
          </div>
        </button>
      </Link>
      <Link href="/">
        <button class="bg-sky-800 hover:opacity-50 duration-300 text-white py-1 m-1 px-3 rounded-full">
          <div className="flex items-center justify-center">
            <FaShuttleVan />
            &nbsp;Veteran
          </div>
        </button>
      </Link>
      <Link href="/">
        <button class="bg-sky-800 hover:opacity-50 duration-300 text-white py-1 m-1 px-3 rounded-full">
          <div className="flex items-center justify-center">
            <FaSkiing />
            &nbsp;Glenrock
          </div>
        </button>
      </Link>
      <Link href="/">
        <button class="bg-sky-800 hover:opacity-50 duration-300 text-white py-1 m-1 px-3 rounded-full">
          <div className="flex items-center justify-center">
            <FaCouch />
            &nbsp;Landfair
          </div>
        </button>
      </Link>
      <Link href="/">
        <button class="bg-sky-800 hover:opacity-50 duration-300 text-white py-1 m-1 px-3 rounded-full">
          <div className="flex items-center justify-center">
            <FaFire />
            &nbsp;Roebling
          </div>
        </button>
      </Link>
      <Link href="/">
        <button class="bg-sky-800 hover:opacity-50 duration-300 text-white py-1 m-1 px-3 rounded-full">
          <div className="flex items-center justify-center">
            <FaCity />
            &nbsp;Gayley
          </div>
        </button>
      </Link>
      <Link href="/">
        <button class="bg-sky-800 hover:opacity-50 duration-300 text-white py-1 m-1 px-3 rounded-full">
          <div className="flex items-center justify-center">
            <FaShieldAlt />
            &nbsp;Ophir
          </div>
        </button>
      </Link>
      <Link href="/">
        <button class="bg-sky-800 hover:opacity-50 duration-300 text-white py-1 m-1 px-3 rounded-full">
          <div className="flex items-center justify-center">
            <FaWind />
            &nbsp;Strathmore
          </div>
        </button>
      </Link>
      <Link href="/">
        <button class="bg-sky-800 hover:opacity-50 duration-300 text-white py-1 m-1 px-3 rounded-full">
          <div className="flex items-center justify-center">
            <FaSatellite />
            &nbsp;Levering
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Filters;
