import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, addDoc, where, query } from "firebase/firestore";


const AddApartment = () => {
  const apartmentsCollectionRef = collection(db, "apartments");
  const [newAddress, setNewAddress] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [newRent, setNewRent] = useState(0);
  const [newYear, setNewYear] = useState(0);
  const [newStreetName, setNewStreetName] = useState("");
  const [numBath, setNumBath] = useState("");
  const [numBed, setNumBed] = useState("");
  const [uploaded, setUpload] = useState(false);

  const convertInt = (data) => {
    return parseInt(data);
  };

  const createApartment = async () => {
    setUpload(true);
    await addDoc(apartmentsCollectionRef, {
      address: newAddress,
      rating: convertInt(newRating),
      rent: convertInt(newRent),
      year: convertInt(newYear),
      streetname: newStreetName,
      beds: convertInt(numBed),
      baths: convertInt(numBath),
    });
  
  };
  return (
    <form>
      <input
        className="rounded-lg border-2 border-gray-400 p-2 m-1"
        placeholder="Apartment"
        type="text"
        required
        onChange={(event) => {
          setNewAddress(event.target.value);
        }}
      />
      <input
        className="rounded-lg border-2 border-gray-400 p-2 m-1"
        type="number"
        placeholder="Rent"
        required
        onChange={(event) => {
          setNewRent(event.target.value);
        }}
      />
      <input
        className="rounded-lg border-2 border-gray-400 p-2 m-1"
        type="number"
        placeholder="Year"
        required
        onChange={(event) => {
          setNewYear(event.target.value);
        }}
      />
      <input
        className="rounded-lg border-2 border-gray-400 p-2 m-1"
        type="number"
        placeholder="Rating"
        required
        onChange={(event) => {
          setNewRating(parseInt(event.target.value));
        }}
      />
      <input
        className="rounded-lg border-2 border-gray-400 p-2 m-1"
        placeholder="Street Name"
        required
        onChange={(event) => {
          setNewStreetName(event.target.value.toLowerCase());
        }}
      />
      <input
        className="rounded-lg border-2 border-gray-400 p-2 m-1"
        type="number"
        placeholder="Number of Beds"
        required
        onChange={(event) => {
          setNumBed(parseInt(event.target.value));
        }}
      />
      <input
        className="rounded-lg border-2 border-gray-400 p-2 m-1"
        type="number"
        placeholder="Number of Baths"
        required
        onChange={(event) => {
          setNumBath(parseInt(event.target.value));
        }}
      />
      <br></br>

      {numBath && (
        <button
          id="myButton"
          className="bg-gray-200 rounded-md p-3 m-2 hover:bg-gray-600 hover:text-white duration-200"
          onClick={createApartment}
        >
          Create Apartment
        </button>
      )}
    </form>
  );
};

export default AddApartment;
