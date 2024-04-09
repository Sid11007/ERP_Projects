import { Box } from "@mui/system";
import React, { useState } from "react";
import Screen from "../../Screen/Screen";
import HsnModal from "./HsnModal";

const Hsn = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  const headCells = [
    { id: "hsncode", numeric: false, disablePadding: true, label: "HSN Code" },
    {
      id: "taxpercentage",
      numeric: true,
      disablePadding: false,
      label: "Tax %",
    },
  ];

  // Define the rows
  const rows = [
    { id: 1, hsncode: 123, taxpercentage: 10 },
    { id: 2, hsncode: 124, taxpercentage: 20 },
    // Add more rows as needed
  ];
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Screen
          onClick={handleOpenModal}
          editButtonClick={handleOpenModal}
          headCells={headCells}
          rows={rows}
        />
      </Box>
      {openModal && (
        <HsnModal
          isOpen={openModal}
          closeModal={closeModal}
          title={"Create New"}
        />
      )}
    </div>
  );
};

export default Hsn;
