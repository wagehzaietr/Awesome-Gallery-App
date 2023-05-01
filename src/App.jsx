import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Navbar, Gallery, Search, } from "./index";
import { GlobalStyle } from "./Components/Style/GlobalStyle ";
import Modal from "./Components/Modal/Modal";
import SideNav from "./Components/SideNav/SideNav";
import { useAuth } from "./Components/AuthContext";
import LandingPage from "./Components/LandingPage/LandingPage";
import * as dotenv from 'dotenv';


function App() {
  const [isdark, setIsDark] = useState(false);
  const [selcted, setSelcted] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const { user, logOut, currentUser } = useAuth();


  useEffect(() => {
    const isDark = localStorage.getItem("isdark");
    setIsDark(isDark === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("isdark", isdark);
  }, [isdark]);

  const theme = {
    colors: {
      background: isdark ? "#212121" : "#e8e8e8",
      text: isdark ? "#168b72" : "#212121",
      backgroundside: isdark ? "#212121cf" : "#e8e8e8ef",
      textside: isdark ? "#168b72" : "#212121",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar
        isdark={isdark}
        setIsDark={setIsDark}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <SideNav isOpen={isOpen} setIsOpen={setIsOpen} isDark={isdark} setIsDark={setIsDark} />
      {user ? <Search /> : <LandingPage/>}
      <Gallery setSelcted={setSelcted} selcted={selcted} />
      {selcted && <Modal selcted={selcted} setSelcted={setSelcted} />}
    </ThemeProvider>
  );
}

export default App;
