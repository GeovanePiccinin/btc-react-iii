import React from "react";
import ReactDOM from "react-dom/client";
import { DataFetching } from "./DataFetching";
import StyledComponents from "./StyledComponents";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <StyledComponents /> */}
    <DataFetching />
  </React.StrictMode>
);
