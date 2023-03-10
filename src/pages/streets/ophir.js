import React from "react";
import { Filters } from "../../components";
import OphirTable from "../../services/OphirTable";

const ophir = () => {
  return (
    <div className="text-center mb-2 py-6 bg-slate-50 rounded-lg h-screen">
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold">Ophir</h1>
      </div>
      <div className="flex justify-center">
        <Filters />
      </div>
      <OphirTable />
    </div>
  );
};

export default ophir;
