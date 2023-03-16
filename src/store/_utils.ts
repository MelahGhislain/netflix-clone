import { Slice } from "@reduxjs/toolkit";

export interface IGenres {
    id: number
    name: string
}
export interface IMovieGenres {
    id: number
    name?: string
    image: string
    genres: string[]
}

// genres
export interface IDataGenres {
    genres: IGenres[]
}

export interface IStrore {
    loading: boolean
    error: string | null
    movies: never[];
    genres: string[];
    isGenresLoaded: boolean;
}

// movies
export interface IResults {
    adult: boolean
    backdrop_path: string
    first_air_date: string
    genre_ids: number[]
    id: number
    media_type: string
    name: string
    origin_country: string[]
    original_language: string
    original_name?: string
    original_title?: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
}

export interface IDataResults {
    page: number
    results: IResults[]
    total_pages: number
    total_results: number
}

export type MovieSliceType = Slice<IStrore, {}, "movies">

// Api
const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL
const API_KEY = import.meta.env.VITE_APP_API_KEY

export const MovieGenresUrl = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
// export const MovieGenresUrl = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
// export const MovieGenresUrl = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
// export const MovieGenresUrl = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`