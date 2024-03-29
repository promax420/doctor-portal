import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const service = (props) => {
    const {name,description,img} = props.service
    return (
        <Grid item xs={4} sm={4} md={4}>
           <Card sx={{ minWidth: 275, border: 0, boxShadow: 0}}>
           <CardMedia
        component="img"
        alt="green iguana"
       style={{width: 'auto', heigth: '80px', margin: '0,auto'}}
        image={img}
      />
      <CardContent>
       
        <Typography variant="h5" component="div">
          {name}
        </Typography>
       
        <Typography variant="body2" color="text.secondary">
         {description}
          
        </Typography>
      </CardContent>
     
    </Card> 
        </Grid>
    );
};

export default service;