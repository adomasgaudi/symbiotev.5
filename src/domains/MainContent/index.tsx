import {DocTitle, Symbs} from './comps'
import {MyContainer, StyledDiv} from './styles'

import { useTheme } from '@mui/system'

const MainContent = () => {
  const theme = useTheme()
  console.log({ theme })

  return (
    <StyledDiv>
      <MyContainer>
        <DocTitle />
        <Symbs />
      </MyContainer>
    </StyledDiv>
  )
}

export {}
export default MainContent
