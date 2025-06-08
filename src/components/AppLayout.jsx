import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Contact from "./Contact";
import NavBar from "./NavBar";
import { StarsBackground } from "./ui/StarsBackground";
import { ShootingStars } from "./ui/ShootingStars";
import Hero from "./Hero";

// Loading Screen Component
const LoadingScreen = () => (
  <div className="overflow-x-hidden">
    <div className="fixed inset-0 z-0">
      <StarsBackground />
      <ShootingStars />
    </div>
    <div className="flex items-center justify-center h-screen bg-neutral-900 text-white">
      <div className="text-2xl animate-pulse">
        <Hero />
      </div>
    </div>
  </div>
);
let hasLoaded = false;

const AppLayout = () => {
  const [loading, setLoading] = useState(!hasLoaded);

  useEffect(() => {
    if (!hasLoaded) {
      const timer = setTimeout(() => {
        hasLoaded = true;
        setLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <Router>
      <div>
        <div className="fixed top-0 left-0 w-full bg-[rgba(22,22,23,1)] z-50">
          <NavBar />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};
export default AppLayout; 