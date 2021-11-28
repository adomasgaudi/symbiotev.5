import {DivRow, Typo} from './styles'
import { toggleSidebar, updateDisplayName, updateUserUID, useAppDispatch, useAppSelector } from 'store'

import { AppBarY } from './modules'
import {ButtonX} from 'comps'
import { ChevronRightIconX } from './styles'
import { auth } from 'scripts'
import { signOut } from '@firebase/auth'

const MainNavBar = () => {
  const dis = useAppDispatch()
  const sidebarON = useAppSelector(state => state.ui.sidebarON)
  const displayName = useAppSelector(state => state.fire.displayName)

  const logOutHandler = async () => {
    await signOut(auth)
    window.location.reload()
    dis(updateDisplayName(null))
    dis(updateUserUID(null))
  }

  return (
    <AppBarY>

        <DivRow>
          {sidebarON ? null : (<>
            <ButtonX onClick={() => {dis(toggleSidebar())}} variant='text'>
              OPEN<ChevronRightIconX />
            </ButtonX>
          </>)}
        </DivRow>

        <DivRow>
          {displayName ? <Typo>{displayName} - documents</Typo> : null}
        </DivRow>


        <DivRow>
          {displayName ? (
            <ButtonX onClick={logOutHandler}>LOG-OUT</ButtonX>
          ) : null}
        </DivRow>

    </AppBarY>
  )
}

export default MainNavBar
