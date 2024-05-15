import { Container, Header, Table } from "./styles";

const InfoView = ({bets}) => {
  const message = "Visão Geral";
  console.log(bets);
 

  return (
   
      <Container>
      <h3>{message}</h3>
        <Table>
      
          <tr>
            <Header scope="col">Data</Header>
            <Header scope="col">Esporte</Header>
            <Header scope="col">Valor</Header>
            <Header scope="col">Mercado</Header>
            <Header scope="col">Green or Red</Header>
          </tr>
         {bets.map((bet, index) => (
          <tr key={index}>
           
            <td>{bet.date}</td>
            <td>{bet.sport}</td>
            <td>{bet.value}</td>
            <td>{bet.market}</td>
            <td>{bet.goal}</td>
          </tr>
          ))}
         
        </Table>
      </Container>
  
  );
};

export default InfoView;
