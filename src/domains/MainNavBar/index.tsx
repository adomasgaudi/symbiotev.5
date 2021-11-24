import {toggleSidebar, useAppDispatch, useAppSelector} from 'store'

import AppBar from '@mui/material/AppBar'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles'

const MainNavBar = () => {

  const dis = useAppDispatch()
  const sidebarON = useAppSelector(state => state.ui.sidebarON )
  const theme = useTheme();  console.log( {...theme.mixins.toolbar});
  const drawerWidth = useAppSelector(state => state.ui.drawerWidth)
  const signedIN = true;
  
  
  
  return (
    <>
      <AppBar 
        position='fixed' 
        sx={{ ...(sidebarON && {  width: `calc(100% - ${drawerWidth}px)` })  }}
      >
        <Toolbar
          sx={{display: 'flex', justifyContent: 'space-between'}}
        >
          <div>
            {sidebarON ? null : (
              <IconButton onClick={  ()=>{dis(toggleSidebar())}  }>
                <ChevronRightIcon />  
              </IconButton>
            )}
          </div>
          <div>
            {signedIN ? (<Typography>userName</Typography>) : null }
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default MainNavBar
