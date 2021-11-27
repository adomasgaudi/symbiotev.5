import { Data, P } from './modules'
import {
  auth,
  createNewDoc,
  createNewSym,
  db,
  deleteSym,
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
}
export type { Data, P }
