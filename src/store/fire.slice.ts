import { Data, P } from 'scripts'

import { createSlice } from '@reduxjs/toolkit'

const initialState: {
  userUID: string | null, displayName: string | null, userDocs: any | null, pageDoc: Data.docType | null
} = {
  userUID: null,
  displayName: null,
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
    },
    updateSym: (state, action: P.A<any>) => {

      state.userDocs.forEach((doc: any)=>{
        if(doc.docId === action.payload.docId){
          doc.syms.forEach((sym: any)=>{
            if(sym.symId === action.payload.symId){
              sym.body = action.payload.body
            }
          })
        }
      })
      if(state.pageDoc)
        state.pageDoc.syms?.forEach((sym: any) => {
          if(sym.symId === action.payload.symId)
            sym.body = action.payload.body
        })
     

    },
    updateTitle: (state, action: P.A<any>) => {

      state.userDocs.forEach((doc: any)=>{
        if(doc.docId === action.payload.docId){
          doc.title = action.payload.title
        }
      })
      if(state.pageDoc)
        state.pageDoc.title = action.payload.title

    }
    // createDoc: (state, action: P.A<any>)=> {
    //   state.userDocs = [...state.userDocs, {
    //     title: 'new Doc',
    //     docId: '',
    //     syms: {
    //       body,
    //       symId,
    //       order,
    //       docId
    //     }
    //   }]
    // } 
    
  }
})


export const {addUserDocs, addPageDoc, updateUserUID, updateDisplayName, updateSym, updateTitle} = fireSlice.actions

export default fireSlice