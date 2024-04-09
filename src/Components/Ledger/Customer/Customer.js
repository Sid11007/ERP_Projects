import React, { useState } from "react";
import { Box } from "@mui/system";
import Sidebar from "../../Bars/SideBar/SideBar";
import TopAppBar from "../../Bars/AppBar/AppBar";
import Screen from "../../Screen/Screen";
import CustomerModal from "./CustomerModal";
const Customer = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  const handleEditButtonClick = () => {
    console.log("ok"); // This will be called when the button is clicked
  };
  const headCells = [
    { id: "customername", numeric: false, disablePadding: true, label: "Name" },
    { id: "mobile", numeric: true, disablePadding: false, label: "Mobile" },
    {id: "totalsale",  numeric: true, disablePadding: false, label: "Total Sale"},
    {id: "totalvisit",  numeric: true, disablePadding: false, label: "Total Visit"},

  ];

  // Define the rows
  const rows = [
    { id: 1, customername: "Aman trader", mobile: 94923449244, totalsale:20000,totalvisit:1230 },
    { id: 2, customername: "Rishabh trader", mobile: 94923449244, totalsale:100000,totalvisit:50000 },
    // Add more rows as needed
  ];
  
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Screen
          onClick={handleOpenModal}
          editButtonClick={handleOpenModal}
          headCells={headCells}
          rows={rows}
        />
      </Box>
      {openModal && <CustomerModal isOpen={openModal} closeModal={closeModal} title={"Create New"} />}
    </>
  );
};

export default Customer;
