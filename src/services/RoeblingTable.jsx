import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { MTable } from "@/components";

const RoeblingTable = () => {
  const [apartments, setApartments] = useState([]);
  const apartmentsCollectionRef = collection(db, "apartments");

  useEffect(() => {
    const getApartments = async () => {
      const q = query(
        collection(db, "apartments"),
        where("streetname", "==", "roebling")
      );
      const data = await getDocs(q);
      setApartments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getApartments();
  }, []);

  return <div>{apartments && <MTable ApartmentProp={apartments} />}</div>;
};

export default RoeblingTable;
