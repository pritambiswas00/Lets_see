import { Fragment, useState } from "react";
import Update from "@/components/update";
import logoVite from "./assets/logo-vite.svg";
import logoElectron from "./assets/logo-electron.svg";
import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import theme from "@/theme/theme";
import Styles from "./App.module.scss";
import NavBar from "./container/NavBar/NavBar";
import MainContent from "./container/MainContent/MainContent";

// Usage: Call the function to get the root directory path

function App() {
  return (
    <Box bg={"primary"} height={"100vh"} display={"grid"}>
      <Grid
        h="100%"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={2}
      >
        <GridItem rowSpan={2} colSpan={1} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} children={<NavBar/>}/>
        <GridItem
          colSpan={4}
          bg="transparent"
          children={
            <Fragment>
              <Grid
                h="100%"
                templateRows="repeat(2, 0.1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={2}
                background={"transparent"}
              >
                <GridItem colSpan={10} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} borderBottomLeftRadius={3} />
                <GridItem rowSpan={2} colSpan={10}  boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}borderTopLeftRadius={3} children={<MainContent/>} />
              </Grid>
            </Fragment>
          }
        />
      </Grid>
    </Box>
  );
}

export default App;
