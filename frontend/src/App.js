import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import IssuedBooks from "./Pages/IssuedBooks/IssuedBooks";
import SubmitBookRequest from "./Pages/SubmitBookRequest/SubmitBookRequest";
import PendingFine from "./Pages/PendingFine/PendingFine";
import BookStatus from "./Pages/BookStatus/BookStatus";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/submitbookrequest" element={<SubmitBookRequest />} />
        <Route path="/bookstatus" element={<BookStatus />} />
        <Route path="/issuedbooks" element={<IssuedBooks />} />
        <Route path="/pendingfine" element={<PendingFine />} />
      </Routes>
    </Router>
  );
};

export default App;
