import React, { useState } from "react";
import Features from "../layout/Features";
import Footer from "../layout/Footer";
import Hero from "../layout/Hero";
import NavBar from "../layout/NavBar";

interface HomeProps {
  setSignInShow: React.Dispatch<React.SetStateAction<boolean>>;
  toggleColorMode: () => void;
}

const Home: React.FC<HomeProps> = (props) => {
  const {setSignInShow, toggleColorMode} = props;

  return (
    <>
      <NavBar setSignInShow={setSignInShow} toggleColorMode={toggleColorMode}/>
      <Hero />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
