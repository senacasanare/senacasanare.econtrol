// Import the functions you need from the SDKs you need
import { initializeApp } 
from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getFirestore, 
        doc,
        getDoc,
        setDoc,
        updateDoc
     } 
from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js"

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyDa7s2uAZDuJbYcQKFBEQDib7vhxOyYlz0",
    authDomain: "e-carnet-53d4b.firebaseapp.com",
    projectId: "e-carnet-53d4b",
    storageBucket: "e-carnet-53d4b.appspot.com",
    messagingSenderId: "249877141028",
    appId: "1:249877141028:web:eefd32d643e06c24a6aab1",
    measurementId: "G-SVYB8S5S14"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const regaprendiz=(trol,tdoc,numdoc,nom,rh,ficha,titulada,jornada,sede,perfil)=>{
    setDoc(doc(db,'Aprendiz',numdoc),{
        trol,
        tdoc,
        numdoc,
        nom,
        rh,
        ficha,
        titulada,
        jornada,
        sede,
        perfil
    })
}

export const regelemento=(numdoc,marca,tipo,referencia,registro,estado)=>{
    setDoc(doc(db,'Elemento1',numdoc),{
        marca,
        tipo,
        referencia,
        registro,
        estado
    })
}

export const regopcional1=(numdoc,marca,tipo,referencia,registro,estado)=>{
    setDoc(doc(db,'Elemento2',numdoc),{
        marca,
        tipo,
        referencia,
        registro,
        estado
    })
}

export const regopcional2=(numdoc,marca,tipo,referencia,registro,estado)=>{
    setDoc(doc(db,'Elemento3',numdoc),{
        marca,
        tipo,
        referencia,
        registro,
        estado
    })
}

export const act_elemento1 =(numdoc,marca,tipo,referencia,registro,estado)=>{
    updateDoc(doc(db,'Elemento1',numdoc),{
        marca,
        tipo,
        referencia,
        registro,
        estado
    });
} 

export const act_elemento2 =(numdoc,marca,tipo,referencia,registro,estado)=>{
    updateDoc(doc(db,'Elemento2',numdoc),{
        marca,
        tipo,
        referencia,
        registro,
        estado
    });
}

export const act_elemento3 =(numdoc,marca,tipo,referencia,registro,estado)=>{
    updateDoc(doc(db,'Elemento3',numdoc),{
        marca,
        tipo,
        referencia,
        registro,
        estado
    });
}


export const search_aprendiz = numdoc => getDoc(doc(db,'Aprendiz',numdoc));

export const search_elemento = numdoc => getDoc(doc(db,'Elemento1',numdoc));

export const search_opc1 = numdoc => getDoc(doc(db,'Elemento2',numdoc));

export const search_opc2 = numdoc => getDoc(doc(db,'Elemento3',numdoc));

const auth = getAuth(app);

export const loginvalidation=(email,password)=>signInWithEmailAndPassword(auth, email, password);

  
