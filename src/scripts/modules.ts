import { PayloadAction } from "@reduxjs/toolkit";

namespace Data {
  export type symType = {
    body: string,
    order: number,
    symId: string,
    docId: string
  }
  export type docType = {
    title: string,
    docId: string,
    syms: symType[] | null
  }
  export type userType = {
    userUID: string,
    name: string,
    userDocs: docType[] | null
  }
}

namespace P {
  export type a<T> = PayloadAction<T>;
}


export type { Data, P };

