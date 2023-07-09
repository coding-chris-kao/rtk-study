import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface ArrayState {
  value: string[]
}

const initialState: ArrayState = {
  value: [],
}

export const arraySlice = createSlice({
  name: "array",
  initialState,
  reducers: {
    append: (state, action: PayloadAction<string[]>) => {
      state.value = [...state.value, ...action.payload]
    },
    replace: (state, action: PayloadAction<string[]>) => {
      state.value = action.payload
    },
    clear: (state, action: PayloadAction<string[]>) => {
      state.value = []
    },
  },
})

export const { append, replace, clear } = arraySlice.actions

export const selectArray = (state: RootState) => state.array

export default arraySlice.reducer
