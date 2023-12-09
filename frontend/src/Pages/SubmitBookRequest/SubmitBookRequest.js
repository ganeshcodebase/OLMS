import React, { useState } from "react";
import "./SubmitBookRequest.css";
import Menubar from "../../Layouts/Menubar";
import NavBar from "../../Layouts/NavBar";
import Cbook from "../../Assets/Images/c.jpg";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Rating from "@mui/material/Rating";
import ButtonComponent from "../../Components/ButtonComponent.js";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubmitBookRequest = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const data = [
    {
      id: 1,
      bookid: 3833,
      name: "Introduction to C",
      desc:"Introduction to C book",
      author: "Dennis Ritchie",
      category: "Engineering",
      imageUrl: Cbook,
      rating: 4,
      availability: 0,
    },
    {
      id: 2,
      bookid: 2333,
      name: "Java",
      desc:"Introduction to Java book",
      author: "James Gosling",
      category: "Engineering",
      imageUrl: Cbook,
      availability: 1,
      rating: 3.5,
    },
    {
      id: 3,
      bookid: 32833,
      name: "C++",
      desc:"Introduction to C++ book",
      author: "Bjarne Stroustrup",
      category: "Engineering",
      imageUrl: Cbook,
      availability: 10,
      rating: 3,
    },
    {
      id: 4,
      bookid: 3324,
      name: "Python",
      author: "Guido van Rossum",
      desc:"Introduction to Python book",
      category: "Engineering",
      imageUrl: Cbook,
      availability: 1,
      rating: 4.5,
    },
    {
      id: 5,
      bookid: 343324,
      name: "Introduction to Data Structures",
      desc :null,
      author: "Narasimha Karumanchi",
      category: "Engineering",
      imageUrl: Cbook,
      availability: 3,
      rating: 3.5,
    },
    {
      id: 6,
      bookid: 30243,
      name: "DSA",
      desc:"Introduction to DSA book",
      author: "Narasimha Karumanchi",
      category: "Engineering",
      imageUrl: Cbook,
      availability: 2,
      rating: 3.5,
    },
    {
      id: 7,
      bookid: 66643,
      name: "Django",
      desc:"Introduction to DJango book",
      author: "Adrian Holovaty, Simon Willison",
      category: "Engineering",
      imageUrl: Cbook,
      availability: 5,
      rating: 2,
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
    {
      field: "name",
      headerName: "Book name",
      width: 250,
    },
    {
      field: "desc",
      headerName: "Description",
      width: 300,
    },
    {
      field: "author",
      headerName: "Author",
      width: 300,
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
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
      field: "availability",
      headerName: "Availability",
      width: 100,
    },
  ];
  const handleRowSelectionModelChange = (ids) => {
    const selectedIDs = new Set(ids);
    const newSelectedRows = data.filter((row) => selectedIDs.has(row.id));
    console.log("Selected Rows:", newSelectedRows);
    setSelectedRows(newSelectedRows);
  };
  const handleBookRequestSubmit = (e) => {
    e.preventDefault();
    if (selectedRows && selectedRows.length > 0) {
      let allBooksAvailable = true;
      selectedRows.forEach((book) => {
        if (book.availability <= 0) {
          allBooksAvailable = false;
        }
      });
      if (allBooksAvailable) {
        toast.success("Book request submitted successfully!");
        console.log("selectedRows", selectedRows);
      } else {
        toast.info(
          "Some selected books are not available. Please try again after some time!"
        );
      }
    } else {
      toast.error("Please select a book!");
    }
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
                checkboxSelection
                onRowSelectionModelChange={handleRowSelectionModelChange}
              />
            </Box>
          </div>
          <div style={{ textAlign: "right", padding: "10px" }}>
            <Button
              type="submit"
              style={{
                backgroundColor: "#016A70",
                border: "1px solid",
                color: "white",
              }}
              onClick={(e) => handleBookRequestSubmit(e)}
            >
              Submit Book Request
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

export default SubmitBookRequest;
