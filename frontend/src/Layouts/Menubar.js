import React, { useState } from "react";
import { Book } from "react-bootstrap-icons";
import "./Menubar.css";
import Dashboard from "../Assets/Images/dashboard.svg";
import BookRequest from "../Assets/Images/BookRequest.svg";
import BookStatus from "../Assets/Images/bookstatus.svg";
import IssuedBooks from "../Assets/Images/IssuedBooks.svg";
import PendingDue from "../Assets/Images/PendingDue.svg";
import Profile from "../Assets/Images/profile.png";
import { Link, NavLink } from "react-router-dom";

const Menubar = () => {
  const menu_items = [
    { id: 1, name: "Dashboard", icon: Dashboard, link: "dashboard" },
    {
      id: 2,
      name: "Submit Book Request",
      icon: BookRequest,
      link: "submitbookrequest",
    },
    { id: 3, name: "Book Status", icon: BookStatus, link: "bookstatus" },
    { id: 4, name: "Issued Books", icon: IssuedBooks, link: "issuedbooks" },
    { id: 5, name: "Pending Fine", icon: PendingDue, link: "pendingfine" },
  ];
  const [data, setData] = useState(menu_items);

  return (
    <>
      <div className="Menubar-container">
        <div className="Menubar-heading">
          <Book size={30} color="#595ae3" />
          <h2 style={{ paddingLeft: "10px", color: "#07081b" }}>OLMS</h2>
        </div>
        <div>
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <NavLink
                to={`/${item.link}`}
                key={item.id}
                className="Menubar-Item"
                activeclassname="active"
              >
                <img
                  src={item.icon}
                  width={25}
                  style={{ margin: "10px 15px" }}
                />
                <div style={{ fontSize: "17px", marginTop: "10px" }}>
                  {item.name}
                </div>
              </NavLink>
            ))}
        </div>
        <div
          style={{
            position: "absolute",
            left: "0",
            bottom: "0",
          }}
        >
          <div style={{ display: "flex" }}>
            <img src={Profile} width={25} style={{ margin: "10px" }} />
            <div style={{ fontSize: "17px", marginTop: "10px" }}>
              Ganesh Guntuku
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menubar;
