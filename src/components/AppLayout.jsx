import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Contact from "./Contact";
import NavBar from "./NavBar";

const AppLayout = () => {
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
