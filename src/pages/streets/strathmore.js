import React from "react";
import { Filters } from "../../components";
import StrathmoreTable from "../../services/StrathmoreTable";

const strathmore = () => {
  return (
    <div className="text-center mb-2 py-6 bg-slate-50 rounded-lg h-screen">
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold">Strathmore</h1>
      </div>
      <div className="flex justify-center">
        <Filters />
      </div>
      <StrathmoreTable />
    </div>
  );
};

export default strathmore;
