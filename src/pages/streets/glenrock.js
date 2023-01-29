import React from "react";
import { Filters } from "../../components";
import GlenrockTable from "../../services/GlenrockTable";

const glenrock = () => {
  return (
    <div className="text-center mb-2 py-6 bg-slate-50 rounded-lg h-screen">
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold">Glenrock</h1>
      </div>
      <div className="flex justify-center">
        <Filters />
      </div>
      <GlenrockTable />
    </div>
  );
};

export default glenrock;
