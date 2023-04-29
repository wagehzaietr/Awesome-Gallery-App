import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../AuthContext";
import { motion } from "framer-motion";
import { SideNavWrapper, NavItem } from "./SideNav.Style";
import Signin from "../Signin/Signin";

const SideNav = ({ isOpen, isdark, setIsDark }) => {
  const { user, logOut } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log("err");
    }
  };

  return (
    <>
      <SideNavWrapper
        initial={{ x: -200 }}
        animate={{ x: isOpen ? 0 : -200 }}
        transition={{ type: "spring", stiffness: 75 }}
      >
        <NavItem>
          <li>
            {user ? (
              <motion.img
                initial={{ opacity: 0, x: "-500px" }}
                animate={{ opacity: 1, x: "0" }}
                transition={{ type: "spring", stiffness: 30 }}
                src={user?.photoURL}
                alt={null}
              />
            ) : null}
          </li>
          <li>
            <h5
            >
              {user?.displayName}
            </h5>
          </li>
          <li>
            {user ? (
              <motion.button
                initial={{ opacity: 0, x: "-500px" }}
                animate={{ opacity: 1, x: "0" }}
                transition={{ type: "spring", stiffness: 30 }}
                className="btn"
                onClick={handleLogout}
              >
                Logout
              </motion.button>
            ) : (
              <Signin />
            )}
          </li>
        </NavItem>
      </SideNavWrapper>
    </>
  );
};

export default SideNav;
