import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";

const DashboardChartsBanner = () => {
  const data = [
    { id: 0, value: 20, label: "All Requests" },
    { id: 1, value: 5, label: "Pending Requests" },
    { id: 2, value: 10, label: "Issued Books" },
    { id: 3, value: 10, label: "Request Books" },
  ];
  const LineChartData = [
    {
      data: [20, 5, 10, 10],
    },
  ];
  return (
    <div className="dashboard-piechart">
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: {
              innerRadius: 30,
              additionalRadius: -30,
              color: "gray",
            },
          },
        ]}
        width={500}
        height={200}
      />
      <LineChart
        xAxis={[{ data: [1, 2, 3, 4] }]}
        series={LineChartData}
        width={500}
        height={300}
      />
    </div>
  );
};

export default DashboardChartsBanner;
