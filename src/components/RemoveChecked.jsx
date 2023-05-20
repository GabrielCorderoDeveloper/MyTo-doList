import React from 'react'
import { GrFormClose } from "react-icons/gr";

//This is the button to remove checked to-dos
const RemoveChecked = ({ clearTodos }) => {
  return (
    <button className='btn btn-outline-success mt-md-0 mt-2' onClick={clearTodos}>
      Remove checked<GrFormClose size="25px" className='icon-fix'/>
    </button>
  )
}

export default RemoveChecked
