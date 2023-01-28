import React from "react";
import { Table } from "@/components";

const apartments = () => {
  return (
    <div className="text-center mx-8 mb-2 py-6 bg-slate-50 rounded-lg h-screen">
      <h1 className="text-3xl font-semibold">Create Apartment</h1>
      <Table />
    </div>
  );
};

export default apartments;
