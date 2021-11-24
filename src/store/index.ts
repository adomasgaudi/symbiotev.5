import { RootState, useAppDispatch, useAppSelector } from './hooks'

import store from './configure'
import {toggleSidebar} from './ui.slice'
import uiSlice from './ui.slice'

export {
  store, toggleSidebar, uiSlice , 
  useAppDispatch, useAppSelector
}

export type {RootState}