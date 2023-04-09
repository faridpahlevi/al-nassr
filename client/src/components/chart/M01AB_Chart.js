import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

import { Bar, Line } from "react-chartjs-2";
import React, { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip
);

const M01AB_Chart = () => {
  const [backendData, setBackendData] = useState([]);
  const freq = [];
  const interval = [];

  useEffect(() => {
    fetch("/M01AB")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  backendData === "undefined" ? (
    <p>Loading...</p>
  ) : (
    backendData.map((value, i) => {
      return (interval[i] = value[0]), (freq[i] = value[1]);
    })
  );

  var barData = {
    labels: interval,
    datasets: [
      {
        label: "M01AB",
        data: freq,
        backgroundColor: "#87A2FB",
      },
    ],
  };

  var lineData = {
    labels: interval,
    datasets: [
      {
        label: "M01AB",
        data: freq,
        backgroundColor: "#87A2FB",
        borderColor: "gray",
        borderWidth: 1,
        tension: 0.3,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      <div>
        <Bar data={barData} height={400} options={options} />
      </div>
      <div>
        <Line data={lineData} height={400} options={options} />
      </div>
    </div>
  );
};

export default M01AB_Chart;
