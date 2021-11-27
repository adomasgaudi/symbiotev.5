import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore'
import { getDocs, setDoc } from '@firebase/firestore'

import { Data } from 'scripts'
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

// to hide the values of api keys & stuff
require('dotenv').config()

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

// Initialize Firebase
initializeApp(firebaseConfig)

// exported below
const db = getFirestore()
const auth = getAuth()


// get firestore userDocs based on user uid
const getFire = async (userUID: string) => {
  let userDocsArray: any = []
  if (userUID) {
    const userDocsSnap = await getDocs(
      collection(db, 'users', userUID, 'userDocs')
    )

    // For each doc, push doc properties and each sym properties to the userDocsArray. 
    // Used for-loops for async/await functionality.
    for (let i = 0; i < userDocsSnap.docs.length; i++) {
      let doc = userDocsSnap.docs[i]

      const syms = await 
        getDocs(collection(db, 'users', userUID, 'userDocs', doc.id, 'syms'))

      // set new sym array for each doc
      let symsArray: any = []
      // For each sym add properties to symsArray
      for (let i = 0; i < syms.docs.length; i++) {
        let sym = syms.docs[i]
        symsArray = [
          ...symsArray,
          {
            body: sym.data().body,
            symId: sym.id,
            order: sym.data().order,
            docId: doc.id,
          }
        ]
      }

      userDocsArray = [
        ...userDocsArray,
        { title: doc.data().title, docId: doc.id, syms: symsArray },
      ]
    }
    return userDocsArray
  }

}

const updateSymFire = async (
  userUID: string,
  sym: Data.symType,
  body: string
) => {
  await setDoc(
    doc(db, 'users', userUID, 'userDocs', sym.docId, 'syms', sym.symId), {
      body,
      order: sym.order || 1,
    }
  )
}

////////////////////////////////////////////////////////////////////
const updateTitleFire = async (userUID: string, docId: string, title: string) => {
  //console.log({docId});

  await setDoc(doc(db, 'users', userUID, 'userDocs', docId), {
    title,
  })
}

const createNewDoc = async (userUID: string) => {
  // add title
  const docRef = await addDoc(collection(db, 'users', userUID, 'userDocs'), {
    title: 'untitled',
  })

  // add one sym 
  addDoc(collection(db, 'users', userUID, 'userDocs', docRef.id, 'syms'), {
    body: "___",
    order: 1,
    docId: docRef.id,
  })
}

const createNewSym = async (userUID: string, docId: string) => {
  addDoc(collection(db, 'users', userUID, 'userDocs', docId, 'syms'), {
    body: 'wait a minute',
    order: 1,
    docId
  })
}


const googleLogin = async () => {
  // // Sign in using a popup.
  const provider = new GoogleAuthProvider()
  provider.addScope('profile')
  provider.addScope('email')
  const result = await signInWithPopup(auth, provider)
  return result
}

const deleteSym = async (userUID: string, docId: string, symId: string) => {
  deleteDoc(doc(db, "users", userUID, 'userDocs', docId, 'syms', symId));
}
const deleteUserDoc = async (userUID: string, docId: string) => {
  deleteDoc(doc(db, "users", userUID, 'userDocs', docId));
}

export {
  getFire,
  updateSymFire,
  updateTitleFire,
  db,
  auth,
  createNewDoc,
  googleLogin,
  createNewSym,
  deleteSym,
  deleteUserDoc
}
