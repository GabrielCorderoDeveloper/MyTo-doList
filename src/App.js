import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';
import RemoveChecked from './components/RemoveChecked';
import React, { useState, useRef, useEffect } from 'react';
import { MdAddCircle } from "react-icons/md";

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  //~   Here i will save all the todos
  const [todos, setTodos] = useState([{
    id: 1, name: 'Follow Gabriel_coder47 on instagram📷', complete: false
  }]);
  const todoNameRef = useRef();

  //*Save and load todos <------------------------------------------------------------------------|||||
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  //  localStorage.clear();
  //*  <------------------------------------------------------------------------------------------|||||

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete =! todo.complete
    setTodos(newTodos)
  }

  function idGenerator() {
    const id = Math.floor(Math.random() * 10000)
    //+ console.log(id)
    return id
  }
  function handleAddTodo() {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: idGenerator(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  function clearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  const SearchAndButton = () => {
  return (
    <>
    <div className='col-9'> {/*//! Bar */}
      <input ref={todoNameRef} className='form-control' type='text' placeholder='Add a task...'/>
    </div>  

    <span className='col-md-1 col-2 pe-5'>       {/*//! Button */}
      <MdAddCircle onClick={handleAddTodo} className='main-button' size="50px"/>
    </span>
    </>
  )
  }

  return (
    //main container
    <div className='main d-flex justify-content-center'>
          <div className="main-container container col-lg-8 col-11 m-2 mt-5 p-3 rounded-3 bg-light text-center"> 
            <h3 className='pb-2'>My to-do list</h3>
            <div className='row justify-content-center mb-1'>
              <SearchAndButton/>

              <div className='mt-2 py-5 px-md-5 px-2 rounded-3 text-start'>
                <TaskList todos={todos} toggleTodo={toggleTodo}/>   
              </div>

            <div className='d-flex justify-content-around mt-4 flex-md-row flex-column'>
               <TaskCounter todos={todos}/> <RemoveChecked clearTodos={clearTodos}/>
            </div>
            </div>

          </div>

    </div>
  );
}


export default App;
