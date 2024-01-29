import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface UserFavs{
    _id: string,
    login: string,
    password: string,
    name: string,
    surname: string,
    favourites: string,
    history: string
}
export interface userFavsState{
    userFavs: UserFavs[],
}
const initialState: userFavsState = {
    userFavs: []
}

export const fetchFavourites = createAsyncThunk('fetchFavourites/car-rent', async(data, thunkAPI) => {
    try{
        const res = await fetch('http://localhost:4100/user/', {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })  
        if (!res.ok){
            return thunkAPI
        }
        const userFavs = await res.json()
        return userFavs
        
    }catch (error){
        return thunkAPI.rejectWithValue(error)
    }
})

 const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchFavourites.fulfilled, (state, action) => {
            state.userFavs = action.payload
        })
    }
 })

 export default favouritesSlice.reducer;
