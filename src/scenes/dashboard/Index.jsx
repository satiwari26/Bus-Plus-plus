import React from 'react'
import Header from '../../components/Header';
import { Box, Button, IconButton, typography, useTheme } from '@mui/system';

function Dashboard() {
  return (
    <Box m = '20px'>
    <Box display = 'flex' justifycontent = 'space-between' alignItems = "center">
    <Header title = 'DashBoard' subtitle = 'Welcome to your dashboard'/>
    </Box>
    </Box>
  )
}

export default Dashboard