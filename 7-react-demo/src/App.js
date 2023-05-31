import "./app.css";

import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("blue");

  // console.log(name)

  return (
    <div className="home">
      <h1>Test React</h1>
      <p>lorem sdkfjhsdk fjhg sdjfhg jsdhfg jsdhfgjhdfs</p>
      <p>Name is: {name}</p>
      <p>Counter is : {counter}</p>
      <p className={`color-${color}`}>Current color is {color}</p>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button
        onClick={() => {
          setName("Cristian 2");
          // DONT DO THIS
          // name = 'James'
        }}
      >
        Test
      </button>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment Counter
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrement Counter
      </button>
    </div>
  );
}

export default App;
