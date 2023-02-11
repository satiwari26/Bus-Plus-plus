import {Box} from '@mui/material';
import Header from '../../components/Header';
import Scan from '../../components/Scan';

import React from 'react'

function ScanScene() {
  return (
    <Box m='20px'>
    <Header title = 'Scan or Redeem your points' subtitle = "Your accumulated points: 34,500" />
    <Box height='75vh'>
    <Scan/>
    </Box>
    </Box>
  )
}

export default ScanScene