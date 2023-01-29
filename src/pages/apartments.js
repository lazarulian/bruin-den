import React from "react";
import Link from "next/link";
import { MTable, Filters } from "@/components";

const apartments = () => {
  return (
    <div className="text-center mb-2 py-6 bg-slate-50 rounded-lg h-screen">
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold">Apartment Directory</h1>
      </div>
      <div className="flex justify-center">
        <Filters />
      </div>
      <MTable />
    </div>
  );
};

export default apartments;
