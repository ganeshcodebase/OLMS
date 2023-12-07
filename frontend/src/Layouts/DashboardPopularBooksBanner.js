import React from "react";

const DashboardPopularBooksBanner = ({
  name,
  desc,
  image,
}) => {
  return (
    <>
      <div className="dashboard-popular-books-banner-child">
        <div
          className="subchild"
        >
          <div className="image">
            <img src={image} />
          </div>
        </div>
        <div className="name" style={{ fontSize: "15px", paddingTop:'5px' }}>
          {name}
        </div>
        <p className="name" style={{ fontSize: "13px", color: "#61677A" }}>
          {desc}
        </p>
      </div>
    </>
  );
};

export default DashboardPopularBooksBanner;
