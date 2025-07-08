import { useGSAP } from "@gsap/react";
import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

const Loader = () => {
  const { progress, total } = useProgress();

  // Remove loader when progress reaches 100%
  useEffect(() => {
    if (total === 20 && progress === 100) {
      const loader = document.querySelector('.loader-screen');
      if (loader) {
        loader.style.transition = 'transform 1.5s ease-in-out';
        loader.style.transform = 'translateY(-100%)';
        
        // Remove after transition completes
        setTimeout(() => {
          loader.remove();
        }, 1500);
      }
    }
  }, [progress, total]);

  return (
    <div className="loader-screen bg-black-100 w-screen h-screen fixed top-0 left-0 z-[100] overflow-hidden">
      <div className="flex-center w-full h-full">
        <img src="/images/loader.gif" alt="loader" />
      </div>
      <div className="text-white-50 font-bold text-7xl leading-none gradient-title absolute bottom-10 right-10">
        {Math.floor(progress)}%
      </div>
    </div>
  );
};

export default Loader;
