import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#CBE4DE",
    secondary: "#0E8388",
    buttonColor: "2E4F4F",
    textColor: "#2C3333"
  },
  fonts: {
    body: "Arial, sans-serif",
    heading: "Georgia, serif",
  },
  fontSize: {
     heading: "15px",
     body:"11px"
  },
  boxShadow: "0 0 0 1px lightgray"


  // Other theme customizations...
});

export default theme;