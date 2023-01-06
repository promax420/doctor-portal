import React from 'react';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography,Container } from '@mui/material';

const bnnerBG={
  background:`url${bg}`,
  
}
const verticalCenter = {
  display:'flex',
  height:400,
  alignItems:'center'
}
const Banner = () => {
    return (
        <Container style={bnnerBG} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item style={{...verticalCenter,textAlign:'left'}} xs={12} md={6}>
        <Box>
        <Typography variant='h3'>
         Your New smile <br />
         Starts Here  
         </Typography>
         <Typography variant='h6' sx={{fontSize:13, fontWeigt:'300', color:'gray'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quam asperiores nostrum, expedita quibusdam qui praesentium fugit quidem illum facilis.
         </Typography>
         <Typography>
          <Button ariant="contained" style={{backgroundColor:'#5CE7ED'}}>Get Apporintment</Button>
         </Typography>
        </Box>
        </Grid>
        <Grid item xs={4} md={6} style={verticalCenter}>
         <img style={{width:300}} src={chair} alt="" />
        </Grid>
       
      </Grid>
    </Container>
    );
};

export default Banner;