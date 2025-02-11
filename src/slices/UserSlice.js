import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("getUsers", async (payload) =>
  fetch(
    "https://real-time-amazon-data.p.rapidapi.com/best-sellers?category=software&type=BEST_SELLERS&page=2&country=US",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
        "X-RapidAPI-Key": "98414c2522msh2add1f2f59d5a30p1fc15bjsn06a22d0e7788",
      },
    }
  )
    .then((response) => response.json())

    .catch((error) => console.error("Error:", error))
);

const initialState = { users: [], status: "" };

export const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;
