import styled from "styled-components";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import { LandingWrapper } from "./Landing.Style";

const LandingPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageClick = (url) => {
    setSelectedFile(url);
  };

  return (
    <LandingWrapper>
      <h1>Please sign in to upload your Images</h1>
      <div className="images">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => handleImageClick("https://picsum.photos/2160/3840")}
        >
          <LazyLoadImage
            effect="blur"
            src="https://picsum.photos/2160/3840"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => handleImageClick("https://picsum.photos/1080/1920?grayscale")}
        >
          <LazyLoadImage
            effect="blur"
            src="https://picsum.photos/1080/1920?grayscale"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() => handleImageClick("https://picsum.photos/1080/1920?blur")}
        >
          <LazyLoadImage
            effect="blur"
            src="https://picsum.photos/1080/1920?blur"
            alt=""
          />
        </motion.div>
      </div>
      {selectedFile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fullscreen-overlay"
          onClick={() => setSelectedFile(null)}
        >
          <img src={selectedFile} alt="fullscreen" />
        </motion.div>
      )}
    </LandingWrapper>
  );
};

export default LandingPage;
