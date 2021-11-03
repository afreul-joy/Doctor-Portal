import React from 'react';
import Box from '@mui/material/Box';  
import Grid from '@mui/material/Grid';
import doctor from '../../../../images/doctor.png'
import bg from  '../../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
  background: `url(${bg})`,
  marginTop: 175,
  backgroundColor:'rgba(51, 48, 61,0.6)',
  backgroundBlendMode: 'darken',
}

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{width:400,marginTop:'-110px'}}
            src={doctor} alt="" />
        </Grid> 
        <Grid item xs={12} md={6} style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          textAlign:'left' 
        }} >

          <Box>
                <Typography variant='h6' sx={{my:3}} style={{color:'#5CE7ED'}}>
                Appointment
              </Typography>
              <Typography variant='h3' sx={{my:2}}  style={{color:'white'}} >
                Make an Appointment Today
              </Typography>
              <Typography variant='h6' sx={{my:2}}  style={{color:'white',fontSize:'14',fontWeight:'300'}} >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam suscipit consequuntur minima amet quibusdam at quam ipsam incidunt hic facere?
              </Typography>
              <Button variant="contained"sx={{my:2}} style={{backgroundColor:'#5CE7ED'}}>LEARN MORE </Button>
          </Box>

        </Grid>
      
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;