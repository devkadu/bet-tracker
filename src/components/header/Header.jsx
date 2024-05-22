import { Wrapper } from "./styles";

const Header = ()=>{
    const title = 'Bet Tracker';

    return(
        <Wrapper>

            <h1>{title}</h1>
            <ul>
                <li><a href="#">rendimentos</a></li>
                <li><a href="#">perdas</a></li>
                <li><a href="#">resumo</a></li>
                <li><a href="#">rede sociais</a></li>
                <li><a href="#">sobre</a></li>
            </ul>

        </Wrapper>
    )
}

export default Header;