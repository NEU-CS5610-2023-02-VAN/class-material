import { useState, useEffect } from "react";
import { useAuthToken } from "../AuthTokenContext";

export default function useTodos() {
  const [todosItems, setTodosItems] = useState([]);
  const { accessToken } = useAuthToken();

  useEffect(() => {
    async function getTodosFromApi() {
      const data = await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const todos = await data.json();

      setTodosItems(todos);
    }

    if (accessToken) {
      getTodosFromApi();
    }
  }, [accessToken]);

  return [todosItems, setTodosItems];
}
