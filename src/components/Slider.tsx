import React from 'react'
import { IMovieGenres } from '../store/_utils'
import CardSlider from './CardSlider'
interface IMovie {
    movies?: IMovieGenres[]
}

const Slider = ({movies}: IMovie) => {
    const getMovieFromRange = (from: number, to: number) => {
        return movies?.slice(from, to)
    }
  return (
    <div>
        <CardSlider title="Trending Now" movies={getMovieFromRange(0, 10)} />
        <CardSlider title="Trending1 Now" movies={getMovieFromRange(10, 20)} />
        <CardSlider title="Trending2 Now" movies={getMovieFromRange(20, 30)} />
        <CardSlider title="Trending3 Now" movies={getMovieFromRange(30, 40)} />
        <CardSlider title="Trending4 Now" movies={getMovieFromRange(40, 50)} />
        <CardSlider title="Trending5 Now" movies={getMovieFromRange(50, 60)} />
    </div>
  )
}

export default Slider