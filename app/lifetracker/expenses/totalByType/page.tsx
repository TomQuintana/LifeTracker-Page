"use client";

import React, { useEffect, useState } from "react";
import PieChart from "@/components/ui/charts/PieChart";
import { getExpensesByType } from "@/services/expenses";
import { useSession } from "next-auth/react";


const totalByType = () => {

return (
    <div className="font-mono flex flex-row justify-center items-start gap-8">
      {/* Gráfico */}
      <div className="lex-1 text-center rounded-3xl shadow">
        <h1 className="text-3xl mb-4">Total By Type - Pie Chart</h1>
        <PieChart
          dataExpenses={{
            expenses: {
              food: 4000,
              goOut: 10,
              other: 5000,
              fixed: 1000,
              books: 2000,
              fubol: 100,
              montly: 1000,
              target: 1000,
            }
          }}
        />
      </div>

      {/* TotalCard */}
      <div className="text-2xl rounded-xl shadow flex-1 text-center p-4 mt-16">
        <h2 className="bg-orange-300 text-white rounded-lg p-2">Total Expend</h2>
        <div className="mt-4">
          <span>ARS: 1000</span>
        </div>
        <div className="mt-2">
          <span>USDT: 1000</span>
        </div>
      </div>
    </div>
  );
};

export default totalByType;
