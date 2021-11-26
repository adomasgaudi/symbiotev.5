import { Data, P } from 'scripts'

import { createSlice } from '@reduxjs/toolkit'

const initialState: {
  userUID: string | null, displayName: string | null, userDocs: any | null, pageDoc: Data.docType | null
} = {
  userUID: '',
  displayName: 'adomas',
  userDocs: [],
  pageDoc: null
}

const fireSlice = createSlice({
  name: "fire",
  initialState,
  reducers: {
    updateUserUID: (state, action: P.A<string | null>) =>{
      state.userUID = action.payload
    },
    updateDisplayName: (state, action: P.A<string | null>) =>{
      state.displayName = action.payload
    },
    addUserDocs: (state, action: P.A<any>) => {
      state.userDocs = action.payload
    },
    addPageDoc: (state, action: P.A<Data.docType>) => {
      state.pageDoc = action.payload
    }
  }
})


export const {addUserDocs, addPageDoc, updateUserUID, updateDisplayName} = fireSlice.actions

export default fireSlice