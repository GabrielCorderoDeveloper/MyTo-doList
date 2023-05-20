import React from 'react'
import './Animation.css';
import logo from '../assets/todo_logo.png';

const Animation = () => {
  return (
    <div className="loading-container d-flex align-items-center justify-content-center">
        <div className="image-blur"> </div> {/* This will breate a light effect behind the logo */}
        <img src={logo} alt="Logo" />       
    </div>
  )
}

export default Animation
