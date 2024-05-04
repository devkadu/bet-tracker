import { Container, Header, Table } from "./styles";

const InfoView = ({ bets }) => {
  const message = "hello world";
  console.log(bets);

  return (
    <div style={{ border: '1px solid blue'}}>
      {message}
      <Container>
        <Table>
      
          <tr>
            <Header scope="col">Data</Header>
            <Header scope="col">Esporte</Header>
            <Header scope="col">valor</Header>
          </tr>
         {bets.map((bet, index) => (
          <tr key={index}>
           
            <td>{bet.data}</td>
            <td>{bet.sport}</td>
            <td>{bet.valor}</td>
          </tr>
          ))}
         
        </Table>
      </Container>
    </div>
  );
};

export default InfoView;
