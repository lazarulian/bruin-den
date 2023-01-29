import React from "react";
import { useState, useEffect } from "react";
import { Filters, MTable } from "../../components";
import { db } from "../../firebase-config";
import { collection, getDocs, query } from "firebase/firestore";
import KeltonTable from "../../services/KeltonTable";

const kelton = () => {
  return (
    <div className="text-center mb-2 py-6 bg-slate-50 rounded-lg h-screen">
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold">Kelton</h1>
      </div>
      <div className="flex justify-center">
        <Filters />
      </div>
      <KeltonTable />
    </div>
  );
};

export default kelton;
