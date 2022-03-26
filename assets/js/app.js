import React, { useState, useEffect } from "react";
import Image from "./pages/Image";
import axios from "axios";
export const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    axios
      .get("https://127.0.0.1:8000/api/image/get-images")
      .then(({ data }) => {
        setImages(data.images);
      });
  };

  return (
    <>

      <Image images={images} />
    </>
  );
};

export default App;
