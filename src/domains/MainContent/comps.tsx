import { useAppDispatch, useAppSelector } from 'store'
import { useEffect, useRef } from 'react'

/////////-------------------------------//////////////

const Symb: React.FC<{sym: any}> = ({ children, sym }) => {
  const dis = useAppDispatch()
  const divRef = useRef<HTMLDivElement>(null)
  const pageDoc = useAppSelector(state => state.fire.pageDoc)
  const userUID = useAppSelector(state => state.fire.userUID)
  console.log({ pageDoc })

  useEffect(() => {
    console.log(shit is real);
    
    const onFocus = (
      target: HTMLElement | null,
      callbackFocus: (e: any) => void,
      callbackBlur: (e: any) => void
    ) => {
      if (target) {
        target.addEventListener('focus', (e) => {
          callbackFocus(e)
        })
        target.addEventListener('blur', (e) => {
          callbackBlur(e)
        })
      }
    }

    onFocus(divRef.current, 
      () => {console.log(sym);
      }, 
      () => { }
    )

    // divRef.current?.addEventListener('focus', () => {
    //   console.log(sym)

    //   console.log(divRef.current?.textContent)
    //   if (divRef.current?.textContent) {
    //     dis(
    //       updateSym({
    //         docId: pageDoc.docId,
    //         symId: sym.symId,
    //         body: divRef.current.textContent,
    //       })
    //     )
    //     updateSymFire(userUID, pageDoc.docId, sym, divRef.current.textContent)
    //   }
    // })
  }, [])

  return (
    <div contentEditable suppressContentEditableWarning ref={divRef}>
      {{ valueIN }}
    </div>
  )
}

//////////------------------------------------------/////////

const Symbs = () => {
  const pageDoc = useAppSelector(state => state.fire.pageDoc)
  if (pageDoc)
    return (
      <ul>
        {pageDoc.syms.map((sym: any) => (
          <Symb key={sym.symId}>{sym.body}</Symb>
        ))}
      </ul>
    )
  else return <li>none to show</li>
}

///////////--------------------------------------////////////////

const DocTitle = () => {
  const pageDoc = useAppSelector(state => state.fire.pageDoc)
  if (pageDoc) return <h1>{pageDoc.title}</h1>
  else return <h1>loading...</h1>
}

export { DocTitle, Symbs, Symb }
