import { createAction, createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null || localStorage.getItem("token"),
  signIn: false,
  signUp: false,
};



export const login = createAsyncThunk('tradehub/login', async ({login, password  }, thunkAPI) => {
    try {
        const res = await fetch('http://localhost:4100/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({login, password})
        })
        const token = await res.json()
        if (token.error) {
            return thunkAPI.rejectWithValue(token.error)
        }
        localStorage.setItem('token', token)
        return thunkAPI.fulfillWithValue(token)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
    localStorage.setItem("token", token);
    return thunkAPI.fulfillWithValue(token);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const register = createAsyncThunk(
  "tradehub/register",
  async ({ login, password, name, surname }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4100/auth", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ login, password, name, surname }),
      });
      const user = await res.json();
      if (user.error) {
        return thunkAPI.rejectWithValue(user.error);
      }
      return thunkAPI.fulfillWithValue(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const applicationSlice = createSlice({
  name: "applicationSlice",
  initialState,
  reducers: {
    logout(state, action) {
      localStorage.removeItem("token");
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload;
        state.signIn = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.signUp = true;
      }).addCase;
  },
});
const { actions, reducer } = applicationSlice;
export const { logout } = actions;
export default applicationSlice.reducer;
