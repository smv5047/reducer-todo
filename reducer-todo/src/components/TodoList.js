import React, {useReducer} from 'react'
import { todoReducer, initialState} from '../reducers/todoReducer'

//Component Imports
import Todo from './Todo'
import TodoButtons from './TodoButtons'

function TodoList () {
    const [state,dispatch] = useReducer(todoReducer, initialState)
    
    return (
        <div>
            {state &&
                state.map((item) => {
                    return <Todo key={item.id} item={item} onClick={() => { dispatch({ type: "TOGGLE_COMPLETED", payload: item.id }) }} />
                })
            } 
            <TodoButtons dispatch={dispatch}/>
        </div>
    )
}

export default TodoList
