import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#7B341E",
    800: "#9C4221",
    700: "#DD6B20",
    600: "#ED8936",
    500: "#F6AD55",
    400: "#FBD38D",
    300: "#FEEBC8",
    200: "#FFF5EB",
    100: "#FFFAF0",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
