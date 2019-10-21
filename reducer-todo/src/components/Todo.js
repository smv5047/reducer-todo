import React from 'react'

import '../App.css';

function Todo (props) {
    
    return (
        <div onClick={props.onClick} className={props.item.completed ? 'completed': null}>
            <h2>{props.item.item}{props.item.completed}</h2>
        </div>
    )
}

export default Todo