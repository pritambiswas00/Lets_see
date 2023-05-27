import {
  Container,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import Styles from "@/container/MainApp/MainApp.module.scss";
import { SystemFunction } from "@/APIS/APIS";
import { useEffect, useState } from "react";
import { join } from "path";

console.log(join("@", "__filename"));

function MainApp() {
  const [state, setState] = useState<string[]>([]);
  const [currentDirList, setCurrentDirList] = useState<
    Record<string, string[]>
  >({});
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
  };
  useEffect(() => {
    getDir();
  }, []);
  return (
    <Container className={Styles.mainContainer}>
      <Box className={Styles.leftSidebar}>
        {state.map((driveList: string) => {
          return (
            <Menu>
              <MenuButton
                as={Button}
                onClick={(
                  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => openDrive(event, driveList)}
              >
                {driveList}
              </MenuButton>
              <MenuList>
                {currentDirList[driveList]?.map((item) => {
                  return <MenuItem>{item}</MenuItem>;
                })}
              </MenuList>
            </Menu>
          );
        })}
      </Box>
      <Box className={Styles.rightSidebar}>RightSidebar</Box>
    </Container>
  );
}

export default MainApp;
