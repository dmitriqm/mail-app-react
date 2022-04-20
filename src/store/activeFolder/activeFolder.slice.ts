import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface activeFolderState {
  activeFolder: string
}

const initialState: activeFolderState = {
  activeFolder: 'Входящие'
}

const counterSlice = createSlice({
  name: 'activeFolder',
  initialState,
  reducers: {
    setActiveFolder(state, action: PayloadAction<string>) {
      state.activeFolder = action.payload
    },
  },
})

export const { setActiveFolder } = counterSlice.actions
export default counterSlice.reducer