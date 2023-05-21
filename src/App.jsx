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
      }, 2600);
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

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
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
      <input onKeyPress={handleKeyPress} ref={todoNameRef} className='form-control' type='text' placeholder='Add a task...'/>
    </div>  

    <span className='col-md-1 col-2 pe-5'>       {/*//! Button */}
      <MdAddCircle onClick={handleAddTodo} className='main-button' size="50px"/>
    </span>
    </>
  )
  }

  //Random positioning for the floating links --------------------------->
function updateLeftPercentage() {
  const svgElement = document.querySelector('.animation-2 svg');
  const leftPercentage = Math.floor(Math.random() * 31) + 0;
  svgElement.style.left = `${leftPercentage}%`;
}
const handleAnimationStart = () => {
  setInterval(() => {
    updateLeftPercentage();
  }, 5000)
  updateLeftPercentage();
};

function updateLeftPercentage2() {
  const svgElement = document.querySelector('.animation-1 svg');
  const leftPercentage = Math.floor(Math.random() * 31) + 30;
  svgElement.style.left = `${leftPercentage}%`;
}
const handleAnimationStart1 = () => {
  setInterval(() => {
    updateLeftPercentage2();
  }, 5000)
  updateLeftPercentage2();
};

function updateLeftPercentage3() {
  const svgElement = document.querySelector('.animation-3 svg');
  const leftPercentage = Math.floor(Math.random() * 31) + 60;
  svgElement.style.left = `${leftPercentage}%`;
}
const handleAnimationStart3 = () => {
  setInterval(() => {
    updateLeftPercentage3();
  }, 6500)
  updateLeftPercentage3();
};


  return (
    //main container
    <div className='main d-flex justify-content-center pt-md-3'>

      {showComponent && <Animation />}

          <div className="main-container container col-lg-8 col-11 m-2 mt-5 p-3 rounded-3 bg-light text-center"> 
            <h3 className='pb-2'>My to-do list</h3>
            <div className='row justify-content-center mb-1'>
              <SearchAndButton/>

              <div className='task-list mt-1 py-2 px-md-5 px-2 rounded-3 text-start'>
                <TaskList todos={todos} toggleTodo={toggleTodo}/>   
              </div>

            <div className='d-flex justify-content-around mt-4 flex-md-row flex-column'>
               <TaskCounter todos={todos}/> <RemoveChecked clearTodos={clearTodos}/>
            </div>
            </div>

            <div className='social-links mt-5 mb-1 d-flex justify-content-around'>              
              {/* Links to my social media */}
              <a href="https://github.com/GabrielCorderoDeveloper/MyTo-doList" target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>

              <a href='https://github.com/GabrielCorderoDeveloper' target='abput_blank'>Gabriel Cordero 2023</a>

              <a href="https://www.linkedin.com/in/gabriel-cordero-0960b9244/" target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className='a-icon animation-1' onAnimationStart={handleAnimationStart1}>
                <a href="https://www.linkedin.com/in/gabriel-cordero-0960b9244/" target='_blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
          </div>

          <div className='a-icon animation-2' onAnimationStart={handleAnimationStart}>
                <a href="https://github.com/GabrielCorderoDeveloper" target='_blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
          </div>

          <div className='a-icon animation-3'  onAnimationStart={handleAnimationStart3}>
                <a href="https://github.com/GabrielCorderoDeveloper" target='_blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
          </div>
    </div>
  );
}


export default App;
