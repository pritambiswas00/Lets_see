import {
  Container,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Grid,
  GridItem,
  List,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Styles from "@/container/MainApp/MainApp.module.scss";
import { SystemFunction } from "@/APIS/APIS";
import { useEffect, useState } from "react";
import { join } from "path";
import Header from "@/components/Header/Header";

console.log(join("@", "__filename"));

function MainApp() {
  const [state, setState] = useState<string[]>([]);
  const [currentDirList, setCurrentDirList] = useState<
    Record<string, string[]>
  >({});
  const [currentDir, setCurrentDir] = useState<string>("");
  const getDir = async () => {
    const data = await SystemFunction.getAvailableDrives();
    setState(data);
  };

  const openDrive = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    drive: string
  ) => {
    const data = await SystemFunction.readDirectory(drive);
    setCurrentDirList((prevState) => {
      return {
        ...prevState,
        [drive]: data,
      };
    });
    setCurrentDir(drive);
  };
  useEffect(() => {
    getDir();
  }, []);
  return (
    <Container className={Styles.mainContainer}>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"50px 1fr "}
        gridTemplateColumns={"150px 1fr"}
        h="inherit"
        gap="2"
        color="blackAlpha.700"
        fontWeight="bold"
        width={"inherit"}
      >
        <GridItem
          pl="2"
          bg="orange.300"
          area={"header"}
          width={"100%"}
          boxShadow={"0 0 0 1px lightgray"}
        >
          <Header />
        </GridItem>
        <GridItem
          pl="2"
          bg="pink.300"
          area={"nav"}
          width={"100%"}
          boxShadow={"0 0 0 1px lightgray"}
        >
          <Box
          display={"flex"}
          height={"100%"}
          flexDirection={"column"}
          gap={3}
          padding={"2px"}

          >
            {state.map((driveList: string, idx:number) => {
              return (
                <Menu key={idx}>
                  <MenuButton
                    rightIcon={<ChevronDownIcon/>}
                    as={Button}
                    onClick={(
                      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                    ) => openDrive(event, driveList)}
                  >
                    {driveList}
                  </MenuButton>
                </Menu>
              );
            })}
          </Box>
        </GridItem>
        <GridItem
          pl="2"
          bg="green.300"
          area={"main"}
          width={"100%"}
          boxShadow={"0 0 0 1px lightgray"}
        >
          {currentDirList[currentDir] && (
             currentDirList[currentDir].map((item: string, idx:number) => {
                  return (
                   <p key={idx}>{item}</p>
               )
             
             })
          )}
        </GridItem>
      </Grid>
    </Container>
  );
}

export default MainApp;
