import { RootState, useAppDispatch, useAppSelector } from './hooks'
import dataSlice, {
  addPageDoc,
  addUserDocs,
  updateDisplayName,
  updateSym,
  updateTitle,
  updateUserUID
} from './data.slice'
import uiSlice, { toggleSidebar } from './ui.slice'

import store from './configure'

export {
  store, 
  toggleSidebar, 
  uiSlice,
  useAppDispatch, 
  useAppSelector,
  dataSlice, 
  addUserDocs, 
  addPageDoc, 
  updateUserUID, 
  updateDisplayName, 
  updateSym, 
  updateTitle
}

export type { RootState }