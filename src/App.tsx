import styled from "styled-components";

const StyledHeader = styled.h1`
  color: #3636e9;
  font-size: 42px;
`;

const StyledData = styled("p")`
  font-size: 24px;
  font-weight: 700;
  color: #8d8dff;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid black;
  padding: 8px 16px;
`;

const StyledSuccessButton = styled(StyledButton)`
  border-color: green;
  color: green;
`;

const StyledFailedButton = styled(StyledButton)`
  border-color: red;
  color: red;
`;

function App() {
  return (
    <div>
      <StyledHeader>Rodrigo Borba</StyledHeader>
      <StyledData>rodrigo@borba.com</StyledData>
      <StyledData>81-99999-9999</StyledData>
      <StyledData>Brasil</StyledData>

      <StyledSuccessButton>Adicionar</StyledSuccessButton>
      <StyledFailedButton>Remover</StyledFailedButton>

      <StyledButton>Detalhes</StyledButton>
    </div>
  );
}

export default App;
