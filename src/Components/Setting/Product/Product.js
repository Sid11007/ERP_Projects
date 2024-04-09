import React, { useState } from "react";
import Screen from "../../Screen/Screen";
import { Box } from "@mui/system";
import ProductModal from "./ProductModal";

const Product = () => {

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  const headCells = [
    { id: 'productname', numeric: false, disablePadding: false, label: 'Product Name' },
    { id: 'categoryname', numeric: false, disablePadding: false, label: 'Category' },
    { id: 'hsncode', numeric: true, disablePadding: true, label: 'HSN Code' },
  ];

  // Define the rows
  const rows = [
    { id: 1, productname: 'Jhumki', categoryname: "Gold", hsncode:"1233"},
    { id: 2, productname: 'Payal', categoryname: "Silver",hsncode:"123"},
    // Add more rows as needed
  ];
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Screen
          onClick={handleOpenModal}
          editButtonClick={handleOpenModal}
          headCells={headCells} rows={rows}
        />
      </Box>
      {openModal && <ProductModal isOpen={openModal} closeModal={closeModal} title={"Create New"} />}
    </div>
  );
};

export default Product;
