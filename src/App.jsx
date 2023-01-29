import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
