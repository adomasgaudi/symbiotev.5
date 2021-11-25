import React, { useEffect } from 'react'
import { addUserDocs, updateDisplayName, updateUserUID, useAppDispatch, useAppSelector } from 'store'

import {getFire} from 'scripts'

const DataComp = () => {
  const dis = useAppDispatch()
  const userUID = useAppSelector(state => state.fire.userUID)

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
