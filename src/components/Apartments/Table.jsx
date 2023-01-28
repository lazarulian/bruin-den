import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, addDoc, where, query } from "firebase/firestore";
import { HiHome } from "react-icons/hi";

const Table = () => {
  const [newAddress, setNewAddress] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [newRent, setNewRent] = useState(0);
  const [newYear, setNewYear] = useState(0);

  const [apartments, setApartments] = useState([]);
  const apartmentsCollectionRef = collection(db, "apartments");

  const createApartment = async () => {
    await addDoc(apartmentsCollectionRef, {
      address: newAddress,
      rating: newRating,
      rent: newRent,
      year: newYear,
    });
  };

  useEffect(() => {
    const getApartments = async () => {
      const q = query(
        collection(db, "apartments"),
        where("year", "==", "2022")
      );
      const data = await getDocs(q);
      // const data = await getDocs(apartmentsCollectionRef);
      setApartments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getApartments();
  }, []);
  return (
    <div className="text-center mx-8 my-2 py-6 bg-slate-50 rounded-lg h-screen">
      <h1 className="text-3xl font-semibold">Create Apartment</h1>
      <input
        className="rounded-lg border-2 border-gray-400 p-2 m-1"
        placeholder="Apartment..."
        type="text"
        onChange={(event) => {
          setNewAddress(event.target.value);
        }}
      />
      <input
        className="rounded-lg border-2 border-gray-400 p-2 m-1"
        type="number"
        placeholder="Rent..."
        onChange={(event) => {
          setNewRent(event.target.value);
        }}
      />
      <input
        className="rounded-lg border-2 border-gray-400 p-2 m-1"
        type="number"
        placeholder="Year..."
        onChange={(event) => {
          setNewYear(event.target.value);
        }}
      />
      <input
        className="rounded-lg border-2 border-gray-400 p-2 m-1"
        type="number"
        placeholder="Rating..."
        onChange={(event) => {
          setNewRating(event.target.value);
        }}
      />
      <button
        className="bg-gray-200 rounded-md p-3 m-2 hover:bg-gray-600 hover:text-white duration-200"
        onClick={createApartment}
      >
        Create Apartment
      </button>
      <h1 className="text-3xl my-5 font-semibold">Apartment Directory</h1>
      <div className="grid gird-cols-4 gap-4">
        {apartments &&
          apartments.map((apartment) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="rounded-lg p-5 mx-5 bg-gray-600 grid grid-cols-3">
                <div className="col col-span-1">
                  <div className="flex justify-center align-middle m-4">
                    <HiHome className="text-white text-9xl" />
                  </div>
                </div>
                <div className="col col-span-2 text-left m-3">
                  <h1 className="text-white text-3xl font-semibold py-2">
                    {apartment.address}
                  </h1>
                  <div className="rounded-lg border-2 border-white p-2">
                    <p className="text-white">Rent: {apartment.rent}</p>
                    <p className="text-white">Year: {apartment.year}</p>
                    <p className="text-white">Rating: {apartment.rating}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Table;
