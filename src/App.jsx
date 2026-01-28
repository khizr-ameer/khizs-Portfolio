import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import PreLoader from "./components/PreLoader";
import FixedSocialIconBar from "./components/FixedSocialIconBar";
import FixedEmailBar from "./components/FixedEmailBar";
import ContentWrapper from "./components/ContentWrapper";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDark = storedTheme ? JSON.parse(storedTheme) : true;

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <PreLoader />
    );
  }

  return (
    <>
      <Navbar />
      <FixedSocialIconBar />
      <FixedEmailBar />
      <ContentWrapper />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
