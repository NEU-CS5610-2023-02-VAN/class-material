import "../style/todoList.css";

import { useState } from "react";
import useTodos from "../hooks/useTodos";
import { useAuthToken } from "../AuthTokenContext";

export default function Todos() {
  const [newItemText, setNewItemText] = useState("");
  const [todosItems, setTodosItems] = useTodos();
  const { accessToken } = useAuthToken();

  async function insertTodo(title) {
    const data = await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        title: title,
      }),
    });
    if (data.ok) {
      const todo = await data.json();
      return todo;
    } else {
      return null;
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!newItemText) return;

    const newTodo = await insertTodo(newItemText);
    if (newTodo) {
      setTodosItems([...todosItems, newTodo]);
      setNewItemText("");
    }
  };

  return (
    <div className="todo-list">
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className="todo-form"
        autoComplete="off"
      >
        <input
          type="text"
          name="item"
          id="item"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
        />
        <button type="submit">+ Add Item</button>
      </form>

      <ul className="list">
        {todosItems.map((item) => {
          return (
            <li key={item.id} className="todo-item">
              <input
                onChange={(e) => console.log(e.target)}
                value={item.id}
                type="checkbox"
                checked={item.completed}
              />
              <span className="itemName">{item.title}</span>
              <button aria-label={`Remove ${item.title}`} value={item.id}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
