import {  BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import AboutUs from "./Components/pages/AboutUs";
import Contact from "./Components/pages/Contact";
import Events from "./Components/pages/Events";
import Location from "./Components/pages/location";
import Prayers from "./Components/pages/Prayers";
import MainLayout from "./Components/Layouts/MainLayout";
function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/location" element={<Location />} />
        <Route path="/prayers" element={<Prayers />} />
        </Route>
      </Routes>
   </Router>
  );
}

export default App;