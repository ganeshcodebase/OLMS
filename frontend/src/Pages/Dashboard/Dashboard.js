import React, { useState } from "react";
import Menubar from "../../Layouts/Menubar";
import "./Dashboard.css";
import NavBar from "../../Layouts/NavBar";
import DbImage1 from "../../Assets/Images/dbimage1.png";
import DbImage2 from "../../Assets/Images/dbimage2.png";
import ButtonComponent from "../../Components/ButtonComponent";
import DashboardRequestsBanner from "../../Layouts/DashboardRequestsBanner";
import DashboardChartsBanner from "../../Layouts/DashboardChartsBanner";
import DashboardIssuesDataTable from "../../Layouts/DashboardIssuesDataTable";
import DashboardPopularBooksBanner from "../../Layouts/DashboardPopularBooksBanner";
import PbookIcon1 from "../../Assets/Images/pb1.jpg";
import PbookIcon2 from "../../Assets/Images/pb2.jpg";
import PbookIcon3 from "../../Assets/Images/pb3.png";
import RbookIcon1 from "../../Assets/Images/rb1.jpg";
import RbookIcon2 from "../../Assets/Images/rb2.jpg";
import RbookIcon3 from "../../Assets/Images/rb3.png";
const Dashboard = () => {
  const popularBooksData = [
    {
      id: 1,
      name: "Sample book",
      desc: "sample description for the book",
      image: PbookIcon1,
    },
    {
      id: 2,
      name: "Sample book",
      desc: "sample description for the book",
      image: PbookIcon2,
    },
    {
      id: 3,
      name: "Sample book",
      desc: "sample description for the book",
      image: PbookIcon3,
    },
  ];
  const recentBooksData = [
    {
      id: 1,
      name: "Sample book",
      desc: "sample description for the book",
      image: RbookIcon1,
    },
    {
      id: 2,
      name: "Sample book",
      desc: "sample description for the book",
      image: RbookIcon2,
    },
    {
      id: 3,
      name: "Sample book",
      desc: "sample description for the book",
      image: RbookIcon3,
    },
  ];
  const [popularBooks, setPopularBooks] = useState(popularBooksData);
  const [recentBooks, setRecentBooks] = useState(recentBooksData);
  return (
    <>
      <div style={{ display: "flex", backgroundColor: "#f7f1f5" }}>
        <Menubar />
        <div className="dashboard_container">
          <div>
            <NavBar />
          </div>
          <div style={{ width: "100%" }}>
            <div className="dashboard-banner">
              <div>
                <img src={DbImage1} width={250}></img>
              </div>
              <div style={{ textAlign: "center" }}>
                <h4 style={{ color: "white" }}>Hi, Ganesh Guntuku</h4>
                <p style={{ color: "white" }}>
                  The Library servers as a welcoming home for knowledge <br />
                  and avid readers alike
                </p>
                <ButtonComponent
                  backgroundColor="transparent"
                  border="1px solid"
                  color="white"
                  name="Learn More"
                />
              </div>
              <div>
                <img src={DbImage2} width={150}></img>
              </div>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <DashboardRequestsBanner />
          </div>
          <div className="dashboard-chart-banner">
            <DashboardChartsBanner />
            <div className="dashboard-Issues-table">
              <DashboardIssuesDataTable />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              className="dashboard-popular-books-banner"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h5 style={{ padding: "10px" }}>Popular</h5>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0px 10px",
                }}
              >
                {popularBooks.map((item, index) => (
                  <DashboardPopularBooksBanner
                    key={index}
                    name={item.name}
                    desc={item.desc}
                    image={item.image}
                  />
                ))}
              </div>
            </div>
            <div
              className="dashboard-popular-books-banner"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h5 style={{ padding: "10px" }}>Recently Added</h5>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0px 10px",
                }}
              >
                {recentBooks.map((item, index) => (
                  <DashboardPopularBooksBanner
                    key={index}
                    name={item.name}
                    desc={item.desc}
                    image={item.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
