import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieSlice } from "./slices";

// App store
export const store = configureStore({
    reducer: {
        netflix: movieSlice.reducer
    }
})

// create a type for the app state
export type AppState = ReturnType<typeof store.getState>

// create a type for the dispaych state
export type AppDispatch = typeof store.dispatch