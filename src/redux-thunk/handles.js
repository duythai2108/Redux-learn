import { createAsyncThunk } from "@reduxjs/toolkit";
import requestGetNews from "./request";

export const handleFetchNews = createAsyncThunk(
  "news/handleFetchNews",
  async (query, thunkAPI) => {
    console.log("🚀 ~ handleFetchNews ~ query:", query);
    console.log("🚀 ~ handleFetchNews ~ thunkAPI:", thunkAPI);
    const response = await requestGetNews(query);
    return response.data.hits;
  }
);
