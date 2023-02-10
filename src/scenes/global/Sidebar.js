import React from 'react';
import {useState} from 'react';
import {ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
//import ContactOutlinedIcon from '@mui/icons-material/ContactOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
//import PersonlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
//import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
//import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const Item = ({title, to, icon, selected, setSelected}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return(
    <MenuItem active = {selected === title} style = {{colors: colors.grey[100]}} onClick = {()=>{return(setSelected(title))}} icon = {icon}>
      <Typography>{title}</Typography>
      <Link to = {to}/>
    </MenuItem>
  )
}



function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box sx = {{
      "& .[pro-sidebar-inner": {
        background: `${colors.primary[400]} !important`
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important"
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important"
      },
      "& .pro-inner-item:hover":{
        color: "#868dfb !important"
      },
      "& .pro-inner-item.active": {
          color: "#868dfb !important"
      }
    }}>
    <ProSidebar collapsed = {isCollapsed}>
    <Menu iconShape='square'>
    <MenuItem onClick = {()=>{return(setIsCollapsed(!isCollapsed))}}
    icon = {isCollapsed?<MenuOutlinedIcon/>: undefined}
    style = {{
      margin: "10px 0 20px 0",
      color: colors.grey[100],
    }}>
    {!isCollapsed && (
      <Box display='flex' justifyContent = "space-between" alignItems = 'center' ml = '15px'>
      <Typography variant = 'h2' color = {colors.grey[100]}>
        BUS ++
      </Typography>
      <IconButton onClick={() => {return(setIsCollapsed(!isCollapsed))}}>
        <MenuOutlinedIcon/>
      </IconButton>
      </Box>
    )}
    
      
      {/*User*/}
      {!isCollapsed && (
        <Box mb = "25px">
          <Box display='flex' justifyContent = 'center' alignItems = 'center'>
            <img alt = "Profile-user"
              width = '100px'
              height='130px'
              src = {'../../assets/user.jpg'}
              style = {{cursor: "pointer", borderRadius: "50%"}}
            />
          </Box>

        <Box textAlign='center'>
            <Typography variant='h3' color = {colors.grey[100]} fontWeight = "bold" sx = {{m: '10px 0 0 0'}}>Saumitra Tiwari</Typography>
            <Typography variant='h5' color = {colors.greenAccent[500]}>Bus Plus Premium</Typography>
        </Box>
        </Box>
      )}
        

      {/*Menu Items */}
      
      <Box paddingLeft={isCollapsed ? undefined : '10%'}>
        <Item title='Dashboard' 
          to = "/"
          icon = {<HomeOutlinedIcon/>}
          selected = {selected}
          setSelected = {setSelected}
        />
        <Item title='Book your ride' 
          to = "/Calendar"
          icon = {<CalendarTodayOutlinedIcon/>}
          selected = {selected}
          setSelected = {setSelected}
        />
        <Item title='Popular places' 
          to = "/geography"
          icon = {<MapOutlinedIcon/>}
          selected = {selected}
          setSelected = {setSelected}
        />
        <Item title='Invoice Balance' 
          to = "/invoices"
          icon = {<ReceiptOutlinedIcon/>}
          selected = {selected}
          setSelected = {setSelected}
        />
        <Item title='Scan Your Code' 
          to = "/Scan"
          icon = {<PieChartOutlinedIcon/>}
          selected = {selected}
          setSelected = {setSelected}
        />
        <Item title='Profile Form' 
          to = "/contacts"
          icon = {<PeopleOutlinedIcon/>}
          selected = {selected}
          setSelected = {setSelected}
        />
        <Item title='FAQ Page'
          to = "/FAQ"
          icon = {<HelpOutlinedIcon/>}
          selected = {selected}
          setSelected = {setSelected}
        />
      </Box>
    </MenuItem>
    </Menu>
    </ProSidebar>

    </Box>
  )
}

export default Sidebar