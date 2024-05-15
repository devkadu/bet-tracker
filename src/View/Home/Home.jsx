import { useEffect, useState } from "react";
import InfoView from "../../components/infoView/InfoView"
import { collection, getDocs, getFirestore } from "firebase/firestore";
import FirebaseApp from "../../services/firebase/FirebaseApp";
import { Link } from "react-router-dom";

const Home = ()=>{
    const [bets, setBets] = useState([]); // Estado para armazenar as apostas

    useEffect(() => {
      const db = getFirestore(FirebaseApp);
      const betsCollectionRef = collection(db, 'bets');
  
      const getBets = async () => {
        const data = await getDocs(betsCollectionRef);
        setBets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      }
  
      getBets();
    }, []);
    return(
        <>
        
        <InfoView bets={bets}/>
        <Link to="/new-bet">Adicione uma aposta</Link>
        </>
    )
}

export default Home;