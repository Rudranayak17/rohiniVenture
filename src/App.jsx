import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Footer from "./components/Footer/Footer";
import Apply from "./pages/Apply";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
