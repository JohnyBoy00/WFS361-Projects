import React from "react";
import Header from '../Components/Reusable Components/Header';
import HomeSection from '../Components/Home Components/HomeSection';
import AboutSection from '../Components/Home Components/AboutSection';
import LanguagesSection from "../Components/Home Components/LanguagesSection";
import CareerSection from '../Components/Home Components/LanguagesSection';
import Footer from '../Components/Reusable Components/Footer';
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