import { Data, P } from './modules'
import {
  auth,
  createNewDoc,
  createNewSym,
  db,
  deleteSym,
  deleteUserDoc,
  getFire,
  googleLogin,
  updateSymFire,
  updateTitleFire
} from './firebase'

import { onFocus } from './utils'

export {
  auth,
  db,
  getFire,
  updateSymFire,
  onFocus,
  updateTitleFire,
  createNewDoc,
  googleLogin,
  createNewSym,
  deleteSym,
  deleteUserDoc,
}
export type { Data, P }
