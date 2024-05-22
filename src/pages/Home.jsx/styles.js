import styled from "styled-components";
import theme from "../../theme/theme";

export const Wrapper = styled.div`

a {
    height: 43px;
    width: 200px;
    background-color: ${theme.colors['primary']};
    border-radius: 5px;
    display: flex;
    color: ${theme.colors['black']};
    text-decoration: none;
    justify-content: center;
    align-items: center;
}
`;