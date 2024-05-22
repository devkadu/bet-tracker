import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 90%;
  border: 1px solid black;
  margin: 0 auto;

  ul {
    display: flex;
    gap: 50px;
    list-style-type: none;

    a {
      text-decoration: none;
    }
  }
  li {
    text-decoration: none;
    :hover {
      background-color: ${(props) => props.theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    ul {
      display: none;
    }
    /* background-color: tomato; */
  }
`;
