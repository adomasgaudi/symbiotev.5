import { Data, P } from './modules'
import {auth, createNewDoc, db, getFire, googleLogin, updateSymFire, updateTitleFire} from './firebase'

import {onFocus} from './utils'

export {auth, db, getFire, updateSymFire, onFocus, updateTitleFire, createNewDoc, googleLogin}
export type {Data, P}
