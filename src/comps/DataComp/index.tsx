import React, { useEffect } from 'react'
import { addUserDocs, updateDisplayName, updateUserUID, useAppDispatch, useAppSelector } from 'store'
import {auth, getFire} from 'scripts'

import { onAuthStateChanged } from 'firebase/auth'

const DataComp = () => {
  const dis = useAppDispatch()
  const userUID = useAppSelector(state => state.fire.userUID)

  
  onAuthStateChanged(auth, user => {
    if (user) {
      dis(updateDisplayName(user.displayName))
      dis(updateUserUID(user.uid))
    }
  })



  useEffect(() => {
    (async()=>{
      dis(updateDisplayName('Adomas Gaudi'))
      const obj = await getFire(userUID)
      console.log(obj);
      dis(addUserDocs(obj))
      
    })()
  }, [])
  return null
}

export default DataComp
