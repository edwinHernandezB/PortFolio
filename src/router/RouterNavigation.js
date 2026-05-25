import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Curriculum } from "../components/Curriculum";
import { Index } from "../components/Index";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";
import { Services } from "../components/Services";
import { HeaderNavigation } from "../components/layout/HeaderNavigation";
import { Footer } from "../components/layout/Footer";

export const RouterNavigation = () => {
  return (
    <BrowserRouter>
      <HeaderNavigation />
      <section className="content">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/index" element={<Index />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </section>

      <Footer />
    </BrowserRouter>
  );
};
