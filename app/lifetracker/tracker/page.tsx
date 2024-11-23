"use client";

import React from "react";
import BarChart from "@/components/ui/charts/BarChart";
import { useSession } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';

const Tracker = () => {

  const {data: session} = useSession();
  console.log(session);
  

  const habitsData = [
    { type: "Lecture", quantity: 4 },
    { type: "Lecture", quantity: 1 },
    { type: "Meditation", quantity: 0.5 },
    { type: "Exercises", quantity: 5 },
    { type: "Projects", quantity: 3 },
    { type: "Study", quantity: 6 },
    { type: "Phone", quantity: 7 },
  ];

  return (
    <div className="font-mono text-3xl justify-center text-center">
      <h1>Tracker Habits - Bar Chart</h1>
      <div className="mt-4">
        <BarChart habitsData={habitsData} />
      </div>
    </div>
  );
};

export default Tracker;
