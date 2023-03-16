import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from ".";
import { fetchMovies, getGenres } from "./actions";
import { IStrore, MovieSliceType, IGenres } from "./_utils";

const initialState: IStrore = {
    loading: false,
    error: null,
    movies: [],
    genres: [],
    isGenresLoaded: false
}

export const movieSlice: MovieSliceType = createSlice({
    name: 'movies',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=> {
        // Genres builder
        builder
            .addCase(getGenres.pending, (state, action)=> {
                state.loading = true
            })
            .addCase(getGenres.fulfilled, (state, action: PayloadAction<any>)=> {
                state.loading = false
                state.genres = action.payload
                state.isGenresLoaded = true
            })
            .addCase(getGenres.rejected, (state, action: PayloadAction<any>)=> {
                state.loading = false
                state.error = action.payload 
            })

        // movies builder
        builder
            .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<any>)=> {
                state.loading = false
                state.movies = action.payload
            })
    }
})

export const selectIsGenresLoaded = (state: AppState) => state.netflix.isGenresLoaded
export const selectGenres = (state: AppState) => state.netflix.genres
export const selectMovies= (state: AppState) => state.netflix.movies
