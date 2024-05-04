// Importando as bibliotecas necessárias
import  { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { addDoc, collection,  getDocs, getFirestore } from 'firebase/firestore';
import Home from './View/Home/Home';
import settings from './settings';


// Configuração do Firebase
const firebaseApp = initializeApp ( {
  apiKey: settings.API_KEY_FIREBASE,
  authDomain: "apostas-base.firebaseapp.com",
  projectId: "apostas-base",
  storageBucket: "apostas-base.appspot.com",
  messagingSenderId: settings.MESSAGING_SENDER_ID,
  appId: settings.APP_ID,
  measurementId:settings.MEASUREMENT_ID,
});

const App = ()=> {
// Componente principal do aplicativo
const [bets, setBets] = useState([]); // Estado para armazenar as apostas
const [data, setData] = useState(''); // Estado para armazenar a nova aposta
const [valor, setValor] = useState('');
const [ sport, setSport ]= useState('') // Estado para armazenar o valor da nova aposta

const db = getFirestore(firebaseApp);
const betsCollectionRef = collection(db, 'bets');

useEffect(() => {
  const getBets = async () => {
    const data = await getDocs(betsCollectionRef);
    setBets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }
  getBets();
}, [])

const addBet = async () => {
  try {
    const betsRef = await addDoc(betsCollectionRef, { data, valor, sport }); // Incluindo o valor da aposta no documento
    // Recarregar a página
    window.location.reload();
  } catch (error) {
    alert("Erro ao adicionar aposta: ", error);
  }
};

return (
  <div>
    <h1>Bet Tracker</h1>
    <input
      type="text"
      value={data}
      onChange={(e) => setData(e.target.value)}
      placeholder="Data da aposta"
    />
    <input
      type="text"
      value={valor}
      onChange={(e) => setValor(e.target.value)}
      placeholder="Valor da aposta"
    />
    <input
      type="text"
      value={sport}
      onChange={(e) => setSport(e.target.value)}
      placeholder="Esporte da aposta"
    />
    <button onClick={addBet}>Add Bet</button>
    <Home bets={bets} />
  </div>
);
}

export default App;

