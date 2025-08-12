import React, { useState } from 'react'
import { useTodo } from '../context'

const TodoForm = () => {
    const [task,setTask] = useState("")
    const {addTodo} = useTodo();
    const add =(e)=>{
        e.preventDefault();
        if(!task.trim()) return

        addTodo({task,completed:false})
        console.log(task);
        setTask("")
        
        
    }
  return (
    <div>
        <form className='flex' onSubmit={add}>
            <input type="text" placeholder='Write your todo' className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-3' value={task} onChange={(e)=>setTask(e.target.value)}/>
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 cursor-pointer flex gap-3 items-center">
                <span>Add</span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
            </button>
        </form>
    </div>
  )
}

export default TodoForm