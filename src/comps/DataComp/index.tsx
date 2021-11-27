import { addUserDocs, updateDisplayName, updateUserUID, useAppDispatch, useAppSelector } from 'store'
import {auth, getFire} from 'scripts'

import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

const DataComp = () => {
  const dispatch = useAppDispatch()
  const userUID = useAppSelector(state => state.fire.userUID)
  
  
  useEffect(() => {
    
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(updateDisplayName(user.displayName))
        dispatch(updateUserUID(user.uid))
        //console.log({user});
        // dis()
      }
    })
    if(userUID){
      ;(async()=>{
        const obj = await getFire(userUID)
        dispatch(addUserDocs(obj))
        // console.log({obj});
      })()
    }
  }, [userUID, dispatch])
  return null
}

export default DataComp
