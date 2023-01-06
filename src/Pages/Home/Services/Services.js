import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import Service from '../Service/service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png'


const services =[
    {
     name:'Fluoride Treatment',
     description:'. Padmini belittles him for being emotionally distant and apathetic. While leaving, Varun and Padmini',
     img: fluoride
    },
    {
     name:'Cavity Filling',
     description:' father to ship a consignment of 40 girls to Don Pablo El-Fino– a fictitious Brazilian child-trafficking',
     img: cavity
    },
    {
     name:'Teet Whitening ',
     description:' Varun initiates his backup plan. He negotiates a deal with Terry and Terrys father to ship a consignment of',
     img: whitening
    }
    
]
const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography sx={{ fontWeight: 500, m:2,color: 'success.main' }} variant="h6" component="div">
         OUR SERVICES
        </Typography>
        <Typography sx={{ fontWeight: 600,m:2 }} variant="h4" component="div">
         Services We Provide
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {
            services.map(service =><Service
            key ={service.name}
            service ={service}
            ></Service>)
         }
        </Grid>
        </Container>
      </Box>
     
    );
};

export default Services;