import { createSlice, createAction } from "@reduxjs/toolkit";

export const otherAction = createAction("updateLoading");

const newSlice = createSlice({
  name: "news",
  initialState: {
    hits: [],
    loading: true,
    errorMessage: "",
    query: "",
  },
  reducers: {
    setNews: (state, action) => ({
      ...state,
      hits: action.payload,
    }),
    getNews() {},
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setErrprMessage: (state, action) => ({
      ...state,
      errorMessage: action.payload,
    }),
    setQuery: (state, action) => ({
      ...state,
      query: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(otherAction, (state, action) => {
      state.loading = action.payload;
    });
  },
});
export const { getNews, setNews, setLoading, errorMessage, setQuery } =
  newSlice.actions;
export default newSlice.reducer;
