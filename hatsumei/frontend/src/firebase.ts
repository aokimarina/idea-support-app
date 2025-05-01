// firebase.ts
"use client";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  //TODO:追加
};

const app = initializeApp(firebaseConfig);

// サービスのインスタンス化
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
