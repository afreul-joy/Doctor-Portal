import React from 'react';
import chair from '../../../../images/chair.png'
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
  background: `url{$bg}`,
  
}
// vertically centering 
const verticalCenter = {
  display: 'flex',
  alignItems: 'center',
  height: 450,
}

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{...verticalCenter,textAlign:'left'}}>
          <Box>
              <Typography variant='h3'>
                Your New Smile <br />
                Starts Here
              </Typography>
              <Typography variant='h6' sx={{my:3,fontSize:'13',color:'grey',fontWeight:300}} >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis reiciendis repellendus quia. Nisi ratione eum quos minima unde inventore neque!
              </Typography>
              <Button variant="contained"sx={{my:2}} style={{backgroundColor:'#5CE7ED'}}>Get Appointment</Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} style={verticalCenter} >
         <img style={{width:'400px'}} src={chair} alt="" />
        </Grid>
       
      </Grid>
    </Container>
  );
};

export default Banner;