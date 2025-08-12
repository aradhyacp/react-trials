import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context";
import TodoForm from "./components/TodoForm";
import TodoElement from "./components/TodoElement";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <div className="min-h-screen bg-[#181811] flex grow flex-col w-screen">
        <Header />
        <div className="flex flex-col items-center">
          <div className="text-white mx-auto text-2xl font-bold">Manage your Todos</div>
          <TodoForm />
        </div>
        {/* <div className="w-screen">
          <div className="text-2xl font-bold text-center mb-8 mt-2 text-white">
            Manage your Todos
          </div>
        </div>
        <div className="w-[60%]">
          <TodoForm />
        </div>
        <div className="flex flex-col gap-3 w-[60%]">
          {todos.map((x) => (
            <div className="" key={x.id}>
              <TodoElement todo={x} />
            </div>
          ))}
        </div> */}
        <div className="flex flex-col items-center mt-10">
          <div className="text-white">Todo list</div>
          <div className="flex flex-col gap-3 w-[60%]">
          {todos.map((x) => (
            <div className="" key={x.id}>
              <TodoElement todo={x} />
            </div>
          ))}
        </div>
        </div>
        <Footer />
      </div>
    </TodoProvider>
  );
}

export default App;
