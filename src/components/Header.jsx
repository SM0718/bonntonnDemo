import React, { useState } from 'react'

function Header() {

    const [color, setColor] = useState(false)

    const changeColor = () => {
        if(window.scrollY >= 90) {
        setColor(true)
    } else {
        setColor(false)
    }
    }

    window.addEventListener('scroll', changeColor)

  return (
    <div className={`${color? "bg-white py-2 justify-center" : "py-6 justify-center"} w-screen fixed flex transition duration-500 px-8  z-50`}>
            <img className='w-44' src={color ? "./image.png" : "./whiteLogo.png"}/>
    </div>
  )
}

export default Header