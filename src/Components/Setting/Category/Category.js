import React, { useState } from "react";
import Screen from "../../Screen/Screen";
import { Box } from "@mui/system";
import CategoryModal from "./CategoryModal";
import EnhancedTable from "../../common/TemporaryTable";


const Category = () => {

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  const headCells = [
    { id: 'categoryname', numeric: false, disablePadding: false, label: 'Category Name' },
    { id: 'unit', numeric: true, disablePadding: false, label: 'Unit' },
    // { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
  ];

  // Define the rows
  const rows = [
    { id: 1, categoryname: 'Gold', unit: "gm"},
    { id: 2, categoryname: 'Silver', unit: "gm" },
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
      {openModal && <CategoryModal isOpen={openModal} closeModal={closeModal} title={"Create New"} />}
    </div>
  );
};

export default Category;
