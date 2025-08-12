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
            <input type="text" placeholder='Write your todo' className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5' value={task} onChange={(e)=>setTask(e.target.value)}/>
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 cursor-pointer">
                Add
            </button>
        </form>
    </div>
  )
}

export default TodoForm