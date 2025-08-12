import React, { useState } from "react";
import { useTodo } from "../context";

const TodoForm = () => {
  const [task, setTask] = useState("");
  const { addTodo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    addTodo({ task, completed: false });
    console.log(task);
    setTask("");
  };
  return (
      <form className="flex w-full" onSubmit={add}>
        <input
          type="text"
          placeholder="Write your todo"
          className="flex w-[60%] overflow-hidden text-white focus:outline-0 focus:ring-0 border border-[#55523a] px-3 py-4 bg-[#27261b] focus:border-[#55523a] placeholder:text-[#bbb89b] p-[15px] text-base font-normal leading-normal rounded-l-lg"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-[#f9e106] text-[#181811] shrink-0 cursor-pointer flex gap-3 items-center hover:bg-[#f9e106eb]"
        >
          <span>Add</span>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-move-right-icon lucide-move-right"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </svg>
        </button>
      </form>
  );
};

export default TodoForm;
