import React, { useState } from 'react'
import '../App.css'
const Hamburger = () => {
    // Ajoute d'un state qui track si le menu est active ou pas
    const [isActive, setIsActive] = useState(false);
  return (
    <>
    <div className="button">
        <div className={`burger ${isActive ? 'burgerActive' : ""}`}>


        </div>
    </div>
    </>
  )
}

export default Hamburger