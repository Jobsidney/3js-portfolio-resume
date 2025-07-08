import { useGSAP } from "@gsap/react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Loader = () => {
  const { progress, total } = useProgress();
  const loaderRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Cleanup function to remove loader from DOM
  const cleanupLoader = () => {
    if (loaderRef.current) {
      loaderRef.current.remove();
    }
  };

  // Use GSAP for animation
  useGSAP(() => {
    if (progress >= 95 || total === 20) { // More lenient trigger condition
      setIsAnimating(true);
      gsap.to(loaderRef.current, {
        y: "-100%",
        duration: 1,
        ease: "power2.inOut",
        onComplete: cleanupLoader,
      });
    }
  }, [progress, total]);

  // Fallback timer in case progress doesn't reach 95%
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        gsap.to(loaderRef.current, {
          y: "-100%",
          duration: 1,
          ease: "power2.inOut",
          onComplete: cleanupLoader,
        });
      }
    }, 5000); // 5 second fallback

    return () => clearTimeout(timer);
  }, [isAnimating]);

  return (
    <div 
      ref={loaderRef}
      className={`loader-screen bg-black-100 w-full h-full fixed top-0 left-0 z-[100] ${isAnimating ? 'animate-out' : ''}`}
    >
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
