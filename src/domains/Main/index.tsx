import { MainContent, MainDrawer, MainNavBar } from 'domains'

import styledC from 'styled-components'

const MainIn = styledC.div`
  display: flex;
  flex-direction: row; 
  background-color: ${({theme}) => (theme.dark.background)};
  color: ${({theme}) => (theme.dark.font)};
  min-height: 100vh;
`

const DivMA = styledC.div`
  margin: 0 auto;
`


const Main = () => {
  return (
    <MainIn>
      <MainDrawer />
      <DivMA>
        <MainNavBar />
        <MainContent />
      </DivMA>
    </MainIn>
  )
}

export default Main
