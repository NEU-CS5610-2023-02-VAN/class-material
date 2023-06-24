import { useEffect, useState } from "react";
import { useSocket } from "./context/socket";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const socket = useSocket();

  const handleChangeMessage = (msg) => setChats((c) => [...c, msg]);

  useEffect(() => {
    socket.on("chat.message", handleChangeMessage);

    return () => {
      socket.off("chat.message", handleChangeMessage);
    };
  }, [socket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("chat.message", message);
      setMessage("");
    }
  };

  return (
    <div className="App">
      <ul id="messages">
        {chats.map((chat, index) => (
          <li key={index}>{chat}</li>
        ))}
      </ul>
      <form id="form" action="" onSubmit={handleSubmit}>
        <input
          id="input"
          autoComplete="off"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default App;
