import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  };

  const removeTodo = (idx: number) => {
    setTodos(todos.filter((_, i) => i !== idx));
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button onClick={addTodo} disabled={!input.trim()}>
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.length === 0 && <li className="empty">No todos yet!</li>}
        {todos.map((todo, idx) => (
          <li key={idx} className="todo-item">
            <span>{todo}</span>
            <button onClick={() => removeTodo(idx)} className="remove-btn">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
