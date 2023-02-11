import React from 'react';
import {Box, useTheme, Typography} from "@mui/material";
import { tokens } from '../../theme';
import {FaCopyright} from 'react-icons/fa';
function Rights() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box>
    <Typography color = {colors.greenAccent[500]} variant = "h5" fontStyle='italic'>
    <FaCopyright/>2023 Saumitra Tiwari
    </Typography>
    </Box>
  )
}

export default Rights