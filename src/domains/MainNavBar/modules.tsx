import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import styled from 'styled-components/macro'
import { useAppSelector } from 'store'

const AppBarX = styled(AppBar)<{ open: boolean; drawerwidth: number }>`
  && {
    display: flex;
    align-content: center;
    background: transparent;
    ${({open, drawerwidth}) => (open ? `width: calc(100% - ${drawerwidth}px);` : '')}
    box-shadow: none;
  }
`

const ToolbarS = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`


const AppBarY:React.FC = ({children}) => {

  const sidebarON = useAppSelector(state => state.ui.sidebarON)
  const drawerWidth = useAppSelector(state => state.ui.drawerWidth)

  return (
    <>
      <AppBarX
        open={sidebarON}
        drawerwidth={drawerWidth}
        position='fixed'
      >
        <ToolbarS>
          {children}
        </ToolbarS>
      </AppBarX>
      <Toolbar />
    </>
  )
}

export { AppBarY }
