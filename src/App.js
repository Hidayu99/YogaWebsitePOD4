import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Classes from "./components/Classes";
//import Contact from "./components/Contact";
import Coaches from "./components/Coaches";
// import Activities from "./components/Activities";
// import UpcomingClasses from "./components/UpcomingClasses";
// import Testimonies from "./components/Testimonies";
import Schedule from "./components/Schedule";
import Login from "./components/Login";
import "./App.css";
import logo from "./images/logo2.png";

function App() {
  return (
    <Router>
      <div className="bg-gray-100">
        <nav className="navbar shadow">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <Link to="/">
                <img src={logo} className="h-14 w-14" alt=""/>
                </Link>
                <Link to="/" className="navbar-link">
                  Home
                </Link>
                <Link to="/about" className="navbar-link">
                  About
                </Link>
                <Link to="/coaches" className="navbar-link">
                  Trainer
                </Link>
                <Link to="/classes" className="navbar-link">
                  Classes
                </Link>
                {/* <Link to="/contact" className="navbar-link">
                  Contact
                </Link> */}

                {/* <Link to="/activities" className="navbar-link">
                  Activities
                </Link> */}
                {/* <Link to="/upcoming-classes" className="navbar-link">
                  Upcoming Classes
                </Link>
                <Link to="/testimonies" className="navbar-link">
                  Testimonies
                </Link> */}
                <Link to="/schedule" className="navbar-link">
                  Schedule
                </Link>
                <Link to="/login" className="navbar-link">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/classes" element={<Classes />} />
            {/* <Route path="/contact" element={<Contact />} /> */}

            {/* <Route path="/activities" element={<Activities />} /> */}
            {/* <Route path="/upcoming-classes" element={<UpcomingClasses />} />
            <Route path="/testimonies" element={<Testimonies />} /> */}
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
