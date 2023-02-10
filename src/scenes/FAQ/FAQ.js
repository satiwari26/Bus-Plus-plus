import React, {useState, useEffect} from 'react';
import {Box, useTheme } from '@mui/material';
import Accordion  from '@mui/material/Accordion';
import AccordionSummary  from '@mui/material/AccordionSummary';
import AccordionDetails  from '@mui/material/AccordionDetails';
import  ExpandMoreIcon  from '@mui/icons-material/ExpandMore';
import {tokens} from '../../theme.js';
import { Typography } from '@mui/material';
import axios from 'axios';
import Header from '../../components/Header.js';

function FAQ() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [posts,setPosts] = useState([]);

    //making api call and setting the state to the current value
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            setPosts(response.data)
        })
        .catch((error)=>{
            return(console.log(error));
        })
    },[])

  return (
    <Box m='20px'>
    <Header title = "FAQ" subtitle = "Frequently asked Questions Page"/>

    {posts.map((post)=>{return(
    <Accordion defaultExpanded key={post.id}>
        <AccordionSummary expandIcon = {<ExpandMoreIcon/>}>
        <Typography color = {colors.greenAccent[500]} variant = "h5">
            {post.title}
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            {post.body}
            </Typography>
        </AccordionDetails>
    </Accordion>
    )})}

    </Box>
  )
}

export default FAQ