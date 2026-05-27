import { useState } from "react";
export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  };
  return (
    <div style={{ padding: 20 }}>
      <h1>Todo App</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.text}</li>
        ))}
      </ul>
    </div>
  );
}
