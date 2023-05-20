import React from 'react'

const Todo = ({ todo, toggleTodo }) => {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  //The to-do elements will be rendered
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
