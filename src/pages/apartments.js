import React from "react";
import Link from "next/link";
import { MTable, Filters } from "@/components";
import MainTable from "../services/MainTable";

const apartments = () => {
  return (
    <div className="text-center mb-2 py-6 bg-slate-50 rounded-lg h-screen">
      <div className="container mx-auto lg:px-10 mb-8 px-2">
        <div className="flex justify-center">
          <h1 className="text-3xl font-semibold">Apartment Directory</h1>
        </div>
        <div className="flex justify-center">
          <Filters />
        </div>
        <MainTable />
      </div>
    </div>
  );
};

export default apartments;
