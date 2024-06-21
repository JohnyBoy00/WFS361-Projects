import React from "react";
import Header from '../Components/Reusable Components/Header';
import AboutSection from '../Components/Home Components/AboutSection';
import CareerSection from '../Components/Home Components/LanguagesSection';
import Contact from '../Components/Reusable Components/Contact';
import Footer from '../Components/Reusable Components/Footer';
import '../Styles/Home.css';

function Home() {
  return (
    <div className="container">
      <Header />
      <h1 className="home-title">HOME</h1>
      <AboutSection />
      <CareerSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;