import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes later (About, Sermons, etc.) */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;