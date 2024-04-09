import { Box } from "@mui/system";
import React, { useState } from "react";
import Sidebar from "../Bars/SideBar/SideBar";
import TopAppBar from "../Bars/AppBar/AppBar";
import Content from "../Content/Content";
import { Grid } from "@mui/material";
import Screen from "../Screen/Screen";

const Inventory = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  const headCells = [
    {
      id: "productname",
      numeric: false,
      disablePadding: false,
      label: "Product Name",
    },
    {
      id: "categoryname",
      numeric: false,
      disablePadding: false,
      label: "Category",
    },
    { id: "hsncode", numeric: true, disablePadding: true, label: "HSN Code" },
    { id: "unit", numeric: true, disablePadding: true, label: "Unit" },
    { id: "quantity", numeric: true, disablePadding: true, label: "QTY" },
    { id: "purchase", numeric: true, disablePadding: true, label: "Purchase" },
    {
      id: "valuation",
      numeric: true,
      disablePadding: true,
      label: "Valuation",
    },
  ];

  // Define the rows
  const rows = [
    {
      id: 1,
      productname: "Jhumki",
      categoryname: "Gold",
      hsncode: "1233",
      unit: 2,
      quantity: 3,
      purchase: 4334,
      valuation: 12044,
    },
    {
      id: 2,
      productname: "Payal",
      categoryname: "Silver",
      hsncode: "123",
      unit: 3,
      quantity: 4,
      purchase: 434,
      valuation: 1204,
    },
    // Add more rows as needed
  ];
  return (
    <>
      <Screen
        onClick={handleOpenModal}
        headCells={headCells}
        rows={rows}
        hideButton
      />
    </>
  );
};

export default Inventory;
