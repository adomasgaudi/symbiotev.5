import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { addDoc, collection, doc } from 'firebase/firestore'
import { getDocs, setDoc } from '@firebase/firestore'

import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCvsodHsopMmaVtvpXxlDtW9gX-JT9yI1E',
  authDomain: 'symbiote-project.firebaseapp.com',
  projectId: 'symbiote-project',
  storageBucket: 'symbiote-project.appspot.com',
  messagingSenderId: '939051817023',
  appId: '1:939051817023:web:a63c114e9b9ba6110b808a',
  measurementId: 'G-LNNPYZ7QSX',
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

  console.log({ docRef })

  addDoc(collection(db, 'users', userUID, 'userDocs', docRef.id, 'syms'), {
    body: "so... what's up?",
    order: 1,
    docId: docRef.id,
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

export {
  getFire,
  updateSymFire,
  updateTitleFire,
  db,
  auth,
  createNewDoc,
  googleLogin,
}
