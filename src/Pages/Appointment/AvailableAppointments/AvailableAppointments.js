import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings =[
    {
        id: 1,
        name:'Teeth orthodonics',
        time:'08.00 Am - 09.00 Am',
        space:10,
    },
    {
        id: 2,
        name:'Cosmetic Dentistry',
        time:'09.00 Am - 10.00 Am',
        space:8,
    },
    {
        id: 3,
        name:'Teeth Cleaning',
        time:'10.00 Am - 11.00 Am',
        space:6,
    },
    {
        id: 4,
        name:'Cavity Protection',
        time:'11.00 Am - 12.00 Am',
        space:5,
    },
    {
        id: 5,
        name:'pediatric Dental',
        time:'06.00 Pm - 07.00 Pm',
        space:10,
    },
    {
        id: 6,
        name:'Oral Surgery',
        time:'07.00 Pm - 08.00 Pm',
        space:10,
    }
]
const AvailableAppointments = ({date}) => {
    const [bookingSuccess,setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4"  sx={{ color: 'info.main', mb:3}}>AvailableAppointments on {date.toDateString()} </Typography>
            {bookingSuccess?.email && 
              <Alert severity="success"> booking  successfully!</Alert>}
              
            <Grid container spacing={2}>

              {
                bookings.map(booking=><Booking
                key={booking.id}
                booking ={booking}
                date={date}
                setBookingSuccess ={setBookingSuccess}
                ></Booking>)
              }    
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;