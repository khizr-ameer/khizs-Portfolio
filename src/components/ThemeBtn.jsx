import React, { useState, useEffect } from "react";
import LightModeIcon from "./icons/LightModeIcon";
import DarkModeIcon from "./icons/DarkModeIcon";

const ThemeBtn = () => {
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDark));

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((isPrevDark) => {
      if (isPrevDark) {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }

      return !isPrevDark;
    });
  };

  return (
    <div className="px-4 py-3" onClick={toggleTheme}>{isDark ? <DarkModeIcon /> : <LightModeIcon />}</div>
  );
};

export default ThemeBtn;
