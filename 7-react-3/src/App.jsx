import React, { useState } from "react";
import GeoForm from "./components/GeoForm";
import WeatherChart from "./components/WeatherChart";
import "./App.css";

export default function App() {
  const [latLng, setLatLng] = useState(null); // {lat: 12, lng: 333}

  return (
    <div className="app">
      <GeoForm setLatLng={setLatLng} />

      {latLng && <WeatherChart latLng={latLng} />}
    </div>
  );
}
