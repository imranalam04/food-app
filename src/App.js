import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './hero/Hero';
import Food from './food/Food';
import Footer from './footer/Footer';
//images 
import craft1 from './assets/craft1.jpg';
import craft2 from './assets/craft2.jpg';


function App() {
  return (
    <div className="App">
    <Navbar />
    <Hero />
    <Food bgImg1={craft1} bgImg2={craft2} />
    {/* <Food bgImg={chicken}/>
    <Food bgImg={burger}/> */}
    <Footer />
    </div>
  );
}

export default App;
