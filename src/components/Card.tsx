import React from 'react'
import { IMovieGenres } from '../store/_utils'

interface CardProp {
    movieData?: IMovieGenres
    index: number
}

const Card = ({movieData, index}: CardProp) => {
  return (
    <div>Card</div>
  )
}

export default Card