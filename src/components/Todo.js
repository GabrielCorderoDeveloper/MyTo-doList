import React from 'react'

const Todo = ({ todo, toggleTodo }) => {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
    <div className='todo-item'>
        <label>
            <input className='check' type='checkbox' checked={todo.complete} onChange={handleTodoClick}/>
         <span className='todo-text'>{todo.name}</span>

        </label>
    </div>
  )
}

export default Todo
