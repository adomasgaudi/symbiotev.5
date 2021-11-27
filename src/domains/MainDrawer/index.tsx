import { addPageDoc, addUserDocs, toggleSidebar, useAppDispatch, useAppSelector } from "store"
import { createNewDoc, getFire } from 'scripts'

import Box from "@mui/system/Box"
import { Button } from "@mui/material"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import {DrawerX} from './modules'
import { deleteUserDoc } from "scripts/firebase"
import styled from "styled-components"
import styless from './styles.module.css'
import { useTheme } from '@mui/material/styles'

const Button2 = () => {
  return (
    <div className={styless.button}>sdf</div>
  )
}
const DrawerHeader = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}))


const MyLi = styled.li` 
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`


const TextSpan = styled.span`
  display: block;
  background: yellow;
  &:hover{
    padding-right: 100px;
    transition: .1s;
  }
`

const Xtag = styled.span`
  padding: 0 5px;
  color: red;
  &:hover{
    background: red;
    color: black;
    padding: 0 10px;
    transition: .1s;
  }
`





const DrawerContent = () => {
  const dis = useAppDispatch()
  const userDocs = useAppSelector(state => state.fire.userDocs)
  const userUID = useAppSelector(state => state.fire.userUID)

  const docOpenHandler = (docId: string) => {
    let obj = userDocs.filter((doc: any) => doc.docId === docId)
    dis(addPageDoc(obj[0]))
  }

  const createNewDocHandler = async () => {
    // add emty to firebase
    createNewDoc(userUID)
    if (userUID) {
      ; (async () => {
        //console.log('ran', userUID);
        // dispatch(updateDisplayName('Adomas Gaudi'))
        const obj = await getFire(userUID)
        dis(addUserDocs(obj))
      })()
    }

  }

  const deleteDocHandler = async (docId: string) => {
    console.log('delete ran')
    deleteUserDoc(userUID, docId)
  }
  if (userDocs) {
    return (
      <ul>
        {userDocs.map((doc: any) => (
          <MyLi key={doc.docId} onClick={() => docOpenHandler(doc.docId)} >
            <TextSpan>{doc.title}</TextSpan>
            <Xtag onClick={() => deleteDocHandler(doc.docId)} >X</Xtag>
          </MyLi>
        ))}
        <MyLi onClick={createNewDocHandler}>new doc</MyLi>
      </ul>
    )
  }
  else {
    return (
      <h3>Couldn't get user docs</h3>
    )
  }

}


// const MuiButton = styled(Button)(()=>(
//   // color: "red";
// ))





const MainDrawer = () => {
  const theme = useTheme()
  const dis = useAppDispatch()


  return (
    <DrawerX>
      <DrawerHeader
        sx={{
          height: '56px',
          ['@media (min-width:600px)']: {
            height: '64px'
          },
          ['@media (min-width:0px)']: {
            height: '48px'
          },
          padding: theme.spacing(0, -1)
        }}
      >
        <Button
          onClick={() => { dis(toggleSidebar()) }}
          variant="text"
        >
          <ChevronLeftIcon />CLOSE
          <Button2 />
        </Button>
      </DrawerHeader>

      <DrawerContent />
    </DrawerX>
  )
}

export default MainDrawer









