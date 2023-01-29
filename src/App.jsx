import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
