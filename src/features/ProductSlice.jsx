import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

export const fetchProduct = createAsyncThunk(
  "product/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4100/tradehub");
      const product = await res.json();
      if (product.error) {
        return thunkAPI.rejectWithValue(product.error);
      }
      return product;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.
    addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export default productSlice.reducer;