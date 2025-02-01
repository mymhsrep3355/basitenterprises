// theme.js
import { extendTheme } from "@chakra-ui/react";
import "../../src/index.css"

const theme = extendTheme({
  fonts: {
    heading: "'Bebas Neue', 'Poppins', '', sans-serif", 
    body: "'Playfair Display', 'Poppins', sans-serif", 
  },
  styles: {
    global: {
      "::-webkit-scrollbar": {
        width: "25px",
      },
      "::-webkit-scrollbar-track": {
        background: "white",
        borderRadius: "20px",
      },
      "::-webkit-scrollbar-thumb": {
        background: "linear-gradient(135deg, #C02232, #d62828)",
        borderRadius: "20px",
      },
      html: {
        scrollbarWidth: "thin",
        scrollbarColor: "#C02232 #f4f4f4",
      },
    },
  },
});

export default theme;
