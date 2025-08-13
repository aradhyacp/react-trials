import React, { useState } from "react";
import { useTodo } from "../context";

const TodoElement = ({ todo }) => {
  const { deleteTodo, updateTodo, toggleComplete } = useTodo();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMessage, setTodoMessage] = useState(todo.task);
  const editTodo = () => {
    if (!todoMessage.trim()) return;
    updateTodo(todo.id, { ...todo, task: todoMessage });
    setIsTodoEditable(false);
  };
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div>
      <div
        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 duration-300  ${
          todo.completed
            ? "bg-[#ccecb18e] text-black"
            : "bg-[#2f2f24] text-white"
        } items-center justify-between`}
      >
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              className={`
    w-5 h-5
    appearance-none
    rounded
    border-2
    border-[#55523a]
    checked:border-transparent
    checked:bg-[#f9e106]
    bg-[#181811]
    cursor-pointer
    transition-all
    duration-200
    relative
    flex
    justify-center
    items-center
    shrink-0
    after:content-['✓']
    after:text-[#181811]
    after:text-sm
    after:font-bold
    after:scale-0
    checked:after:scale-100
    mr-2
  `}
              checked={todo.completed}
              onChange={toggleCompleted}
            />
            <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg py-2 ${
                isTodoEditable ? "border-red-600/50 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={todoMessage}
              onChange={(e) => setTodoMessage(e.target.value)}
              readOnly={!isTodoEditable}
            />
          </div>
          <div className={todo.completed ? `text-green-400` : `text-red-300`}>
            {todo.completed ? "Finished" : "Pending"}
          </div>
        </div>
        {/* Edit, Save Button */}
        <div className="flex flex-row gap-4">
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            onClick={() => {
              if (todo.completed) return;

              if (isTodoEditable) {
                editTodo();
              } else setIsTodoEditable((prev) => !prev);
            }}
            disabled={todo.completed}
          >
            {isTodoEditable ? (
              <div className="size-5 text-[#2fc755] cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-save-icon lucide-save"
                >
                  <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                  <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
                  <path d="M7 3v4a1 1 0 0 0 1 1h7" />
                </svg>
              </div>
            ) : (
              <div className="size-5 text-black cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-pencil-icon lucide-pencil"
                >
                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                  <path d="m15 5 4 4" />
                </svg>
              </div>
            )}
          </button>
          {/* Delete Todo Button */}
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={() => deleteTodo(todo.id)}
          >
            <div className="size-5 text-red-500 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-delete-icon lucide-delete"
              >
                <path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" />
                <path d="m12 9 6 6" />
                <path d="m18 9-6 6" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoElement;
