import React from "react";
import Header from './Reusable Components/Header';
import HomeSection from './Home Components/HomeSection';
import AboutSection from './Home Components/AboutSection';
import LanguagesSection from "./Home Components/LanguagesSection";
import CareerSection from './Home Components/LanguagesSection';
import Footer from './Reusable Components/Footer';
import '../Styles/Home.css';

function Home() {
  return (
    <div className="container">
      <Header />
      <HomeSection />
      <AboutSection />
      <LanguagesSection />
      <CareerSection />
      <Footer />
    </div>
  );
}

export default Home;