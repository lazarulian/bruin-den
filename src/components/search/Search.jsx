import React from "react";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase-config";
import { MTable } from "..";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FormControl from "@mui/material/FormControl";

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
  const [initials, setInitials] = useState([]);
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const getInitial = async () => {
      const q = query(collection(db, "apartments"));
      const data = await getDocs(q);
      setInitials(
        data.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .map((initial) => initial.address)
          .filter(onlyUnique)
      );
    };
    getInitial();
  }, []);

  const [search, setSearch] = useState(initials[0]);
  const [inputValue, setInputValue] = React.useState("");

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

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
    <div className="text-center mb-2 py-6 rounded-lg">
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold">Search</h1>
      </div>
      <div className="flex justify-center">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Autocomplete
            options={initials}
            value={search}
            onChange={(event, newValue) => {
              setSearch(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Apartments" />
            )}
          />
        </FormControl>
        <button
          className="text-white absolute right-2.5 bottom-2.5 bg-sky-800 hover:opacity-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 duration-300"
          onClick={() => {
            getApartments(search);
          }}
        >
          Search
        </button>
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
