import React from 'react'

const TodoForm = (props) => {

    return (
        <div>
            <form onSubmit={(e) => props.handleSubmit(e)}>
                <input 
                    type="text" 
                    
                    placeholder="ToDo"
                    value={props.newTodo.item}
                    onChange={ (e)=>props.handleChanges(e)}
                    />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm