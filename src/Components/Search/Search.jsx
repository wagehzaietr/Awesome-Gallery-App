import React, { useContext } from "react";
import { useState } from "react";
import { Wrapper } from "./Search.Style";
import ProgressBar from "../ProgressBar/ProgressBar";
import { storage } from "../../firebase/firebase";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { v4 } from "uuid";
import { MyContext } from "../Context";
import { FcAddImage, FcCheckmark } from "react-icons/fc";
import { BiCheckCircle } from "react-icons/bi";
import { MdCloudDone } from "react-icons/md";
import { motion } from "framer-motion";

const Search = () => {
  const { uploadProgress, error, success, handleFileInputChange, upLoadImage } =
    useContext(MyContext);
  return (
    <Wrapper>
      {uploadProgress > 0 ? (
        <ProgressBar progress={uploadProgress} />
      ) : success ? (
        <MdCloudDone size={55} className="success" />
      ) : (
        <div>
          <motion.form
            onSubmit={upLoadImage}
            initial={{ opacity: 0, y: "-1000px" }}
            animate={{ opacity: 1, y: "0" }}
            transition={{ type: "spring", stiffness: 30 }}
          >
            <label>
              <input
                type="file"
                onChange={handleFileInputChange}
                accept=".jpeg,.png,"
              />
              <FcAddImage
                className="icon"
                onChange={handleFileInputChange}
                type="file"
                accept="image/*"
                size={45}
              />
              <h1 className="title">awesome gallery</h1>
            </label>
            <FcCheckmark size={25} className="icon" onClick={upLoadImage} />
            <h1>Gallery</h1>
          </motion.form>
          {error && <p>{error}</p>}
        </div>
      )}
    </Wrapper>
  );
};

export default Search;
