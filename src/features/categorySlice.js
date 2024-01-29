import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4100/category");

      if (!res.ok) {
        return thunkAPI.rejectWithValue("error");
      }
      const category = await res.json();
      // console.log("category", category);
      return category;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categorySlice.reducer;
