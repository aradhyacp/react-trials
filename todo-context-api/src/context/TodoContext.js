import React, { useContext } from "react";

export const TodoContext = React.createContext({
    todos: [{
        id: 1,
        task: "message here",
        completed: false
    }],
    addTodo: (task)=>{},
    deleteTodo: (id)=>{},
    updateTodo: (id,task) =>{},
    toggleComplete: (id)=>{}

})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider