import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Matipo from "./Matipo";
import Sandajan from "./Sandajan";
import Villanea from "./Villanea";
import Dashboard2 from "./Dashboard2";
import Dashboard3 from "./Dashboard3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
        <Route path="/dashboard3" element={<Dashboard3 />} />
        <Route path="/matipo" element={<Matipo />} />
        <Route path="/sandajan" element={<Sandajan />} />
        <Route path="/villanea" element={<Villanea />} />
      </Routes>
    </Router>
  );
}

export default App;
