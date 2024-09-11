"use client";

import React from "react";
import BarChart from "@/components/ui/charts/BarChart";

const Tracker = () => {
  const habitsData = [
    { type: "Lecture", quantity: 12 },
    { type: "Meditation", quantity: 80 },
    { type: "Exercises", quantity: 50 },
    { type: "Projects", quantity: 10 },
    { type: "Study", quantity: 7 },
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
