import { addPageDoc, addUserDocs, updateSym, updateTitle, useAppDispatch, useAppSelector } from 'store'
import {createNewSym, deleteSym, getFire, updateSymFire, updateTitleFire} from 'scripts'
import { useEffect, useRef } from 'react'

import AddIcon from '@mui/icons-material/Add';
import {onFocus} from 'scripts'
import styled from 'styled-components/macro'

/////////-------------------------------//////////////

const EditDiv = styled.div`
  &:focus{
    outline: 0px solid transparent;
  }

`

const Symb: React.FC<{valueIN: string|null, sym: any}> = ({valueIN, sym}) => {
  const dis = useAppDispatch()
  const divRef = useRef<HTMLDivElement>(null)
  const userUID = useAppSelector(state => state.fire.userUID)
  const pageDoc = useAppSelector(state => state.fire.pageDoc)
  // console.log({ pageDoc })

  useEffect(() => {

    onFocus(
      divRef.current, 
      () => {}, 
      (target) => {
        if(target.textContent){
          dis(updateSym({
              symId: sym.symId,
              body: target.textContent,
              docId: sym.docId,
              order: 1
          }))
          updateSymFire(userUID, sym, target.textContent)
        }
      }
    )

  }, [sym, dis])

  

  
  useEffect(()=>{
    //console.log('hiii');
    if(divRef.current)
    divRef.current.addEventListener('keydown', (e)=>{
      if (e.key == 'Backspace' && e.ctrlKey) {
        //console.log('DELETED');
        
      deleteSym(userUID, sym.docId, sym.symId )};
      if(userUID){
        ;(async()=>{
          const obj = await getFire(userUID)
          dis(addUserDocs(obj))
          dis(addPageDoc(obj[0]))
        })()
      }
    })
  },[])

  return (
    <EditDiv contentEditable suppressContentEditableWarning ref={divRef}>
      {valueIN}
    </EditDiv>
  )
}

//////////------------------------------------------/////////


const MyLi = styled.li`
  &:hover{
    box-shadow: 0px 1px 0px 0px yellow;
  }
`

const Symbs = () => {
  const dis = useAppDispatch()
  const userUID = useAppSelector(state => state.fire.userUID)
  const pageDoc = useAppSelector(state => state.fire.pageDoc)
  
  const createNewHandler = async() => {
    // add emty to firebase
    createNewSym(userUID, pageDoc.docId)
    if(userUID){
      ;(async()=>{
        const obj = await getFire(userUID)
        dis(addUserDocs(obj))
        dis(addPageDoc(obj[0]))
      })()
    }
    
  }
  if (pageDoc){
    const syms = pageDoc.syms

    return (
      <ul>
        {syms.map((sym: any) => (
          <Symb key={sym.symId} sym={sym} valueIN={sym.body}></Symb>
        ))} 
        <MyLi onClick={createNewHandler}><AddIcon sx={{fontSize: "medium"}}/></MyLi>
      </ul>
    )}
  else return <li>none to show</li>
}

///////////--------------------------------------////////////////

const EditH1 = styled.h1`
  &:focus{
    outline: 0px solid transparent;
  }

`
const DocTitle: React.FC<{valueIN: string, doc: any}> = ({ valueIN, doc }) => {
  const pageDoc = useAppSelector(state => state.fire.pageDoc)
  //console.log('=--------------------');
  
  //console.log(pageDoc); 
  
  const dis = useAppDispatch()
  const h1Ref = useRef<HTMLDivElement>(null)
  const userUID = useAppSelector(state => state.fire.userUID)
  useEffect(() => {

    onFocus(
      h1Ref.current, 
      () => {}, 
      (target: any) => {
        if(target.textContent){
          dis(updateTitle({
              title: target.textContent,
              docId: pageDoc.docId
          }))
          updateTitleFire(userUID, pageDoc.docId, target.textContent)
        }
      }
    )

  }, [dis])
  if (valueIN) return (
    <EditH1 contentEditable suppressContentEditableWarning ref={h1Ref}>{valueIN}</EditH1>
  )
  else return <h1>loading...</h1>
}

export { DocTitle, Symbs, Symb }
