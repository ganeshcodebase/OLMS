import React, { useState } from "react";
import Menubar from "../../Layouts/Menubar";
import NavBar from "../../Layouts/NavBar";
import Cbook from "../../Assets/Images/c.jpg";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Rating from "@mui/material/Rating";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const BookStatus = () => {
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState([]);
  const data = [
    {
      id: 1,
      bookid: 3833,
      name: "Introduction to C",
      author: "Dennis Ritchie",
      imageUrl: Cbook,
      rating: 4,
      status: "pending",
      date: null,
    },
    {
      id: 2,
      bookid: 2333,
      name: "Java",
      author: "James Gosling",
      imageUrl: Cbook,
      rating: 3.5,
      status: "approved",
      date: "04/11/2023",
    },
    {
      id: 3,
      bookid: 32833,
      name: "C++",
      author: "Bjarne Stroustrup",
      imageUrl: Cbook,
      rating: 3,
      status: "rejected",
      date: "03/11/2023",
    },
    {
      id: 4,
      bookid: 3324,
      name: "Python",
      author: "Guido van Rossum",
      imageUrl: Cbook,
      rating: 3,
      status: "approved",
      date: "02/10/2023",
    },
  ];
  const dataWithSNo = data.map((entry, index) => ({
    ...entry,
    sNo: index + 1,
  }));
  const columns = [
    { field: "sNo", headerName: "ID", width: 90 },
    {
      field: "imageUrl",
      headerName: "Image",
      width: 110,
      renderCell: (params) => (
        <img src={params.value} alt="Book Cover" style={{ width: 30 }} />
      ),
    },
    { field: "bookid", headerName: "Book ID", width: 150 },
    {
      field: "name",
      headerName: "Book name",
      width: 400,
    },
    {
      field: "author",
      headerName: "Book Author",
      width: 300,
    },
    {
      field: "rating",
      headerName: "Rating",
      width: 200,
      renderCell: (params) => (
        <Rating
          name="read-only"
          value={params.value}
          precision={0.5}
          readOnly
        />
      ),
    },
    {
      field: "status",
      headerName: " Book Status",
      width: 150,
      renderCell: (params) => (
        <div
          style={{
            padding: "3px 15px",
            borderRadius: "10px",
            color: "white",
            backgroundColor: getColorForStatus(params.value),
          }}
        >
          {params.value}
        </div>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      width: 100,
    },
  ];
  const getColorForStatus = (status) => {
    switch (status) {
      case "pending":
        return "orange";
      case "approved":
        return "green";
      case "rejected":
        return "red";
      default:
        return "black";
    }
  };
  const handleRowSelectionModelChange = (ids) => {
    const selectedIDs = new Set(ids);
    const newSelectedRows = data.filter((row) => selectedIDs.has(row.id));
    console.log("Selected Rows:", newSelectedRows);
    setSelectedRows(newSelectedRows);
  };

  const handleBackClicked = () => {
    navigate("/submitbookrequest");
  };
  const handleNextClicked = () => {
    navigate("/issuedbooks");
  };
  return (
    <div style={{ display: "flex", backgroundColor: "#f7f1f5" }}>
      <Menubar />
      <div className="rightside_container">
        <div>
          <NavBar />
        </div>
        <div className="rightside_child_container">
          <div>
            <Box sx={{ height: "85vh", width: "100% " }}>
              <DataGrid
                rows={dataWithSNo}
                disableColumnSelector
                disableDensitySelector
                columns={columns}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                  toolbar: {
                    showQuickFilter: true,
                  },
                }}
                disableRowSelectionOnClick
                onRowSelectionModelChange={handleRowSelectionModelChange}
              />
            </Box>
          </div>
          <div style={{ textAlign: "right", padding: "10px" }}>
            <Button
              type="submit"
              style={{
                backgroundColor: "transparent",
                border: "1px solid",
                color: "black",
                padding: "5px 20px",
                marginRight: "10px",
              }}
              onClick={handleBackClicked}
            >
              Back
            </Button>
            <Button
              type="submit"
              style={{
                backgroundColor: "#016A70",
                border: "1px solid",
                color: "white",
                padding: "5px 20px",
              }}
              onClick={(e) => handleNextClicked(e)}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default BookStatus;
