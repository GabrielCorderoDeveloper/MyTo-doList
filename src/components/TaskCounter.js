import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const TaskCounter = ({ todos }) => {
  let totalTasks = todos.length;
  let completedTasks = todos.filter(todo => todo.complete).length;

  let now = (Math.floor((completedTasks / totalTasks) * 100));

  return (
    <ProgressBar 
    variant='success' 
    style={{ height: '30px'}} 
    now={now} 
    label={`${completedTasks} of ${totalTasks} tasks completed`}
    valuemin={0} valuemax={100}  
    className='my-2 col-md-7'/>
  )
}

export default TaskCounter
