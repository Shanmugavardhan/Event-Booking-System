import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to the Event Booking System</h1>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
