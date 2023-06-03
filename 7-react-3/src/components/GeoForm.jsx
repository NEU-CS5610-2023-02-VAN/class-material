import React, { useState } from "react";

const apiUrl =
  "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCAUphBTKR28ZDZjYGys_NXANgx4uw5tPo";

export default function GeoForm({ setLatLng }) {
  const [city, setCity] = useState("");

  const getLatLng = (city) => {
    fetch(`${apiUrl}&address=${city}`)
      .then((res) => res.json())
      .then((response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLatLng({ lat, lng });
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    getLatLng(city);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </form>
  );
}
