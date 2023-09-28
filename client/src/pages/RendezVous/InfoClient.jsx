import { useEffect } from "react";
import { useState } from "react";
import Path from "./Path";
import MyForm from "./MyForm";

const Formula = () => {

  const [isAnimated, setIsAnimated] = useState(false);
  
  // When the component mounts, trigger the animation
  useEffect(() => {
    setIsAnimated(true);
  }, []);

 

  return (
    <div class="col-12 col-lg-6 bg-white py-3">
      <Path isAnimated={isAnimated} />
      <div className={`animation-up ${isAnimated ? "animated" : ""}`}>
        <MyForm />
      </div>
    </div>
  );
};

export default Formula;
