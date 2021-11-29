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

import { onFocusBlur } from './utils'

export {
  auth,
  db,
  getFire,
  updateSymFire,
  onFocusBlur,
  updateTitleFire,
  createNewDoc,
  googleLogin,
  createNewSym,
  deleteSym,
  deleteUserDoc,
}
export type { Data, P }
