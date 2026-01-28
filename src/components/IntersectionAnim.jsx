import { useRef, useEffect, useState } from "react";

const IntersectionAnim = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAlreadyShown, setHasAlreadyShown] = useState(false);
  const ref = useRef(null);
  const { index, delay, type } = props;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAlreadyShown) {
          setIsVisible(true);
          setHasAlreadyShown(true); 
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const typeClasses = {
    "transDown": "-translate-y-full",
    "transUp": "translate-y-full",
    "transRight": "-translate-x-40",
    "transLeft": "translate-x-40",
  };
  
  const typeClass = typeClasses[type] || ""; // empty for opacity transition only

  return (
    <div
      ref={ref}
      className={`animated-element ${typeClass} ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * delay}s` }}
    >
      {props.children}
    </div>
  );
};

export default IntersectionAnim;
