import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./chart.css";
import Chart from "react-apexcharts";
import Regularchart from "./Regularchart";

const ApexChart = ({ randomnum, setRandomnum }) => {
  const market = [
    { year: 1928, percent: 43.81 },
    { year: 1929, percent: -8.42 },
    { year: 1930, percent: -25.12 },
    { year: 1931, percent: -43.84 },
    { year: 1932, percent: -8.64 },
    { year: 1933, percent: 54.22 },
    { year: 1934, percent: -1.49 },
    { year: 1935, percent: 47.71 },
    { year: 1936, percent: 31.94 },
    { year: 1937, percent: -35.33 },
    { year: 1938, percent: 29.63 },
    { year: 1939, percent: -0.83 },
    { year: 1940, percent: -9.78 },
    { year: 1941, percent: -11.61 },
    { year: 1942, percent: 20.34 },
    { year: 1943, percent: 25.89 },
    { year: 1944, percent: 19.03 },
    { year: 1945, percent: 35.82 },
    { year: 1946, percent: 8.3 },
    { year: 1947, percent: 5.8 },
    { year: 1948, percent: 5.5 },
    { year: 1949, percent: 18.29 },
    { year: 1950, percent: 31.81 },
    { year: 1951, percent: 24.02 },
    { year: 1952, percent: 18.38 },
    { year: 1953, percent: -0.55 },
    { year: 1954, percent: 52.56 },
    { year: 1955, percent: 31.56 },
    { year: 1956, percent: 6.65 },
    { year: 1957, percent: -10.79 },
    { year: 1958, percent: 43.32 },
    { year: 1959, percent: 11.96 },
    { year: 1960, percent: 0.96 },
    { year: 1961, percent: 26.89 },
    { year: 1962, percent: -8.73 },
    { year: 1963, percent: 22.61 },
    { year: 1964, percent: 16.48 },
    { year: 1965, percent: 12.45 },
    { year: 1966, percent: -10.06 },
    { year: 1967, percent: 23.83 },
    { year: 1968, percent: 11.03 },
    { year: 1969, percent: -8.63 },
    { year: 1970, percent: 3.84 },
    { year: 1971, percent: 14.31 },
    { year: 1972, percent: 18.98 },
    { year: 1973, percent: -14.66 },
    { year: 1974, percent: -26.95 },
    { year: 1975, percent: 37.2 },
    { year: 1976, percent: 23.84 },
    { year: 1977, percent: -7.18 },
    { year: 1978, percent: 6.56 },
    { year: 1979, percent: 18.69 },
    { year: 1980, percent: 32.5 },
    { year: 1981, percent: -4.91 },
    { year: 1982, percent: 21.55 },
    { year: 1983, percent: 22.56 },
    { year: 1984, percent: 6.27 },
    { year: 1985, percent: 31.73 },
    { year: 1986, percent: 18.67 },
    { year: 1987, percent: 5.25 },
    { year: 1988, percent: 16.61 },
    { year: 1989, percent: 31.69 },
    { year: 1990, percent: -3.1 },
    { year: 1991, percent: 30.47 },
    { year: 1992, percent: 7.62 },
    { year: 1993, percent: 10.08 },
    { year: 1994, percent: 1.32 },
    { year: 1995, percent: 37.58 },
    { year: 1996, percent: 23.06 },
    { year: 1997, percent: 33.36 },
    { year: 1998, percent: 28.58 },
    { year: 1999, percent: 21.04 },
    { year: 2000, percent: -9.1 },
    { year: 2001, percent: -11.98 },
    { year: 2002, percent: -22.1 },
    { year: 2003, percent: 28.68 },
    { year: 2004, percent: 10.74 },
    { year: 2005, percent: 4.91 },
    { year: 2006, percent: 15.79 },
    { year: 2007, percent: 5.49 },
    { year: 2008, percent: -37.22 },
    { year: 2009, percent: 26.46 },
    { year: 2010, percent: 15.06 },
    { year: 2011, percent: 2.1 },
    { year: 2012, percent: 16.0 },
    { year: 2013, percent: 32.39 },
    { year: 2014, percent: 13.69 },
    { year: 2015, percent: 1.38 },
    { year: 2016, percent: 11.96 },
    { year: 2017, percent: 21.83 },
    { year: 2018, percent: -4.38 },
    { year: 2019, percent: 31.49 },
    { year: 2020, percent: 18.4 },
    { year: 2021, percent: 28.71 },
  ];
  const [quit, setQuit] = useState(false);

  const [info, setInfo] = useState([
    { year: market[randomnum].year, money: 10000 },
  ]);

  const [series, setSeries] = useState([
    {
      name: "Desktops",
      data: info.map((item) => item.money),
    },
  ]);

  const options = {
    chart: {
      height: 200,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: info.map((item) => item.year),
    },
  };

  function handleclick() {
    handleclick2();
    console.log(market[randomnum].percent);
    console.log(info[info.length - 1].year);
    console.log(info[info.length - 1].money);
    setRandomnum(randomnum + 1);
    const newYear = info[info.length - 1].year + 1;
    let newMoney;
    if (quit) {
      newMoney = info[info.length - 1].money;
    } else {
      newMoney =
        info[info.length - 1].money +
        (info[info.length - 1].money / 100) * market[randomnum].percent;
    }
    setInfo((prev) => [...prev, { year: newYear, money: newMoney }]);
    console.log(info);
    setSeries((prevSeries) => [
      {
        ...prevSeries[0],
        data: [...prevSeries[0].data, newMoney],
      },
    ]);
  }

  const [info2, setInfo2] = useState([
    { year: market[randomnum].year, money: 10000 },
  ]);

  const [series2, setSeries2] = useState([
    {
      name: "Desktops",
      data: info.map((item) => item.money),
    },
  ]);

  const options2 = {
    chart: {
      height: 200,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: info.map((item) => item.year),
    },
  };

  function handleclick2() {
    console.log(market[randomnum].percent);
    console.log(info2[info2.length - 1].year);
    console.log(info2[info2.length - 1].money);
    const newYear = info2[info2.length - 1].year + 1;
    const newMoney =
      info2[info2.length - 1].money +
      (info2[info.length - 1].money / 100) * market[randomnum].percent;
    setInfo2((prev) => [...prev, { year: newYear, money: newMoney }]);
    console.log(info2);
    setSeries2((prevSeries) => [
      {
        ...prevSeries[0],
        data: [...prevSeries[0].data, newMoney],
      },
    ]);
  }

  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["you", "market"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [info[info.length - 1].money, info2[info2.length - 1].money],
        // data: [
        //     { y: info[info.length-1].money, color: "blue" }, // Red color for the first bar
        //     { y: info2[info2.length-1].money, color: "#0000FF" }, // Blue color for the second bar
        //   ],
      },
    ],
    fill: {
      colors: ["#1A73E8", "#B32824"],
    },
  };
  return (
    <div>
      <div id="chart">
        <div className="twochart">
          <div className="chart">
            <h3>you:</h3>
            <ReactApexChart
              options={options}
              series={series}
              type="line"
              height={350}
            />
          </div>
          <div className="chart">
            <h3>market:</h3>
            <ReactApexChart
              options={options2}
              series={series2}
              type="line"
              height={350}
            />
          </div>
        </div>
      </div>
      <div className="center">
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          width="500"
        />
      </div>
      <div>
        <br />
        {/* <Regularchart info={info} info2={info2} /> */}
      </div>
      <div className="center">
        <button onClick={handleclick}>run a year</button>
        <button onClick={() => setQuit((prev) => !prev)}>
          {quit ? "buy" : "sell"}
        </button>
      </div>
    </div>
  );
};

export default ApexChart;
