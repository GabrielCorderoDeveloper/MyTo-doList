import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';
import RemoveChecked from './components/RemoveChecked';
import React, { useState, useRef, useEffect } from 'react';
import { MdAddCircle } from "react-icons/md";
import Animation from './components/Animation';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
 // Here we define the initial state of the todo list using the useState hook
  const [todos, setTodos] = useState([{
    id: 1, name: 'Follow Gabriel_coder47 on instagram📷', complete: false
  }]);
   // UseRef hook to get a reference to the input field
  const todoNameRef = useRef();


  const [showComponent, setShowComponent] = useState(true);

    // After 2.5S the animation component will not be showed
    useEffect(() => {
      setTimeout(() => {
        setShowComponent(false);
      }, 2500);
  }, []);

  //*Save and load todos <------------------------------------------------------------------------|||||
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])
  //*  <------------------------------------------------------------------------------------------|||||

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete =! todo.complete
    setTodos(newTodos)
  }

  //It will generate a random ID
  function idGenerator() {
    const id = Math.floor(Math.random() * 10000)
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

  //It will erase the todos that are completed
  function clearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  //Defining the bar and the button
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

      {showComponent && <Animation />}

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

            <div className='mt-5 mb-1'>
              <a href='https://github.com/GabrielCorderoDeveloper' target='abput_blank'>Gabriel Cordero 2023</a>
            </div>
          </div>
    </div>
  );
}


export default App;
