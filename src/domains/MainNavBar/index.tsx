import { Button, Typography } from '@mui/material';
import {toggleSidebar, useAppDispatch, useAppSelector} from 'store'

import AppBar from '@mui/material/AppBar'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar';
import { auth } from 'scripts';
import { signOut } from '@firebase/auth';
import styled from '@mui/system/styled';
import styledC from 'styled-components';

// import

const DivRow = styledC.div` 
  display: flex;
  flex-flow: row nowrap;
`



const AppBarY = styledC(AppBar)` 
  color: 'white'
  `
  // color: ${({theme}) => theme.dark.font}


const Typo = styled(Typography)(({theme}) => {
  return ({
    color: 'red',
    fontFamily: 'proggy',
    fontSize: '23px'
  })
})


// const MyThemeComponent = styled('div')(({ theme }) => ({
//   color: theme.palette.primary.contrastText,
//   backgroundColor: theme.palette.primary.main,
//   padding: theme.spacing(1),
//   borderRadius: theme.shape.borderRadius,
// }));


const MainNavBar = () => {

  const dis = useAppDispatch()
  const sidebarON = useAppSelector(state => state.ui.sidebarON )
  // const theme = useTheme(); 
  const drawerWidth = useAppSelector(state => state.ui.drawerWidth)
  const displayName = useAppSelector(state => state.fire.displayName);
  
  const logOutHandler = async() => {
    await signOut(auth)
    window.location.reload();
  }
  
  return (
    <>
      <AppBarY 
        position='fixed' 
        sx={{ 
          ...(sidebarON && {  width: `calc(100% - ${drawerWidth}px)` }),
          display: 'flex',
          alignContent: 'center',
          background: 'transparent'

        }}
      >
        <Toolbar
          sx={{display: 'flex', justifyContent: 'space-between'}}
        >
          <DivRow>
            {sidebarON ? null : (
              <IconButton onClick={  ()=>{dis(toggleSidebar())}  }>
                <ChevronRightIcon color="primary"/>  
              </IconButton>
            )}
          </DivRow>
          <DivRow>
            {displayName !== '' ? (<Typo>{displayName}</Typo>) : null }
            {displayName !== '' ? (<Button onClick={logOutHandler}>LOG-OUT</Button>) : null }
          </DivRow>
        </Toolbar>
      </AppBarY>
      <Toolbar />
    </>
  )
}

export default MainNavBar
