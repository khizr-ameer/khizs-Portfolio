import Lottie from "react-lottie";
import animationData from "../assets/anim/loading.json";

const PreLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Lottie options={defaultOptions} height={50} width={50} />
      <p className="font-mono text-sm md:text-lg primary-color pb-10">Khizar Ameer's Portfolio</p>
    </div>
  );
};

export default PreLoader;
