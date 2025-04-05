import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DictionaryPage from "./pages/DictionaryPage";
import LandingPage from "./pages/LandingPage";
import BuodPage from "./pages/BuodPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dictionary/:id" element={<DictionaryPage />} />
        <Route path="/buod/:id" element={<BuodPage />} />
      </Routes>
    </Router>
  );
}

export default App;
