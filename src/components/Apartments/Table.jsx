import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, addDoc, where, query } from "firebase/firestore";
import { HiHome } from "react-icons/hi";

const Table = () => {
  const [apartments, setApartments] = useState([]);
  const apartmentsCollectionRef = collection(db, "apartments");

  useEffect(() => {
    const getApartments = async () => {
      const q = query(collection(db, "apartments"));
      const data = await getDocs(q);
      // const data = await getDocs(apartmentsCollectionRef);
      setApartments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getApartments();
  }, []);
  return (
    <div className="text-center mx-8 my-2 py-6 bg-slate-50 rounded-lg h-screen">
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
