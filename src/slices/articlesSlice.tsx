import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'config/store';
import { useAxios } from 'hooks/useAxios';
import { StatusEnum } from 'enums/StatusEnum';
import { ArticleResponse, ArticleSliceInitial } from 'types/ArticleTypes';

const initialState: ArticleSliceInitial = {
  articles: [],
  count: 0,
  status: StatusEnum.IDLE,
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticles.pending, (state) => {
      state.status = StatusEnum.LOADING;
    });
    builder.addCase(getArticles.fulfilled, (state, action) => {
      state.status = StatusEnum.IDLE;
      state.articles = action.payload?.articles || [];
      state.count = action.payload?.totalResults || 0;
    });
  },
});

export const getArticles = createAsyncThunk(
  '/articles',
  async (country: string) => {
    try {
      const response = await useAxios().get<ArticleResponse>(
        `${process.env.REACT_APP_API_URL}/top-headlines?country=${country}&pageSize=100&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const articlesState = (state: RootState) => state.articles;

export default articlesSlice.reducer;
