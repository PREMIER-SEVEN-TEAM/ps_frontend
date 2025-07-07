import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // 슬라이스 여기에 추가
  },
});

// RootState와 AppDispatch 타입도 export
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
