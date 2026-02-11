import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Education from "./Education";

function Home() {
  return <h1 style={{ padding: "100px", textAlign: "center" }}>Welcome Home</h1>;
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
}


