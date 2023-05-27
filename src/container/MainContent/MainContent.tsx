import { SystemFunction } from '@/APIS/APIS';
import  { IStore, MainStoreContext } from '@/store';
import { Box } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';


function MainContent() {
  const context = useContext<IStore>(MainStoreContext);
  const [filesList, setFilesList] = useState<string[]>([])
  const handleDriveFiles = async ():Promise<void>=>{
        const data = await SystemFunction.readDirectory(context.state.current_drive);
        setFilesList(data);
  }

  useEffect(()=>{
      handleDriveFiles();
  },[context.state.current_drive])
   
  return (
    <Box bg={"primary"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} m={5} w={"inherit"}>
        <Box bg={"secondary"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} m={5}  w={"inherit"}>
             {filesList.map((list)=>{
                 return (
                    <li>{list}</li>
                 )
             })}
        </Box>
    </Box>
  )
}

export default MainContent;