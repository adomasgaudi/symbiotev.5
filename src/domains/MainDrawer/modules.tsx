import Drawer from "@mui/material/Drawer"
import { useAppSelector } from "store";
import { useTheme } from '@mui/material/styles'

const DrawerX: React.FC = ({ children }) => {
    const sidebarON = useAppSelector(state => state.ui.sidebarON)
    const drawerWidth = useAppSelector(state => state.ui.drawerWidth)
    const theme = useTheme();
    console.log({sidebarON});
    
    return (
      <Drawer
        variant='persistent'
        anchor='left'
        open={sidebarON}
        sx={{
          boxSizing: 'border-box',
          width: `${sidebarON ? drawerWidth : 0}px`,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            padding: `${sidebarON ? theme.spacing(0, 1) : 0}`
          }
        }}
      >
        {children}
      </Drawer>
    )
  }

  export {DrawerX}

