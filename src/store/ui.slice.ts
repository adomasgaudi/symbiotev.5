import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    sidebarON: true,
    drawerWidth: 300,
    themeId: 3,
    colorId: 0,
  },
  reducers: {
    toggleSidebar: state => {
      state.sidebarON ? (state.sidebarON = false) : (state.sidebarON = true)
    },
    toggleTheme: state => {
      if (state.themeId >= 3) {
        state.themeId = 0
      } else {
        state.themeId++
      }
    },
    toggleColor: state => {
      if (state.colorId === 1) {
        state.colorId = 0
      } else {
        state.colorId++
      }
    },
  },
})

export const { toggleSidebar, toggleTheme, toggleColor } = uiSlice.actions

export default uiSlice
