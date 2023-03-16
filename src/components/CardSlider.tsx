import React from 'react'
import { IMovieGenres } from '../store/_utils'
import Card from './Card'
interface CardSliderProp {
    title: string
    movies?: IMovieGenres[]
}

const CardSlider = ({title, movies}: CardSliderProp) => {
  return (
    <div>
        {
            movies?.map((movie, index) => (
                <Card key={`movie-card=${index}`} movieData={movie} index={index} />
            ))
        }
    </div>
  )
}

export default CardSlider