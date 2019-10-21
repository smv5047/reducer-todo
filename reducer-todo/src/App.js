import React, { useState, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

//reducers
import { reducer , initialState } from './reducers/Reducer'

function App() {

  const [newTodo, setNewTodo] = useState({
    item: '',
    completed: false,
    id: ''
  });

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = e => {
    e.preventDefault();
    setNewTodo("");
    dispatch({type:"UPDATE_TODO", payload: newTodo})
  };

  const handleChanges = e => {
    setNewTodo({
      item: e.target.value,
      completed: false,
      id: Math.floor(new Date().getTime()/1000)
    })
  }

  return (
    <div className="App">
      <h1>The Todo App</h1>
      <TodoList state={state}/>
      <TodoForm newTodo={newTodo} setNewTodo= {setNewTodo} handleSubmit={handleSubmit} handleChanges={handleChanges} />
    </div>
  );
}

export default App;
