import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Stack from "./Stack";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="projects" element={<Project />} />
        <Route path="stacks" element={<Stack />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
