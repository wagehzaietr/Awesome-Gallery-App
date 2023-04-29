import React, { createContext, useEffect, useState } from "react";
import {
  listAll,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { storage, auth } from "../firebase/firebase";
import { v4 } from "uuid";

const MyContext = createContext();

function MyContextProvider(props) {
  const [imageUpload, setImageUpload] = useState(null);
  const [error, setError] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const [imageList, setImageList] = useState([]);
  const [currentUserUid, setCurrentUserUid] = useState(null);


  const imageListRef = ref(storage, `images/${currentUserUid}`);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUserUid(user.uid);
      } else {
        setCurrentUserUid(null);
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (currentUserUid) {
      const userImageListRef = ref(storage, `images/${currentUserUid}`);
      listAll(userImageListRef, { orderBy: "timeCreated" }).then((res) => {
        const promises = res.items.map((item) => getDownloadURL(item));
        Promise.all(promises).then((urls) => {
          setImageList(urls);
        });
      });
    } else {
      setImageList([]);
    }
  }, [currentUserUid]);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setImageUpload(file);
      setError(null);
    } else {
      setImageUpload(null);
      setError("Please select a jpeg or png image");
    }
  };

  const upLoadImage = (e) => {
    e.preventDefault();
    if (imageUpload === null) {
      setError("Please select an image");
      return;
    }
    const imageRef = ref(storage, `images/${currentUserUid}/${v4()}`);
    const uploadTask = uploadBytesResumable(imageRef, imageUpload);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        setError("Upload failed, please try again");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImageList((prevList) => [url, ...prevList]); // Add new URL to the beginning of the list
          setSuccess("Uploaded");
          setTimeout(() => {
            setSuccess(null);
          }, 2000);
        });
        setImageUpload(null);
        setUploadProgress(0);
        setError(null);
      }
    );
  };

  return (
    <MyContext.Provider
      value={{
        upLoadImage,
        handleFileInputChange,
        error,
        success,
        uploadProgress,
        imageList,
        setImageList,
        imageUpload,
        setImageUpload,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export { MyContextProvider, MyContext };
