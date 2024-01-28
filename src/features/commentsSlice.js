import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState  = {
  comments: [],
};

export const fetchComment = createAsyncThunk(
  "comments/fetch",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4100/comment/${id}`);
      const comments = await res.json();
      if (comments.error) {
        return thunkAPI.rejectWithValue(comments.error);
      }
      return comments;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);
export const addComment = createAsyncThunk(
  "addComment",
  async ({ text, CartId }, thunkAPI) => {
    // const token = thunkAPI.getState().application.token;
    try {
      const res = await fetch(`http://localhost:4100/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        //   Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          comment: text,
          CartsId: CartId,
          userId: "659e4ad9df4f32b66a4170a1",
        }),
      });
      const comment = await res.json();
      if (comment.error) {
        return thunkAPI.rejectWithValue(comment.error);
      }
      return comment;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComment.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      });
  },
});

export default commentsSlice.reducer;
