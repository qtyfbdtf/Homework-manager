import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../public/Loading.json";

interface LoadingProps {
  size?: number;
}

export default function Loading({ size = 400 }: LoadingProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex justify-center items-center">
      <Lottie options={defaultOptions} height={size} width={size} />
    </div>
  );
}
