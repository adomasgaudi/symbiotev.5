import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore'
import { getDocs, setDoc } from '@firebase/firestore'

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
const db = getFirestore()
const auth = getAuth()

const getFire = async (userUID: string) => {
  let userDocsArray: any = []
  if (userUID) {
    const userDocsSnap = await getDocs(
      collection(db, 'users', userUID, 'userDocs')
    )

    for (let i = 0; i < userDocsSnap.docs.length; i++) {
      let doc = userDocsSnap.docs[i]
      // console.log(`docid => ${doc.id} `);
      // console.log(doc.data());

      const syms = await getDocs(
        collection(db, 'users', userUID, 'userDocs', doc.id, 'syms')
      )

      let symsArray: any = []

      // console.log(syms.docs);
      for (let i = 0; i < syms.docs.length; i++) {
        let sym = syms.docs[i]
        symsArray = [
          ...symsArray,
          {
            body: sym.data().body,
            symId: sym.id,
            order: sym.data().order,
            docId: doc.id,
          },
        ]
        // console.log({symsArray});
      }
      userDocsArray = [
        ...userDocsArray,
        { title: doc.data().title, docId: doc.id, syms: symsArray },
      ]
      //console.log({userDocsArray});
    }
  }

  return userDocsArray
}

const updateSymFire = async (
  userUID: any,
  docId: any,
  sym: any,
  body: string
) => {
  await setDoc(
    doc(db, 'users', userUID, 'userDocs', docId, 'syms', sym.symId),
    {
      body,
      order: sym.oder || 1,
    }
  )
}
const updateTitleFire = async (userUID: any, docId: any, title: string) => {
  //console.log({docId});

  await setDoc(doc(db, 'users', userUID, 'userDocs', docId), {
    title,
  })
}

const createNewDoc = async (userUID: any) => {
  const docRef = await addDoc(collection(db, 'users', userUID, 'userDocs'), {
    title: 'empty',
  })


  addDoc(collection(db, 'users', userUID, 'userDocs', docRef.id, 'syms'), {
    body: "so... what's up?",
    order: 1,
    docId: docRef.id,
  })
}

const createNewSym = async (userUID: any, docId: any) => {
  const docRef = await addDoc(collection(db, 'users', userUID, 'userDocs', docId, 'syms'), {
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

const deleteSym = async(userUID: any, docId: any, symId: any) => {
  deleteDoc(doc(db, "users", userUID, 'userDocs', docId , 'syms', symId));
}
const deleteUserDoc= async(userUID: any, docId: any) => {
  deleteDoc(doc(db, "users", userUID, 'userDocs', docId ));
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
