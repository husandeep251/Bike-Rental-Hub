import "../src/dist/styles.css";
import Navbar from "../src/components/Navbar";
import React from "react";
import {Route, Routes} from "react-router-dom"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Models from "./Pages/Models";
import Team from "./Pages/Team";
import { TestimonialsPage } from "./Pages/TestimonialsPage";
import Contact from "./Pages/Contact";
import Form from "./Pages/Form";
import Signup from "./Pages/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="form" element={<Form />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
