import { updateDisplayName, updateUserUID, useAppDispatch } from 'store'

import { ButtonX } from 'comps'
import {googleLogin} from 'scripts'
import styled from 'styled-components/macro'

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
    if(res){
      dis(updateDisplayName(res.user.displayName))
      dis(updateUserUID(res.user.uid))
    }
  }
  
  return (
    <CenterDiv>
      <ButtonX onClick={googleLoginHandler} >LOGIN with GOOGLE</ButtonX>
    </CenterDiv>
  )
}

export default Welcome
