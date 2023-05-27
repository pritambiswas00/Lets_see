import {
  Box,
  Card,
  CardBody,
  IconButton,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { MinusIcon } from "@chakra-ui/icons";
import { IStore, MainStoreReducer, initialState } from "@/store";
import { SystemFunction } from "@/APIS/APIS";

function NavBar() {
  const [existedDrives, setExistedDrives] = useState<string[]>([]);
  const [state, dispatch ] = useReducer(MainStoreReducer, initialState);
  const getDrives = async (): Promise<void> => {
    const data = await SystemFunction.getAvailableDrives();
    setExistedDrives(data);
  };

  const handleSelectedDrives = (drive:string):void=>{
        dispatch({ type: "SET_DRIVE", payload: drive });
  }

  useEffect(() => {
    getDrives();
  }, []);
  return (
    <Box
      bg={"secondary"}
      h={"100%"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"flex-end"}
    >
      <IconButton aria-label="slide" icon={<MinusIcon />} m={2} />
      <Box
        w={"100%"}
        h={"100%"}
        position={"relative"}
        overflow={"auto"}
        borderTop={"1px solid lightgray"}
      >
        <Text
          variant={"h5"}
          fontSize={"15px"}
          fontWeight={"bold"}
          padding={"5px"}
          textAlign={"left"}
          textDecoration={"underline"}
        >
          Exist Drives
        </Text>
        <Box position={"absolute"} margin={"auto"} width={"100%"}>
          <List spacing={3} h={"100%"} margin={"auto"}>
            {existedDrives.map((drive, idx) => {
              return (
                <ListItem
                  key={idx}
                  m={2}
                  w={"inherit"}
                  p={0}
                  width={"inherit"}
                  cursor={"pointer"}
                  onClick={(event)=>handleSelectedDrives(drive)}
                >
                  <Card
                    maxH={"2em"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    p={0}
                    boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
                  >
                    <CardBody>
                      <Text fontWeight={"bold"}>{drive}</Text>
                    </CardBody>
                  </Card>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default NavBar;
