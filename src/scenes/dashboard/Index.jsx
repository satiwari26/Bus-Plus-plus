import React from 'react'
import Header from '../../components/Header';
import { Box, Button, IconButton, Typography, typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import DownloadOutlinedIcon  from '@mui/icons-material/DownloadOutlined';
import EmailIcon  from '@mui/icons-material/Email';
import PointOfSaleIcon  from '@mui/icons-material/PointOfSale';
import PersonAddIcon  from '@mui/icons-material/PersonAdd';
import TrafficIcon  from '@mui/icons-material/Traffic';
import Scan from '../../components/Scan.js'
import PopularPlaces from '../../components/PopularPlaces.js';
import StatBox from '../../components/StatBox';
import ProgressCircle from '../../components/ProgressCircle';

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m = '20px'>
    <Box display = 'flex' justifyContent = 'space-between' alignItems = "center">
    <Header title = 'DashBoard' subtitle = 'Welcome to your dashboard'/>
      <Box>
        <Button sx = {{backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontSize: '14px', fontWeight: 'bold', padding: '10px 20px'}}>
            <DownloadOutlinedIcon sx = {{mr: '10px'}}/>
              Download Your Recent Travels 
        </Button>
      </Box>
      </Box>

        {/* all the chars and grid stystem is going appear here*/}
        <Box display = 'grid' gridTemplateColumns='repeat(12, 1fr)' gridAutoRows='140px' gap = '20px'>
          {/*Row 1*/}
            <Box gridColumn='span 4' backgroundColor = {colors.primary[400]} display = 'flex' alignItems='center' justifyContent='center'>
              <StatBox title = '08' subtitle='New Messages' progress='0.75' increase = '+14%' icon = {<EmailIcon sx = {{color: colors.greenAccent[600], fontSize: '26px'}}/>}/>
            </Box>

            <Box gridColumn='span 4' backgroundColor = {colors.primary[400]} display = 'flex' alignItems='center' justifyContent='center'>
              <StatBox title = '26' subtitle='New places Visited' progress='0.5' increase = '+21%' icon = {<TrafficIcon sx = {{color: colors.greenAccent[600], fontSize: '26px'}}/>}/>
            </Box>

            <Box gridColumn='span 4' backgroundColor = {colors.primary[400]} display = 'flex' alignItems='center' justifyContent='center'>
              <StatBox title = '13' subtitle='Local Stores Visited' progress='0.90' increase = '+43%' icon = {<PersonAddIcon sx = {{color: colors.greenAccent[600], fontSize: '26px'}}/>}/>
            </Box>

        {/*Row 2 */}
        <Box gridColumn='span 8' gridRow='span 2' backgroundColor = {colors.primary[400]}>
          <Box mt = '25px' p = '0 30px' display='flex' justifyContent='space-between' alignItems='center'>
            <Box>
                <Typography variant='h5' fontWeight='600' color = {colors.grey[100]}>
                  Total Points Accumulated
                </Typography>
                <Typography variant='h3' fontWeight='500' color = {colors.greenAccent[500]}>
                  34,500
                </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlinedIcon sx = {{fontSize: '26px', color: colors.greenAccent[500]}}/>
              </IconButton>
            </Box>
          </Box>

          <Box height = '250px' ml = '-20px'>
                <Scan/>
          </Box>
          </Box>
          {/*Transactions */}
            <Box gridColumn='span 4' gridRow = 'span 2' backgroundColor = {colors.primary[400]} overflow = 'auto'>
            <Box display = 'flex' justifyContent='space-between' alignItems='center' borderBottom={`4px solid ${colors.primary[500]}`} colors = {colors.grey[100]} p = '15px'>
              <Typography colors = {colors.grey[100]} variant = 'h5' fontWeight='600'>
                    Recent Transactions
              </Typography>
            </Box>
            </Box>

        </Box>
        
    </Box>
  )
}

export default Dashboard