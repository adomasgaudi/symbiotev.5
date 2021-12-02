import { RootState, useAppDispatch, useAppSelector } from './hooks'
import dataSlice, { editThis, updateSym, updateTitle } from './data.slice'
import uiSlice, { toggleColor, toggleSidebar, toggleTheme } from './ui.slice'

import store from './configure'

export {
  store,
  toggleSidebar,
  uiSlice,
  useAppDispatch,
  useAppSelector,
  dataSlice,
  updateSym,
  updateTitle,
  toggleTheme,
  editThis,
  toggleColor,
}

export type { RootState }
