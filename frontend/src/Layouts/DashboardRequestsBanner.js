import React, { useState } from "react";
import AllRequests from "../Assets/Images/allrequests.png";
import PendingRequests from "../Assets/Images/pendingbooks.png";
import IssuedBooks from "../Assets/Images/issuedbooks.png";
import Completed from "../Assets/Images/completed.png";
const DashboardRequestsBanner = () => {
  const data = [
    {
      id: 1,
      name: "All Requests",
      src: AllRequests,
      RequestsCount: 20,
      score: 5,
    },
    {
      id: 2,
      name: "Pending Book Requests",
      RequestsCount: 5,
      src: PendingRequests,
      score: -3,
    },
    {
      id: 3,
      name: "Issued Books",
      RequestsCount: 10,
      src: IssuedBooks,
      score: 9,
    },
    {
      id: 4,
      name: "Returned Books",
      RequestsCount: 10,
      src: Completed,
      score: 6,
    },
  ];
  const [dashboardRequestsData, setDashboardRequestsData] = useState(data);
  return (
    <div className=" dashboard-requests-banner">
      {dashboardRequestsData &&
        dashboardRequestsData.length > 0 &&
        dashboardRequestsData.map((item) => (
          <div className="dashboard-request-banner-child" key={item.id}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img src={item.src} width={50} />
              <span
                style={{
                  paddingRight: "20px",
                  color: "#61677A",
                }}
              >
                {
                  <div
                    style={
                      item.score > 0 ? { color: "green" } : { color: "red" }
                    }
                  >
                    {item.score}%
                  </div>
                }
              </span>
            </div>
            <p style={{ marginLeft: "10px", color: "#61677A" }}>{item.name}</p>
            <h3 style={{ paddingLeft: "10px" }}>{item.RequestsCount}</h3>
          </div>
        ))}
    </div>
  );
};

export default DashboardRequestsBanner;
