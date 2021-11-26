import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth'

import { Button } from '@mui/material'
import React from 'react'
import { auth } from 'scripts'
import styled from 'styled-components'

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`


const Welcome = () => {


  const googleLogin = async() => {

    // // Sign in using a popup.
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    

  }


  return (
    <CenterDiv>
      <Button onClick={googleLogin} >Log-In with Google</Button>
    </CenterDiv>
  )
}

export default Welcome
