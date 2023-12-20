import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import IssuedBooks from "./Pages/IssuedBooks/IssuedBooks";
import SubmitBookRequest from "./Pages/SubmitBookRequest/SubmitBookRequest";
import PendingFine from "./Pages/PendingFine/PendingFine";
import BookStatus from "./Pages/BookStatus/BookStatus";
import { Provider } from "react-redux";
import store from "./API/store";
import Logout from "./Pages/Logout";

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/submitbookrequest" element={<SubmitBookRequest />} />
        <Route path="/bookstatus" element={<BookStatus />} />
        <Route path="/issuedbooks" element={<IssuedBooks />} />
        <Route path="/pendingfine" element={<PendingFine />} />
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;
