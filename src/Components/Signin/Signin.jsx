import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { motion } from "framer-motion";

const Signin = () => {
  const { googleSignIn } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.button
      className="btn"
      initial={{ opacity: 0, y: "-500px" }}
      animate={{ opacity: 1, y: "0" }}
      transition={{ type: "spring", stiffness: 30 }}
      onClick={handleGoogleSignIn}
    >Signin</motion.button>
  );
};

export default Signin;
