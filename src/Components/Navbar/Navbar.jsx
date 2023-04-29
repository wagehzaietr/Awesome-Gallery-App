import React from "react";
import { Header, Container } from "./Nav-Styles";
import { motion } from "framer-motion";
import Logo from "../../images/logo.png";
import Signin from "../Signin/Signin";
import { useAuth } from "../../Components/AuthContext";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import SideNav from "../SideNav/SideNav";

const Navbar = ({ isdark, setIsDark, setIsOpen, isOpen }) => {
  const { user, logOut, currentUser } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log("err");
    }
  };

  return (
    <Header>
      <Container>
        <div className="left">
          <motion.img
            initial={{ opacity: 0, y: "-500px" }}
            animate={{ opacity: 1, y: "0" }}
            transition={{ type: "spring", stiffness: 30 }}
            className="logo"
            src={Logo}
            width="80px"
            height="80px"
          ></motion.img>
        </div>
        <div className="right">
          <h1>
            <motion.label
              className="switch"
              initial={{ opacity: 0, y: "-500px" }}
              animate={{ opacity: 1, y: "0" }}
              transition={{ type: "spring", stiffness: 30 }}
            >
              <span className="sun">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g fill="#ffd43b">
                    <circle r="5" cy="12" cx="12"></circle>
                    <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                  </g>
                </svg>
              </span>
              <span className="moon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                </svg>
              </span>
              <input
                type="checkbox"
                className="input"
                onChange={() => setIsDark(!isdark)}
                checked={isdark}
              />
              <span className="slider"></span>
            </motion.label>
          </h1>
          <div className="btn-mobile">
            {user?.displayName ? (
              <motion.button
                initial={{ opacity: 0, y: "-500px" }}
                animate={{ opacity: 1, y: "0" }}
                transition={{ type: "spring", stiffness: 30 }}
                className="btn"
                onClick={handleLogout}
              >
                Logout
              </motion.button>
            ) : (
              <Signin />
            )}
          </div>
        </div>
        <div className="right-mobile">
          <motion.div
            initial={{ opacity: 0, x: "500px" }}
            animate={{ opacity: 1, x: "0" }}
            transition={{ type: "spring", stiffness: 30 }}
          >
            {isOpen ? (
              <AiOutlineClose
                className="menu"
                onClick={() => setIsOpen(!isOpen)}
                size={35}
              />
            ) : (
              <AiOutlineMenu
                className="menu"
                onClick={() => setIsOpen(!isOpen)}
                size={35}
              />
            )}
            {user ? <img className="user-img" src={user.photoURL} alt="" /> : "" }
          </motion.div>
        </div>
      </Container>
      {isOpen && <SideNav />}
    </Header>
  );
};

export default Navbar;
