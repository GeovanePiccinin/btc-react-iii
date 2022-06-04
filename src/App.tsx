import styled, { css, keyframes, ThemeProvider } from "styled-components";
import { useState } from "react";

const StyledHeader = styled.h1`
  color: ${(props) => props.theme.main};
  font-size: 42px;
`;

const StyledData = styled("p")`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.seconday};
`;

type TStyledButtonProps = {
  variant?: "success" | "failed";
};

const RotateKeyFrame = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

const themeBlue = {
  main: "blue",
  seconday: "#3636e9",
};

const themeRed = {
  main: "red",
  seconday: "#ff4343",
};

const StyledButton = styled.button<TStyledButtonProps>`
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid black;
  padding: 8px 16px;

  :hover {
    cursor: pointer;
    background-color: #f2f2f2;
  }

  ${(props) => {
    if (props.variant === "success") {
      return css`
        border-color: green;
        color: green;
      `;
    }

    if (props.variant === "failed") {
      return css`
        border-color: red;
        color: red;
      `;
    }
  }};
`;

function App() {
  const [theme, setTheme] = useState(themeBlue);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <StyledHeader>Rodrigo Borba</StyledHeader>
        <div>
          <StyledButton onClick={() => setTheme(themeBlue)}>
            Set Blue theme
          </StyledButton>
          <StyledButton
            style={{ marginLeft: "8px" }}
            onClick={() => setTheme(themeRed)}
          >
            Set Red theme
          </StyledButton>
        </div>
        <StyledData>rodrigo@borba.com</StyledData>
        <StyledData>81-99999-9999</StyledData>
        <StyledData>Brasil</StyledData>

        <StyledButton variant="success">Adicionar</StyledButton>
        <StyledButton variant="failed" style={{ marginLeft: "8px" }}>
          Remover
        </StyledButton>

        <StyledButton style={{ marginLeft: "8px" }}>Detalhes</StyledButton>
      </ThemeProvider>
    </div>
  );
}

export default App;
