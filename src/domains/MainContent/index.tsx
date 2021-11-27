import {DocTitle, Symbs} from './comps'
import {MyContainer, StyledDiv} from './styles'

import { useAppSelector } from 'store'

const MainContent = () => {
  const pageDoc = useAppSelector(state => state.fire.pageDoc)
  // console.log();
  return (
    <StyledDiv>
      <MyContainer>
        {pageDoc && <DocTitle valueIN={pageDoc.title} doc={pageDoc} />}
        
        <Symbs />
      </MyContainer>
    </StyledDiv>
  )
  
}

export {}
export default MainContent
