import React from 'react';
import { Box } from '@chakra-ui/react';
import Styles from "./Header.module.scss";

function Header() {
  return (
    <Box className={Styles.header}>
        File Explorer
    </Box>
  )
}

export default Header