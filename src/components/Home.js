
import TodoList from "./TodoList"
import {v4 as uuid} from "uuid"
import { useState ,useRef } from "react"
export const Home = () => {

    const [todoList, setTodoList] = useState([])
    const todoRef = useRef()
    const handleAddTodo =(e)=>{
        e.preventDefault()
        const newTodo = {
            id:uuid(),
            description:todoRef.current.value,
            completed:false
        }
        setTodoList((prevState)=>{
            return[...prevState,newTodo]
        })
        todoRef.current.value=null
        
    }


    //estado de la aplicacion




    return (
        <>
         <h1> Aplicacion General que hace de todo</h1>
         <nav>aca hay un navbar</nav>
         <TodoList todoList={todoList}></TodoList>

         <div>
            <form>
            <input ref={todoRef} type="text"placeholder="nueva tarea"></input>
            <button onClick={handleAddTodo}>Agregar Tareas</button>
            <button>Eliminar Tareas</button>
            </form>

            
        </div>
        </>
    )
}

