import { Box } from "@mui/system";
import React, { useState } from "react";
import Screen from "../../Screen/Screen";
import UnitModal from "./UnitModal";

const Unit = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  const headCells = [
    { id: "unit", numeric: false, disablePadding: true, label: "Unit" },
    
  ];

  // Define the rows
  const rows = [
    { id: 1, unit: 123, },
    { id: 2, unit: 124, },
    // Add more rows as needed
  ];
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Screen onClick={handleOpenModal} editButtonClick={handleOpenModal} headCells={headCells} rows={rows}/>
      </Box>
      {openModal && (
        <UnitModal
          isOpen={openModal}
          closeModal={closeModal}
          title={"Create New"}
        />
      )}
    </div>
  );
};

export default Unit;
