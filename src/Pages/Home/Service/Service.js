import Grid from '@mui/material/Grid';
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Service = (props) => {
  const {name,description,img} = props.service
  return (
   
      <Grid item xs={4} sm={4} md={4}>
        
      <Card sx={{ minWidth: 275 }}>
          <CardMedia
            component="img"
            style={{ width: 'auto', height: '80px',margin:'0 auto'}}
            image={img}
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">
         {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
        </Card>
       </Grid>
  );
};

export default Service;
 












