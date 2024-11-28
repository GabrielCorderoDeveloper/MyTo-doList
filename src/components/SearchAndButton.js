//!The code is commented becouse the elemet is not being used.

/*
import React from 'react'
import { MdAddCircle } from "react-icons/md";
import { useState, useRef } from 'react';

const SearchAndButton = () => {
      //~   Here i will save all the todos
    const [todos, setTodos] = useState([{
        id: 1, name: 'Task 1', complete: false
    }]);


    const todoNameRef = useRef();

    function handleAddTodo() {
      const name = todoNameRef.current.value
      if (name === '') return
      setTodos(prevTodos => {
        return [...prevTodos, { id: 1, name: name, complete: false }]
      })
      todoNameRef.current.value = null
    }

  return (
    <>
    <div className='col-9'>
      <input ref={todoNameRef} className='form-control' type='text' placeholder='Add a task...'/>
    </div>  

    <span className='col-1 pr-5'>       
      <MdAddCircle onClick={handleAddTodo} className='main-button' size="50px"/>
    </span>
    </>
  )
}

export default SearchAndButton 
*/
