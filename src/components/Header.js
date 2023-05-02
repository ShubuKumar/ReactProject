import React, { useState } from 'react'
import '../CSS/header.css'
import mam from'../sir.png'


function Header() {
  return (
    <div>
        <div className='nav'>
        <nav className='navbar'>The GradeBook App</nav>
        </div>
        <div className='row'>
        <div className='innerRow'>
        <img src={mam} alt="" className='pimg' />
        <p className='pName'>Mir Junaid Rasool</p>
        </div>
        <div className='column'>
        <h4>Group - A</h4>
        <h4>Semester -8 </h4>
        </div>
        </div>
    </div>
  )
}

export default Header