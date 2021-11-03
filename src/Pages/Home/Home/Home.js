import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../Services/Services';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Services></Services> 
      <AppointmentBanner></AppointmentBanner>
    </div>
  );
};

export default Home;

