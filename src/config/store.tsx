import { configureStore } from '@reduxjs/toolkit';
import articles from 'slices/articlesSlice';
import app from 'slices/appSlice';

export const store = configureStore({
  reducer: {
    app,
    articles,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
