import { configureStore } from "@reduxjs/toolkit"
import fireSlice from './fire.slice'
import uiSlice  from "./ui.slice"

const store: any = configureStore({
  reducer:{
    ui: uiSlice.reducer,
    fire: fireSlice.reducer
  }
})


export default store