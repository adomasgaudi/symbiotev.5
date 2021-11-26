import { RootState, useAppDispatch, useAppSelector } from './hooks'
import fireSlice, {addPageDoc, addUserDocs, updateDisplayName, updateSym, updateTitle, updateUserUID} from './fire.slice'
import uiSlice, {toggleSidebar} from './ui.slice'

import store from './configure'

export {
  store, toggleSidebar, uiSlice , 
  useAppDispatch, useAppSelector,
  fireSlice, addUserDocs, addPageDoc, updateUserUID, updateDisplayName, updateSym, updateTitle
}

export type {RootState}