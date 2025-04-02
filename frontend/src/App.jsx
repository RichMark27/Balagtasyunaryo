import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DictionaryPage from "./pages/DictionaryPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dictionary/:id" element={<DictionaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
