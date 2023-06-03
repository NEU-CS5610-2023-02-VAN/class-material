import React from "react";

export default function Pet({
  id,
  name,
  age,
  city,
  image,
  selected,
  adoptPet,
  setPets,
}) {
  return (
    <div className={`pet ${selected ? "pet-selected" : ""}`}>
      <h3>Hi my name is {name}</h3>
      <p>I'm {age} years old</p>
      <p>I live in {city}</p>
      <div>
        <img src={image} alt="pet"></img>
      </div>
      <button
        onClick={() => {
          adoptPet(id);
        }}
      >
        {" "}
        Adopt Me 🐶
      </button>
      <button onClick={() => setPets([])}>Delete All</button>
    </div>
  );
}
