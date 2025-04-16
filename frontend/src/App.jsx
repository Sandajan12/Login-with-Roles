import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Matipo from "./Matipo";
import Sandajan from "./Sandajan";
import Villanea from "./Villanea";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/matipo" element={<Matipo />} />
        <Route path="/sandajan" element={<Sandajan />} />
        <Route path="/villanea" element={<Villanea />} />
      </Routes>
    </Router>
  );
}

export default App;
