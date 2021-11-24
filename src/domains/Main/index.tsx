import { MainContent, MainDrawer, MainNavBar } from 'domains'

import Toolbar from '@mui/material/Toolbar'
import styled from 'styled-components'

const MainIn = styled.div`
  display: flex;
  flex-direction: row;
`

const Main = () => {
  return (
    <MainIn>
      <MainDrawer />
      <div>
        <MainNavBar />
        <MainContent />
      </div>
    </MainIn>
  )
}

export default Main
