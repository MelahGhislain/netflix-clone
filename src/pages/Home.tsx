import React, { useEffect, useState } from 'react'
import { HomeTitle } from '../assets'
import {FaPlay, FaInfoCircle} from 'react-icons/fa'
import MovieSection from '../components/MovieSection'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, getGenres } from '../store/actions'
import { AppDispatch } from '../store'
import { selectIsGenresLoaded, selectMovies } from '../store/slices'
import { IMovieGenres } from '../store/_utils'
import Slider from '../components/Slider'

const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const isGenresLoaded = useSelector(selectIsGenresLoaded)
    const movies = useSelector(selectMovies)

    useEffect(()=>{
        dispatch(getGenres())
    }, [])

    useEffect(()=>{
        if(isGenresLoaded)
            dispatch(fetchMovies({type: 'all'}))
    }, [isGenresLoaded])
    
  return (
    <div className='text-white bg-black/90'>
        <Navbar />
        <main className=' w-screen h-screen bg-movie-img bg-cover bg-no-repeat'>
            
            <div className=' top-0  w-full h-full bg-black/30'>
                <div className='h-[70vh] flex flex-col md:w-[30rem] padding justify-center'>
                    <div className='flex items-center gap-4'>
                        <img src={HomeTitle} alt="logo-mark" />
                    </div>
                    <p className='mt-6 text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nihil iure possimus perferendis labore culpa quo dignissimos pariatur recusandae cupiditate?</p>
                    <div className='flex items-center gap-4 mt-6'>
                        <button onClick={() => navigate('/player')} className='flex items-center gap-2 text-black bg-white px-4 py-2 rounded hover:opacity-80'>
                            <FaPlay />
                            <span>Play</span>
                        </button>
                        <button className='flex items-center gap-2 text-white bg-slate-500 px-4 py-2 rounded hover:opacity-80'>
                            <FaInfoCircle />
                            <span>More Info</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
        {/* <div className='-mt-48 z-10'>
            <MovieSection />
        </div>
        <MovieSection /> */}
        <Slider movies={movies}/>
    </div>
  )
}

export default Home