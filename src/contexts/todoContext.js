import { createContext,useContext } from "react";

export const TodoContext = createContext({ //we will keep here everything that will be needed by every components enclosed by provider tag
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
}) 

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const Todoprovider=TodoContext.Provider