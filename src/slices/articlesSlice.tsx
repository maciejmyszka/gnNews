import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../config/store';
import { useAxios } from '../hooks';
import { StatusEnum } from '../enums/StatusEnum';
import { ArticleType } from '../types/ArticleTypes';
interface InitialTypes {
  articles: ArticleType[];
  count: number;
  status: StatusEnum;
}

const initialState: InitialTypes = {
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
    const response = await useAxios().get(
      `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=100&apiKey=2683cfd947474f07ae9238a26174b63d`
    );
    return response;
  }
);

export const {} = articlesSlice.actions;

export const articlesState = (state: RootState) => state.articles;

export default articlesSlice.reducer;
