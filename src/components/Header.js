import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import {tokens} from '../theme.js';

function Header(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb='30px'>
      <Typography variant='h2' color = {colors.grey[100]} fontWeight = "bold" sx = {{mb: '5px'}}>
      {props.title}
      </Typography>
      <Typography variant='h5' color = {colors.greenAccent[400]}>{props.subtitle}</Typography>
    </Box>
  )
}

export default Header;