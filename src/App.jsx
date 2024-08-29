// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import CheckInOutForm from "./components/CheckInOutForm";
 

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect to login by default */}
        <Route path="/" element={<Navigate to="/Homepage" />} />
        
        {/* Define your routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/checkinoutform" element={<CheckInOutForm />} />
       
      </Routes>
    </Router>
  );
};

export default App;