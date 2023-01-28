import React from "react";
import Link from "next/link";
import { Table } from "@/components";

const apartments = () => {
  return (
    <div className="text-center mx-8 mb-2 py-6 bg-slate-50 rounded-lg h-screen">
      <div className="grid grid-cols-3 my-5">
        <div className="col col-span-1" />
        <div className="col col-span-1">
          <h1 className="text-3xl font-semibold">Apartment Directory</h1>
        </div>
        <div className="col col-span-1 float-right">
          <button className="bg-gray-700 rounded-lg text-white m-2 p-2 hover:opacity-50 duration-200">
            <Link href="/addApartment">Create a Listing</Link>
          </button>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default apartments;
