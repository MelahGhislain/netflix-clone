import React from 'react'
import { Login } from '../assets'

interface IProp {
    className?: string
}


const BackgroundImage = ({className}: IProp) => {
  return (
    <div className={`h-screen w-screen ${className}`}>
        <img src={Login} alt="netflix home" className='h-full w-full object-cover' />
    </div>
  )
}

export default BackgroundImage