import React, {useState} from 'react'

function TodoForm (props) {
    const [newTodo, setNewTodo] = useState({
        item: '',
        completed: false,
        id: ''
      });
    
    const handleSubmit = e => {
    e.preventDefault();
        // setNewTodo("");
        props.dispatch({type:"ADD_TODO", payload: newTodo})
        props.setAddItem(false)
    };
    
    const handleChange = e => {
    setNewTodo({
        item: e.target.value,
        completed: false,
        id: Math.floor(new Date().getTime()/1000)
    })
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                    type="text" 
                    placeholder="ToDo"
                    value={newTodo.item}
                    onChange={ (e)=> handleChange(e)}
                    />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm