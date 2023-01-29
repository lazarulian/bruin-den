import React from "react";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase-config";
import { MTable } from "..";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const Search = () => {
  const [search, setSearch] = useState("");
  const [apartments, setApartments] = useState([]);

  const getApartments = async (search) => {
    const q = query(
      collection(db, "apartments"),
      where("address", "==", search),
      orderBy("year")
    );
    const data = await getDocs(q);
    setApartments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: apartments.map((apartment) => apartment.year),
    datasets: [
      {
        label: "Price Trajectory",
        data: apartments.map((apartment) => apartment.rent),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Apartment Annual Lease Price Over Time (Years)",
      },
    },
  };

  return (
    <div className="text-center mb-2 py-6 bg-slate-50 rounded-lg">
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold">Search</h1>
      </div>
      <div className="flex justify-center">
        <div className="container bg-sky-100 w-1/4 rounded-lg m-4 p-4">
          <div>
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="540 Kelton Ave..."
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
              <button
                className="text-white absolute right-2.5 bottom-2.5 bg-sky-800 hover:opacity-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 duration-300"
                onClick={() => {
                  getApartments(search);
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="col col-span-1">
          <div className="mx-4 mt-8 bg-white rounded-lg">
            {apartments && <Line options={options} data={data} />}
          </div>
        </div>
        <div className="col col-span-1">
          {apartments && <MTable ApartmentProp={apartments} />}
        </div>
      </div>
    </div>
  );
};

export default Search;
