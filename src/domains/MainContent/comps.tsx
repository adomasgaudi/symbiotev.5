import { updateSym, updateTitle, useAppDispatch, useAppSelector } from 'store'
import {updateSymFire, updateTitleFire} from 'scripts'
import { useEffect, useRef } from 'react'

import {onFocus} from 'scripts'
import styled from 'styled-components'

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
              docId: sym.docId
          }))
          updateSymFire(userUID, pageDoc.docId, sym, target.textContent)
        }
      }
    )

  }, [sym, dis])

  return (
    <EditDiv contentEditable suppressContentEditableWarning ref={divRef}>
      {valueIN}
    </EditDiv>
  )
}

//////////------------------------------------------/////////

const Symbs = () => {
  const pageDoc = useAppSelector(state => state.fire.pageDoc)
  if (pageDoc){
    const syms = pageDoc.syms
    //console.log('hey hey heyyyyyyy', syms);
    //console.log(syms[0]);
    //console.log(' wasawasawasawasawasaaaaaaap bitconeeeeeeeect');
    
    //console.log(pageDoc);
    
    return (
      <ul>
        {syms.map((sym: any) => (
          <Symb key={sym.symId} sym={sym} valueIN={sym.body}></Symb>
        ))}
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
  console.log('=--------------------');
  
  console.log(pageDoc); 
  
  const dis = useAppDispatch()
  const h1Ref = useRef<HTMLDivElement>(null)
  const userUID = useAppSelector(state => state.fire.userUID)
  useEffect(() => {

    onFocus(
      h1Ref.current, 
      () => {}, 
      (target) => {
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
