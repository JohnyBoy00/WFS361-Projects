import React from "react";
import Header from '../Components/Reusable Components/Header';
import MainContent from '../Components/Home Components/MainContent';
import CareerSection from '../Components/Home Components/CareerSection';
import Contact from '../Components/Reusable Components/Contact';
import Footer from '../Components/Reusable Components/Footer';
import '../Styles/Home.css';

function Home() {
  return (
    <div className="container">
      <Header />
      <h1 className="home-title">HOME</h1>
      <MainContent />
      <CareerSection />
      <div className="divider"/>
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;