import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context";
import TodoForm from "./components/TodoForm";
import TodoElement from "./components/TodoElement";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };
  const updateTodo = (id, task) => {
    setTodos((prev) => prev.map((x) => (x.id === id ? task : x)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((x) => x.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((x) => (x.id === id ? { ...x, completed: !x.completed } : x))
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="min-h-screen bg-green-400 flex flex-col gap-5 items-center py-40">
        <div className="">
          <div className="text-2xl font-bold text-center mb-8 mt-2 text-white">
            Manage your Todos
          </div>
        </div>
        <div className="">
          input goes here
          <TodoForm />
        </div>
        <div className="">
          {todos.map((x) => (
            <div className="" key={x.id}>
              <TodoElement todo={x} />
            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
