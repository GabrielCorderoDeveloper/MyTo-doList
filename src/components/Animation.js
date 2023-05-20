import React from 'react'
import './Animation.css';

const Animation = () => {
  return (
    <div className="loading-container d-flex align-items-center justify-content-center">
        <div className="image-blur"> </div> {/* This will breate a light effect behind the logo */}
        <img src="./public/Logo.png" alt="Logo" />       
    </div>
  )
}

export default Animation
