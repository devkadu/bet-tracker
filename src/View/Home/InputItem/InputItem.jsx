import { useState } from "react";
import Input from "../../../components/Inputs/Input";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import FirebaseApp from "../../../services/firebase/FirebaseApp";
import { Link } from "react-router-dom";

const InputItem = ()=>{
    const title = 'Tela de inclusao de apostas';
const [date, setDate] = useState(''); // Estado para armazenar a nova aposta
const [value, setValue] = useState('');
const [ sport, setSport ]= useState('') 
const [market, setMarket ] = useState();
const [goal, setGoal ]=useState('')

const db = getFirestore(FirebaseApp);
const betsCollectionRef = collection(db, 'bets');

    const addBet = async () => {
        try {
          const betsRef = await addDoc(betsCollectionRef, { date, value, sport, goal, market }); // Incluindo o valor da aposta no documento
          // Recarregar a página
          window.location.reload();
        } catch (error) {
          alert("Erro ao adicionar aposta: ", error);
        }
      };

    return(
        <div>
            <div>{title}</div> <Link to='/'>Voltar para tela incial</Link>
    <h1>Bet Tracker</h1>
    <Input placeholder='Data da aposta' value={date} setData={setDate}/>
    <Input placeholder='Valor da aposta' value={value} setData={setValue}/>
    <Input placeholder='Esporte Apostado' value={sport} setData={setSport}/>
    <Input placeholder='Green or Red' value={goal} setData={setGoal}/>
    <Input placeholder='Mercado' value={market} setData={setMarket}/>
   
   
   
    <button onClick={addBet}>Add Bet</button>
   
  </div>
    )
};

export default InputItem;