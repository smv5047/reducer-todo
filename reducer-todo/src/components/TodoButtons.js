import React , {useState} from 'react'
import TodoForm from './TodoForm'

function TodoButtons({dispatch}) {
    const [addItem, setAddItem] = useState(false)
    return (
        <div>
            {addItem && <TodoForm dispatch={dispatch} setAddItem={setAddItem}/>}
            <button onClick={()=> setAddItem(!addItem)}>ADD TODO</button>
            <button onClick={() => { dispatch({ type: "CLEAR_COMPLETED" }) }}>CLEAR COMPLETED</button>
        </div>
    )
}

export default TodoButtons