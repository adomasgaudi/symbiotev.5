import { BaseCSS, FunkyCSS, GeneralCSS, themeFunction } from 'assets'
import { Main, Welcome } from 'domains'

import { DataComp } from 'comps'
import { ThemeProvider } from 'styled-components/macro';
import { useAppSelector } from 'store'

const CssComp = () => (<><BaseCSS /><FunkyCSS /><GeneralCSS /></>)

const App = () => {
  const themeId = useAppSelector(state => state.ui.themeId)  
  const userUID = useAppSelector(state => state.data.userUID)  
  const colorId = useAppSelector(state => state.ui.colorId)  

  return (
    <ThemeProvider theme={ themeFunction(themeId, colorId) }>
      <CssComp />
      <div className='App'>
        <DataComp />
        { userUID ? <Main /> : <Welcome /> }
      </div>
    </ThemeProvider>
  )
}

export default App
