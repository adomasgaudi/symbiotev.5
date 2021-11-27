import {createSlice} from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    sidebarON: true,
    drawerWidth: 300,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarON ? state.sidebarON = false : state.sidebarON = true
    }
  }
})


export const {toggleSidebar} = uiSlice.actions

export default uiSlice