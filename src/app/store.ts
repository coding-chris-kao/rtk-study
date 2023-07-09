import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"
import arrayReducer from "../features/array/array.slice"
import counterReducer from "../features/counter/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    array: arrayReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
