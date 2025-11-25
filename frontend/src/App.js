import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./Navbar";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Complaint from "./pages/Complaint";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StayAware from "./pages/StayAware";

import Loader from "./Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    wakeUpServer();
  }, []);

  const wakeUpServer = async () => {
    try {
      await fetch("https://water-quality-monitoring-da7r.onrender.com");
      setLoading(false);
    } catch {
      // retry if backend is still sleeping
      setTimeout(wakeUpServer, 2000);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/StayAware" element={<StayAware />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
