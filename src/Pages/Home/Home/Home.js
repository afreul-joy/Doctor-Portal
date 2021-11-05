import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../Services/Services';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';

const Home = () => {
  return (
    // Home.js এর ভিতরে সবগুলা সামারি করে রাখা হয়েছে যেগুলা ui তে দেখাবো 
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services> 
      <AppointmentBanner></AppointmentBanner>
    </div>
  );
};

export default Home;

