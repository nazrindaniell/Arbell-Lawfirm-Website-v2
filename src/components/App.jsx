import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Lawyers from "../pages/Lawyers";

function App() {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/lawyers" element={<Lawyers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
}

export default App;
