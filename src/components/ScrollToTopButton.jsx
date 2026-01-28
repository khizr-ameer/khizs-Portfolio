import { useEffect, useState } from "react";
import ArrowUpIcon from "./icons/ArrowUpIcon";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 p-3 rounded-full  backdrop-blur-md border dark:border-gray-800 shadow-lg hover:scale-105 transition"
      aria-label="Scroll to top"
    >
      <ArrowUpIcon />
    </button>
  );
};

export default ScrollToTopButton;
