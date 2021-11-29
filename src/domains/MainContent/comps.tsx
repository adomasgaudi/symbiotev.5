import {
  addPageDoc,
  addUserDocs,
  updateSym,
  updateTitle,
  useAppDispatch,
  useAppSelector,
} from 'store'
import {
  createNewSym,
  deleteSym,
  getFire,
  updateSymFire,
  updateTitleFire,
} from 'scripts'
import { useEffect, useRef } from 'react'

import AddIcon from '@mui/icons-material/Add'
import styled from 'styled-components/macro'

/////////-------------------------------//////////////
const EditH1 = styled.h1`
  &:focus {
    outline: 0px solid transparent;
  }
`

const EditDiv = styled.div`
  &:focus {
    outline: 0px solid transparent;
  }
`

const Symb: React.FC<{ valueIN: string | null; sym: any }> = ({
  valueIN,
  sym,
}) => {
  const dis = useAppDispatch()
  const divRef = useRef<HTMLDivElement>(null)
  const userUID = useAppSelector(state => state.data.userUID)
  const handleBlur = ( ) => {
    if (divRef.current?.textContent) {
      dis(
        updateSym({
          symId: sym.symId,
          body: divRef.current?.textContent,
          docId: sym.docId,
          order: sym.order,
        })
      )
      
      updateSymFire(userUID, sym, divRef.current?.textContent)
    }
  } 

  const handleKeyDown = (e: any) => {
    if (e.key === 'Backspace' && e.ctrlKey) {
      if (userUID) {
        ;(async () => {
          deleteSym(userUID, sym.docId, sym.symId)
          const obj = await getFire(userUID)
          dis(addUserDocs(obj))
          dis(addPageDoc(obj[0]))
        })()
      }
    
    }
  }
  
  useEffect(() => {
    let target = divRef.current
    target?.addEventListener('blur', handleBlur);
    target?.addEventListener('keydown', handleKeyDown);
    // cleanup this component
    return () => {
      target?.removeEventListener('blur', handleBlur);
      target?.addEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [null]);

 

  return (
    <EditDiv contentEditable suppressContentEditableWarning ref={divRef}>
      {valueIN}
    </EditDiv>
  )
}















const DocTitleX: React.FC<{doc: any, valueIN: any}> = ({doc, valueIN}) =>  {
  const dis = useAppDispatch()
  const h1Ref = useRef<HTMLDivElement>(null)
  const userUID = useAppSelector(state => state.data.userUID)

  const handleBlur = (target: any) => {
    if (target.textContent) {
        dis(
          updateTitle({
            title: target.textContent,
            docId: doc.docId,
            order: doc.order,
          })
        )
        
        updateTitleFire(userUID, doc, target.textContent)
    }
  }
  useEffect(() => {
    let target = h1Ref.current
    target?.addEventListener('blur', ()=>handleBlur(target));
    // cleanup this component
    return () => {
      target?.removeEventListener('blur', handleBlur);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);





  return (
    <EditH1 contentEditable suppressContentEditableWarning ref={h1Ref}>
      {valueIN}
    </EditH1>
  )
}




















//////////------------------------------------------/////////

const MyLi = styled.li`
  &:hover {
    box-shadow: 0px 1px 0px 0px yellow;
  }
`

const Symbs = () => {
  const dis = useAppDispatch()
  const userUID = useAppSelector(state => state.data.userUID)
  const pageDoc = useAppSelector(state => state.data.pageDoc)

  const createNewSymHandler = async () => {
    // add emty to firebase
    await createNewSym(userUID, pageDoc.docId)
    if (userUID) {
      ;(async () => {
        const userDocsArr = await getFire(userUID)
        dis(addUserDocs(userDocsArr))
        let thisDoc = userDocsArr.filter((doc: any) => doc.docId === pageDoc.docId)
        
        dis(addPageDoc(thisDoc[0])) 
      })()
    }
  }



  
  if (pageDoc) {
    let arr = [...pageDoc.syms]
    const orderedSyms =  arr.sort((a: any, b: any) => {
      return a.order - b.order
    })
    

    return (
      <ul>
        <DocTitleX key={pageDoc.docId} doc={pageDoc} valueIN={pageDoc.title} />
        {orderedSyms.map((sym: any) => (
          <Symb key={sym.symId} sym={sym} valueIN={sym.body} />
        ))}
        <MyLi onClick={createNewSymHandler}>
          <AddIcon sx={{ fontSize: 'medium' }} />
        </MyLi>
      </ul>
    )
  } else return <li>none to show</li>
}

///////////--------------------------------------////////////////




///////////////////////////////////////////////////////////////


export { Symbs }


