import React from 'react'
import { Card } from '../assets'

const MovieSection = () => {
  return (
    <section className='w-full padding mb-10'>
            <h2 className='text-lg mb-6'>Bingeworthy TV Shows</h2>
            <div className='flex overflow-auto gap-1'>
                <img src={Card} alt="card" className='h-[9.5rem] '/>
                <img src={Card} alt="card" className='h-[9.5rem] '/>
                <img src={Card} alt="card" className='h-[9.5rem] '/>
                <img src={Card} alt="card" className='h-[9.5rem] '/>
                <img src={Card} alt="card" className='h-[9.5rem] '/>
                <img src={Card} alt="card" className='h-[9.5rem] '/>
                <img src={Card} alt="card" className='h-[9.5rem] '/>
                <img src={Card} alt="card" className='h-[9.5rem] '/>
                <img src={Card} alt="card" className='h-[9.5rem] '/>
                <img src={Card} alt="card" className='h-[9.5rem] '/>
                <img src={Card} alt="card" className='h-[9.5rem] '/>
                <img src={Card} alt="card" className='h-[9.5rem] '/>
                <img src={Card} alt="card" className='h-[9.5rem] '/>
                
            </div>

        </section>
  )
}

export default MovieSection