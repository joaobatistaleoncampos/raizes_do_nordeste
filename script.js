



// IMPORTS DO FIREBASE
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// CONFIG DO FIREBASE (COLAR AQUI O QUE PEGUEI DO FIREBASE)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsq_mvF97rHBlO3znTTOpzZWF1hllnycY",
  authDomain: "autoescola-c34ac.firebaseapp.com",
  projectId: "autoescola-c34ac",
  storageBucket: "autoescola-c34ac.appspot.com",
  messagingSenderId: "214961750877",
  appId: "1:214961750877:web:c6496ed2c356e69a295eb4",
  measurementId: "G-WLQV7V9J1K"
};

// INICIA FIREBASE
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// PEGAR ELEMENTOS
const form = document.getElementById("formDoacao");
//const form = document.getElementById("catB");


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // CAMPOS
  const nome = document.getElementById("nome").value;
  const contato = document.getElementById("contato").value;
  const jaDirijo = document.getElementById("checkbox1").checked;
  const tenhoNocao = document.getElementById("checkbox2").checked;
  const tenhoDificuldade = document.getElementById("checkbox3").checked;
  const nuncaDirigi = document.getElementById("checkbox4").checked;
  
  // SALVA TODOS EM UM ÚNICO BANCO

  // troquei "doacoes" por "cliente"
  try {
    await addDoc(collection(db, "cliente"), {
      nome: nome,
      contato: contato,
      itens: {
        jaDirijo: jaDirijo,
        tenhoNocao: tenhoNocao,
        tenhoDificuldade: tenhoDificuldade,
        nuncaDirigi:nuncaDirigi
      },
      data: new Date()

    });
    alert("Contato registrado,em breve alguém vai entrar em contato!");
    form.reset();

  } catch (erro) {
    console.error("Erro ao salvar:", erro);
    alert("Erro ao salvar!");
  }
});





