import { Data, db } from 'scripts'

import { collection } from 'firebase/firestore'
import { getDocs } from '@firebase/firestore'

const getFire = async (userUID: string) => {

  let userDocsArray: any = [];
  if (userUID) {
    const userDocsSnap = await getDocs(
      collection(db, 'users', userUID, 'userDocs')
    )

    for (let i = 0; i < userDocsSnap.docs.length; i++) {
      let doc = userDocsSnap.docs[i];
      // console.log(`docid => ${doc.id} `);
      // console.log(doc.data());
      
      const syms = await getDocs(
        collection(db, 'users', userUID, 'userDocs', doc.id, 'syms')
        )

        let symsArray: any = [];
        
        // console.log(syms.docs);
        for (let i = 0; i < syms.docs.length; i++) {
          let sym = syms.docs[i];
          symsArray = [...symsArray, {body: sym.data().body, symId: sym.id, order: sym.data().order}]
          console.log({symsArray});
          
        }
      userDocsArray = [...userDocsArray, {title: doc.data().title, docId: doc.id, syms: symsArray}]
      console.log({userDocsArray});
      
      
    }
    
  }

  // return userDocsArray
  // let userDocsArray: any = []

  //   if (userDocsSnap.docs.length !== 0){
  //     userDocsArray = userDocsSnap.forEach(doc => {

  //         return (async () => {
  //           let localSyms: any = []

  //           userDocsArray = await (async (doc: any) => {
  //             const Syms: any = await getDocs(
  //               collection(db, 'users', userUID, 'userDocs', doc.id, 'syms')
  //             )
  //             Syms.forEach((sym: any) => {
  //               localSyms = [...localSyms, { ...sym.data(), symId: sym.id }]
  //               // console.log({ localSyms })
  //             })
  //             // console.log({ localSyms }, 'under')

  //             userDocsArray = [
  //               ...userDocsArray,
  //               { ...doc.data(), docId: doc.id, syms: localSyms },
  //             ]
  //             return userDocsArray
  //           })(doc)

  //           console.log('this is it')
  //           console.log(userDocsArray)
  //           return userDocsArray
  //         })()

  //     })
  //   }
  // }

  // [
  //   {
  //     "docId": "1e46dbe8-7510-40b4-891e-24025a47738d",
  //     "title": "Mauris lacinia sapien quis libero.",
  //     "syms": [
  //       {
  //         "body": "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  //         "symId": "0e3e7670-3e70-4164-ba8e-67532debe556",
  //         "order": 1
  //       }
  //     ]
  //   }
  // ]
  console.log('hiii');
  
  console.log(userDocsArray);
  
  return userDocsArray
}

export { getFire }
