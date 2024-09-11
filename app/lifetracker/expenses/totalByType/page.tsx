"use client";

import React from "react";
import PieChart from "@/components/ui/charts/PieChart";

const totalByType = () => {
  return (
    <div className="font-mono justify-center text-center">
      <div>
        <h1 className="text-3xl">Total By Type - Pie Chart</h1>
      </div>
      <div>
        <PieChart />
      </div>
      <div className="text-2xl rounded-xl shadow">
        <h2 className="bg-orange-300 text-white rounded-lg">Total Expend</h2>
        <div>
          <span>ARS: 1000</span>
        </div>
        <div>
          <span>USDT: 1000</span>
        </div>
      </div>
    </div>
  );
};

export default totalByType;
