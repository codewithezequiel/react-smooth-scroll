import React, { useState } from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ContentSection from "../components/contentSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/contentSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <ContentSection {...homeObjOne} />
      <ContentSection {...homeObjTwo} />
      <Services />
      <ContentSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
