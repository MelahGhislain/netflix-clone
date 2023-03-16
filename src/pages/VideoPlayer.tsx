import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { Video } from '../assets'

const VideoPlayer = () => {
    const navigate = useNavigate()
  return (
    <div className='relative h-screen w-screen'>
        <div className='absolute top-5 left-5 cursor-pointer text-3xl z-30' onClick={()=>navigate(-1)}>
            <BsArrowLeft />
        </div>
        <video src={Video} autoPlay loop controls muted className='w-screen md:h-screen'></video>
    </div>
  )
}

export default VideoPlayer