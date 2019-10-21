import React from 'react'

//Component Imports
import Todo from './Todo'

const TodoList = (props) => {

    console.log(props)
    return (
        <Todo state={props.state}/>
    )
}

export default TodoList
