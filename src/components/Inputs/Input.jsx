import { Container } from "./styles";

const Input = ({placeholder, value, setData}) => {
    const message = "Please enter";
  
    return (
        <Container>
            <input type="text" value={value} placeholder={placeholder} onChange={(e)=> setData(e.target.value)} />
        </Container>
    )

  };
  
  export default Input;