import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import requestGetNews from "../sagas/news/requests";
import { handleFetchNews } from "./handles";
export const setLoading = createAction("setLoading");

const initialState = {
  hits: [],
  loading: true,
  errorMessage: "",
  query: "",
};
const newSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleFetchNews.fulfilled, (state, action) => {
        state.hits = action.payload;
        state.loading = false;
      })
      .addCase(handleFetchNews.pending, (state, action) => {
        state.loading = true;
        state.hits = [];
      })
      .addCase(handleFetchNews.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(setLoading, (state, action) => {
        state.loading = action.payload;
      });
  },
});
// export const { setLoading } = newSlice.actions;
export default newSlice.reducer;
