import { Data, P } from 'scripts'

import { createSlice } from '@reduxjs/toolkit'

const initialState: any
  // {
  //   userUID: string | null, displayName: string | null, userDocs: any | null, pageDoc: Data.docType | null
  // } 
  = {
  userUID: null,
  displayName: null,
  userDocs: [],
  pageDoc: null
}

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {

    // //////////////////////////////////////////////
    updateThis: (state, action: P.a<any>) => {
      state[action.payload.item] = action.payload.obj
    },

    // //////////////////////////////////////////////
    updateUserUID: (state, action: P.a<string | null>) => {
      state.userUID = action.payload
    },

    // //////////////////////////////////////////////
    updateDisplayName: (state, action: P.a<string | null>) => {
      state.displayName = action.payload
    },
 
    // //////////////////////////////////////////////
    addUserDocs: (state, action: P.a<Data.docType[]>) => {
      state.userDocs = action.payload
    },

    // //////////////////////////////////////////////
    addPageDoc: (state, action: P.a<Data.docType>) => {
      state.pageDoc = action.payload
    },

    // //////////////////////////////////////////////
    updateSym: (state, action: P.a<Data.symType>) => {
      // find sym in userDocs
      state.userDocs.forEach((doc: Data.docType) => {
        if (doc.docId === action.payload.docId) {
          doc.syms?.forEach((sym: Data.symType) => {
            if (sym.symId === action.payload.symId) {
              sym.body = action.payload.body
            }
          })
        }
      })
      // find sym in pageDoc
      if (state.pageDoc)
        state.pageDoc.syms?.forEach((sym: any) => {
          if (sym.symId === action.payload.symId)
            sym.body = action.payload.body
        })
    },


    // ////////////////////////////////////////////
    updateTitle: (state, action: P.a<any>) => {
      state.userDocs.forEach((doc: any) => {
        if (doc.docId === action.payload.docId) {
          doc.title = action.payload.title;
          doc.order = action.payload.order;
          doc.docId = action.payload.docId
        }
      })
      state.pageDoc.title = action.payload.title
    }
  }
})


export const { 
  addUserDocs, 
  addPageDoc, 
  updateUserUID, 
  updateDisplayName, 
  updateSym, 
  updateTitle 
} = dataSlice.actions

export default dataSlice