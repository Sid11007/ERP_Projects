import React, { useState } from "react";
import { Box } from "@mui/system";
import Sidebar from "../../Bars/SideBar/SideBar";
import TopAppBar from "../../Bars/AppBar/AppBar";
import Screen from "../../Screen/Screen";
import SupplierModal from "./SupplierModal";
const Supplier = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  const headCells = [
    { id: "suppliername", numeric: false, disablePadding: true, label: "Name" },
    { id: "mobile", numeric: true, disablePadding: false, label: "Mobile" },
    {id: "quantity", numeric: true, disablePadding: false, label: "Qty" },
    {id: "totalpurchase",  numeric: true, disablePadding: false, label: "Total Purchase"},
    {id: "outstanding",  numeric: true, disablePadding: false, label: "Outstanding"},

  ];

  // Define the rows
  const rows = [
    { id: 1, suppliername: "Aman trader", mobile: 94923449244,quantity:1, totalpurchase:20000,outstanding:1230 },
    { id: 2, suppliername: "Rishabh trader", mobile: 94923449244,quantity:20, totalpurchase:100000,outstanding:50000 },
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
      {openModal && <SupplierModal isOpen={openModal} closeModal={closeModal} title={"Create New"} />}
    </>
  );
};

export default Supplier;
