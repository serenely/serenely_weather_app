import { configureStore } from "@reduxjs/toolkit"
import weatherReducer from "../reducers/weatherSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store