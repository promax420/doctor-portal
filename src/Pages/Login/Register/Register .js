import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import login from '../../../images/login.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register  = () => {
    const[loginData,setLoginData]= useState({})
    const {registerUser} =useAuth
    const handleOnChange = e =>{
        const field =e.target.name;
        const value = e.target.value;
       const newLoginData ={...loginData};
       newLoginData[field]= value;
       setLoginData(newLoginData);

    }
    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password){
            alert('your password did not match')
            return
        }
        registerUser(loginData.email,loginData.password)
        e.preventDefault();
    }

    return (
        <Container>
        <Grid container spacing={2}>
  <Grid item sx={{mt:8}} xs={12} md={6}>
  <Typography variant="body1" gutterBottom>Login</Typography>
  <form onSubmit={handleLoginSubmit}>
  <TextField
          sx={{width:'75%',m:1}}
           id="standard-basic" 
           label="Your Email" 
           name="Email"
           type="email"
           onChange={handleOnChange}
           variant="standard" />
           
  <TextField
         sx={{width:'75%',m:1}}
         id="standard-basic" 
         label="Your Password" 
         type="password"
         name="password"
         onChange={handleOnChange}
         variant="standard" />
  <TextField
         sx={{width:'75%',m:1}}
         id="standard-basic" 
         label="Repit Password" 
         type="password"
         name="password2"
         onChange={handleOnChange}
         variant="standard" />

         <Button  sx={{width:'75%',m:1}}type="submit"variant="contained">login</Button>
         <NavLink
           style={{textDecoration:'none'}}
            to="/login">
            <Button variant="text">Already Registered? please Login</Button>
           </NavLink>
  </form>
  </Grid>
  <Grid item xs={12} md={6}>
  <img style={{width:'100%'}} src={login} alt="" />
  </Grid>
  
</Grid>
       </Container>
    );
};

export default Register ;