import React, { useState } from "react";
import { GITHUB_API_URL } from "../constants";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";
import "../style/home.css";

function App() {
  const [githubUsername, setGithubUsername] = useState("");
  const { setUser } = useUser();
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();

    // maka a github api call to get the profile info
    // save user info to setUser

    const res = await fetch(`${GITHUB_API_URL}/users/${githubUsername}`);
    const data = await res.json();
    if (data.id) {
      setUser(data);
      navigate("/app");
    } else {
      // TODO show error message or username not found
    }
  };

  return (
    <div className="home">
      <form onSubmit={formSubmit} className="home-form">
        <div>
          <label htmlFor="username">Enter your Github username:</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            onChange={(e) => setGithubUsername(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Enter App" />
        </div>
      </form>
    </div>
  );
}

export default App;
