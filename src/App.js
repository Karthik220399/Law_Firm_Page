import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import IntroSection from './components/IntroSection/IntroSection';
import ChooseUs from './components/ChooseUs/ChooseUs';
import ClientReviewSection from './components/ClientReviewSection/ClientReviewSection';
import TeamSection from './components/TeamSection/TeamSection';


function App() {
  return (
    <div className="App">
      <Header/>
      <IntroSection/>
      <ChooseUs/>
      <ClientReviewSection/>
      <TeamSection/>
      <Footer/>
    </div>
  );
}

export default App;
