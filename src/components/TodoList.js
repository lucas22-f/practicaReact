import Todo from "./Todo"
function TodoList({todoList}){
    
    return (<>
    
        <h1> Lista de tareas</h1>
        <p>tambien hay mas cosas del todo list</p>
        <ol>
        {todoList.map((el)=>(
            <Todo key ={el} todo={el}></Todo>
            ))}
        </ol>


        
    
    </>)
}

export default TodoList