import { useEffect, useState } from "react";
import Slider from "./Slider";

const Banner = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const loadSlides = async () => {
      try {
        const res = await fetch("slider.json");
        const data = await res.json();
        setSlides(data);
      } catch (error) {
        // toast.error(error);
      }
    };
    loadSlides();
  }, []);

  return (
    <>
      <Slider slides={slides} />
    </>
  );
};

export default Banner;
