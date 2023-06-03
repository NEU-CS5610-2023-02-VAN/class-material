import React, {useState, useEffect} from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// if today is Tuesday it generates ["Tuesday", "Wednesday", ... , "Monday"]
const labels = [...Array(7)].map((_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i);
  return days[date.getDay()];
});

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltips: { mode: "index", intersect: false },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },

    y: {
      grid: {
        display: false,
      },
    },
  },
};

const apiUrl =
  "https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,minutely&units=metric&appid=7273d369c1f620a53040d4dcb4acdf44";


export default function WeatherChart({latLng}) {
  const [datasets, setDatasets] = useState([]);
  

  // fetch('....')

  // DONT FETCH HERE
  // ONLY FETCH within:
  // 1: callbacks (button click, form submit, etc)
  // 2: useEffects
  // fetch(`${apiUrl}&lat=${latLng.lat}....`)

  // useEffect(() => {
  // //  this will only run on the first render
  //   // fetch(`${apiUrl}&lat=${latLng.lat}....`)
  //   // console.log('======')
  // }, [])

  function formatWeatherData(data) {
    return [
      {
        label: "Highs",
        backgroundColor: "#EC9CAC",
        borderColor: "#EC9CAC",
        data: data.daily.map((day) => day.temp.max),
      },
      {
        label: "Lows",
        backgroundColor: "#9CCAF6",
        borderColor: "#9CCAF6",
        data: data.daily.map((day) => day.temp.min),
      },
    ];
  }

  useEffect(() => {
    // get the weather from latLong
    async function getWeatherData() {
      const res = await fetch(`${apiUrl}&lat=${latLng.lat}&lon=${latLng.lng}`);
      const data = await res.json();

      const formattedData = formatWeatherData(data);
      setDatasets(formattedData);
    }

    getWeatherData();
  }, [latLng])

  return (
    <div className="chart">
      <Bar options={options} data={{ labels, datasets }} />
    </div>
  );
}
