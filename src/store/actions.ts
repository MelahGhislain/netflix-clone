import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { AppState } from "."
import { IDataResults, IGenres, IMovieGenres, IResults, MovieGenresUrl } from "./_utils"
const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL
const API_KEY = import.meta.env.VITE_APP_API_KEY

export const getGenres = createAsyncThunk('netflix/genres', async (_, thunkApi) => {
    try {
        const { data: {genres} } = await axios.get(MovieGenresUrl)  
        return genres
    }catch(error: any){
        return thunkApi.rejectWithValue(error.messasge)
    }
})


const createArrayFromRawData = (results: IResults[], moviesList: IMovieGenres[], genres: IGenres[]) => {
    
    results.forEach((movie)=> {
        const movieGenres: string[] = []
        movie.genre_ids.forEach((genreId) => {
            const genre = genres.find(({id})=> id === genreId)
            if(genre) movieGenres.push(genre.name)
        })
        if(movie.backdrop_path){
            moviesList.push({
                id: movie.id,
                name: movie?.original_name? movie?.original_name: movie?.original_title,
                image: movie.backdrop_path,
                genres: movieGenres.slice(0, 3)
            })
        }
    })
}

const getRawData = async (api: string, genres: any, paging: boolean ) => {
    const moviesList: IMovieGenres[] = []
    for(let i = 1; moviesList.length < 60 && 1 < 10; i++){
        const {data} = await axios.get(`${api}${paging? `&page=${i}`: ''}`)
        const {results} = data as IDataResults
        createArrayFromRawData(results, moviesList, genres)

        return moviesList;
    }
}

export const fetchMovies = createAsyncThunk('netflix/trending',async ({type}: {type: string}, thunkApi) => {
    // We need to get the genres from the app state using the thunkApi
    const {netflix: {genres}} = thunkApi.getState() as AppState
    try {
        const data = getRawData(`${BASE_URL}/trending/${type}/week?api_key=${API_KEY}`, genres, true)
        
        return data
    } catch (error: any) {
        return thunkApi.rejectWithValue(error.messasge)
    }
})
