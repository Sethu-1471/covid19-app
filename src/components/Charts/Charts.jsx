import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/index";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Charts.module.css";

const Charts = ({ data, country }) => {
  const [dailyData, setdailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setdailyData(await fetchDailyData());
    };
    fetchAPI();

    console.log(dailyData);
  }, []);

  const linechart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "blue",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barchart = data ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "people",
            backgroundColor: ["blue", "green", "red"],
            data: [data.confirmed.value, data.recovered.value, data.deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state is ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? barchart : linechart}</div>
  );
};

export default Charts;
