import React from "react";
import "./App.css";

type Todo = {
  id: number;
  title: string;
};

const todos: Todo[] = [
  { id: 1, title: "Create frontend Dockerfile" },
  { id: 2, title: "Create backend API" },
  { id: 3, title: "Deploy services to AWS ECS" },
];

function App() {
  return (
    <main className="app">
      <section className="card">
        <h1>To-Do List Application</h1>
        <h2>Version 2.0 - New Feature Deployed</h2>
        <p className="subtitle">Frontend service running in React + TypeScript</p>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;