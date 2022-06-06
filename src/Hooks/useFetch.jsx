import { useState, useEffect } from "react";
export function useFetch() {
  const [imagesArray, setImagesArray] = useState([]);
  const { images } = imagesArray;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://slider.ymatuhin.workers.dev/")
      .then((response) => response.json())
      .then((data) => {
        setImagesArray(data);
        setLoading(false);
      });
  }, []);

  return {
    loading: loading,
    images: images,
  };
}
