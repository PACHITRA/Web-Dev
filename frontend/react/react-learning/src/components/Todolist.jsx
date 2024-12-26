import { useState } from "react"


const Todolist = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setinputValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim()){
            setTodos([...todos,inputValue]);
            setinputValue("");
            
        }
    }
    const handleChange = (e) => {
        setinputValue(e.target.value)
    }
    return (
    

    <div>Todolist
        <form onSubmit={handleSubmit} >
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Add new Todo"/>
            <button type="submit">Add todo</button>
        </form>
        <ul>
            {todos.map((todo,index)=>(
                <li key={index}>{todo}</li>
            )

            )}
        </ul>
    </div>
  )
}

export default Todolist