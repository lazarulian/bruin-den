import React from "react";
import { AddApartment } from "@/components";

const addApartment = () => {
  return (
    <div className="mx-12 px-8 my-8">
      <div className="grid lg:grid-cols-3 lg:gap-3">
        <div className="col-span 1" />
        <div className="text-center m-8 p-8 bg-slate-300 rounded-xl">
          <h1 className="font-semibold text-gray-700 text-4xl pb-4">
            Add Apartment
          </h1>
          <AddApartment />
        </div>
        <div className="col-span-1" />
      </div>
    </div>
  );
};

export default addApartment;
