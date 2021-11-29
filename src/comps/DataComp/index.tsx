import { addPageDoc, addUserDocs, updateDisplayName, updateUserUID, useAppDispatch, useAppSelector } from 'store'
import { auth, getFire } from 'scripts'

import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

const DataComp = () => {
  const dis = useAppDispatch()
  const userUID = useAppSelector(state => state.data.userUID)
  
  
  useEffect(() => {

    // add a authentication state listener, that will
    onAuthStateChanged(auth, user => {
      if (user) {
        dis(updateDisplayName(user.displayName))
        dis(updateUserUID(user.uid))
      }
    })
    // when useruid changes, get docs based on uid and dispatch to userdocs and page
    if(userUID){
      ;(async()=>{
        const obj = await getFire(userUID)
        dis(addUserDocs(obj))
        dis(addPageDoc(obj[0]))
      })()
    }
  }, [userUID, dis])

  // this components is just for the data import
  return null
}

export default DataComp
