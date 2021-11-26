import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import { updateUserUID, useAppDispatch } from 'store'

import { Button } from '@mui/material'
import React from 'react'
import { auth } from 'scripts'
import {googleLogin} from 'scripts'
import styled from 'styled-components'

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`


const Welcome = () => {

  const dis = useAppDispatch()
  const googleLoginHandler = async() => {
    const res = await googleLogin()
    dis(updateUserUID(res.user.uid))
  }
  
  return (
    <CenterDiv>
      <Button onClick={googleLoginHandler} >Log-In with Google</Button>
    </CenterDiv>
  )
}

export default Welcome
