

import React, { useState } from "react";

function TodoListSection({ title }: { title: string }) {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-section">
      <h2>{title}</h2>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder={`Neue Aufgabe für ${title}`}
      />
      <button onClick={addTask}>Hinzufügen</button>
      <ul>
        {tasks.map((task, idx) => (
          <li key={idx}>
            {task}
            <button onClick={() => removeTask(idx)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div className="page">
      <h1>Meine Aufgaben</h1>
      <div className="lists-wrapper">
        <TodoListSection title="Kochen" />
        <TodoListSection title="Putzen" />
        <TodoListSection title="Lernen" />
      </div>
    </div>
  );
}
