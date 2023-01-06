import React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { StaticDatePicker } from '@mui/x-date-pickers'

const Calendar = ({date,setDate}) => {
   
    return (
        <LocalizationProvider  dateAdapter={AdapterDateFns}>
        <StaticDatePicker 
         displayStaticWrapperAs="desktop"
         value={date}
         onChange={(newValue) => {
           setDate(newValue);
         }}
         renderInput={(params) => <TextField {...params} />}
       />
     </LocalizationProvider>
    );
};

export default Calendar;