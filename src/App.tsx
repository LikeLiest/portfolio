import "./index.css";
import { Footer } from "./component/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Nav } from "./component/Nav/Nav";

import { Projects } from "./pages/Projects/Projects";
import { Contacts } from "./pages/Contacts/Contacts";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
};
