import React from "react";
import { Filters } from "../../components";
import MidvaleTable from "../../services/MidvaleTable";

const midvale = () => {
  return (
    <div className="text-center mb-2 py-6 bg-slate-50 rounded-lg h-screen">
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold">Midvale</h1>
      </div>
      <div className="flex justify-center">
        <Filters />
      </div>
      <MidvaleTable />
    </div>
  );
};

export default midvale;
