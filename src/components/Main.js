import React from 'react';
import Slideshow from './Slideshow';
import './Main.css';
import Mainabout from './Maincomponents/Mainabout';
import Menuteaser from './Maincomponents/Menuteaser';
import Teasepage from './Maincomponents/Teasepage';
import Schedule from './Maincomponents/Schedule'
import Footer from './Footer';




const Main = () => {
  return (
    <>
     <Slideshow />
       <Mainabout />
      {/*<Menuteaser/> 
      <Teasepage/>
      <Schedule />*/}
  <Footer />
    
  
    </>
  );
}

export default Main;
