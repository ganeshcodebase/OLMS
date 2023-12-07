import React, { useState } from "react";
import Logout from "../Assets/Images/logout.png";


const NavBar = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div
        style={{
          // backgroundColor: "white",
          height: "50px",
          width: "100%",
          lineHeight: "50px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "20px" }}>
            <input
              className="form-control"
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: 300,
                float: "right",
                marginBottom: 0,
                marginTop: "5px",
                marginLeft: "10px",
              }}
              placeholder="Search"
            />
          </div>
        </div>

        <div>
          <img src={Logout} width={25} style={{ marginRight: "20px" }}></img>
        </div>
      </div>
    </>
  );
};

export default NavBar;
