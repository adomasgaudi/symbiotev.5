import { P } from 'scripts'
import {createSlice} from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    sidebarON: true,
    drawerWidth: 300,
    themeId: 1,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarON ? state.sidebarON = false : state.sidebarON = true
    },
    toggleTheme: (state, action: P.a<number>) => {
      state.themeId = action.payload
    }
  }
})


export const {toggleSidebar, toggleTheme} = uiSlice.actions

export default uiSlice