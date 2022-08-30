import React from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sectores from "./pages/Sectores";
import Perfiles from "./pages/Perfiles";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sectores" element={<Sectores />} />
          <Route path="/perfiles" element={<Perfiles />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
