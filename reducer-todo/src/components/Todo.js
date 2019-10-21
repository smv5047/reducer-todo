import React from 'react'

const Todo =(props) =>{
    console.log(props)
    return (
        <h2>{props.state.item}</h2>
        // props.state.item.map(item => {
        //     <h2>item</h2>
            
        // })
    )

}

export default Todo