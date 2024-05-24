import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function BasicDateCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar sx={{bgcolor:"white",borderRadius:"0.5rem",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}} />
    </LocalizationProvider>
  );
}