import React, { useState, useEffect } from "react";
import Image from "./pages/Image";
import { baseApi } from "./config/env";
export const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    baseApi.get("/image/get-images").then(({ data }) => {
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
