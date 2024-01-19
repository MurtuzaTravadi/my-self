// mananimation.tsx
'use client'
import Lottie from "lottie-react";
import React from "react";

const Mananimation = ({ animationData }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData
  };

  return (
    <Lottie
      animationData={defaultOptions.animationData}
      loop={defaultOptions.loop}
    />
  );
};

export default Mananimation;
