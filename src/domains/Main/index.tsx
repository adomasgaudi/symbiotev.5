import { MainContent, MainDrawer, MainNavBar } from 'domains'

import styledC from 'styled-components'

const MainIn = styledC.div`
  display: flex;
  flex-direction: row; 
  background-color: 'black';
  color: 'white';
  min-height: 100vh;
  `
  // background-color: ${({theme}) => (theme.dark.background)};
  // color: ${({theme}) => (theme.dark.font)};

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
