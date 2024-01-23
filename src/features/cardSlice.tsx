import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface Cards{
    _id: string,
    title: string,
    price: number,
    image: string,
    category: string,
    engineType: string,
    engineCapacity: string,
    power: string,
    accelerationTo100Km: string,
    maxSpeed: string,
    transmission: string,
    drive: string,
    places: string,
    fuel: string,
    navigation: boolean,
    additionalEquipment: string,
    brand: string,
}
export interface CardState{
    cards: Cards[]
}
const initialState: CardState = {
    cards: []
}

export const fetchCards = createAsyncThunk('carRent/fetchCards', async (data, thunkAPI) => {
    try{
        const res = await fetch('http://localhost:4100/carbooker', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            }
        })
        if (!res.ok){
            return thunkAPI
        }
        const cards = await res.json()
        return cards
    }catch (error){
        return thunkAPI.rejectWithValue(error)
    }
})

const cardSlice = createSlice({
    name: 'Cards',
    initialState,   
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCards.fulfilled, (state, action) => {
            state.cards = action.payload
        })
    }
})

export default cardSlice.reducer