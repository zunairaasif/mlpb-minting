import "./App.css";
import HomePage from "./pages/Home";
import Template from "./pages/Template";
import CreateNFT from "./pages/CreateNFT";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/template" element={<Template />} />
        <Route path="/asset" element={<CreateNFT />} />
      </Routes>
    </Router>
  );
}

export default App;
