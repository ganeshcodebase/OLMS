import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const DashboardIssuesDataTable = () => {
  const rows = [
    {
      id: 1,
      bookName: "Rich Dad Poor Dad",
      issueDate: "13/2/2023",
      returnDate: "13/3/2023",
      status: "completed",
    },
    {
      id: 2,
      bookName: "Java",
      issueDate: "",
      returnDate: "",
      status: "pending",
    },
    {
      id: 3,
      bookName: "Python",
      issueDate: "15/7/2023",
      returnDate: "15/8/2023",
      status: "completed",
    },
    {
      id: 4,
      bookName: "C",
      issueDate: "15/5/2023",
      returnDate: "15/6/2023",
      status: "completed",
    },
    {
      id: 5,
      bookName: "C++",
      issueDate: "15/5/2023",
      returnDate: "",
      status: "completed",
    },
  ];
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{ fontWeight: "600" }}>
              S.No
            </TableCell>
            <TableCell align="center" style={{ fontWeight: "600" }}>
              Book Name
            </TableCell>
            <TableCell align="center" style={{ fontWeight: "600" }}>
              Issue Date
            </TableCell>
            <TableCell align="center" style={{ fontWeight: "600" }}>
              Return Date
            </TableCell>
            <TableCell align="center" style={{ fontWeight: "600" }}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{row.bookName}</TableCell>
              <TableCell align="center">
                {row.issueDate === "" ? "Not Issued Yet" : row.issueDate}
              </TableCell>
              <TableCell align="center">
                {row.returnDate === "" ? "Not Returned Yet" : row.returnDate}
              </TableCell>
              <TableCell align="center">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DashboardIssuesDataTable;
