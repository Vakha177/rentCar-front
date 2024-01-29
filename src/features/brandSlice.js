import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    brands: []
}

export const fetchBrand = createAsyncThunk('brand/fetchBrand', async (data, thunkAPI) => {
    try {
        const res = await fetch('http://localhost:4100/brand', {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            }
        })
        if (!res.ok){
            return thunkAPI
        }
        const brand = await res.json()
        return brand
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const brandSlice = createSlice({
    name: "Brand",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBrand.fulfilled, (state, action) => {
            state.brands = action.payload
        })
    }
})

export default brandSlice.reducer