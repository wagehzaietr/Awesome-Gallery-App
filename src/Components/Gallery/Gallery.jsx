import React, { useContext, useEffect, useState } from "react";
import { MainGallery, MainGalleryItem } from "./Gallery.Style";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase";
import { MyContext } from "../Context";
import Search from "../Search/Search";
import { motion } from "framer-motion";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";

const Gallery = ({ setSelcted }) => {
  const { imageList } = useContext(MyContext);

  return (
    <MainGallery>
      <MainGalleryItem>
        {imageList &&
          imageList.map((item, index) => {
            return (
              <motion.div
                key={index}
                layout
                whileHover={{ opacity: 1 }}
                onClick={() => setSelcted(item)}
                className="item"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <LazyLoadImage
                    effect="blur"
                    className="img"
                    src={item}
                    alt="Gallery-image"
                  />
                </motion.div>
              </motion.div>
            );
          })}
      </MainGalleryItem>
    </MainGallery>
  );
};

export default Gallery;
