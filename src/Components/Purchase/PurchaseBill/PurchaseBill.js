import { Box } from '@mui/system'
import React, { useState } from 'react'
import Screen from '../../Screen/Screen'
import { useNavigate } from 'react-router-dom';

const PurchaseBill = () => {

  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  const headCells = [
    { id: "billnumber", numeric: true, disablePadding: true, label: "Bill No." },
    { id: "suppliername", numeric: false, disablePadding: true, label: "Supplier Name" },
    {id: "date",  numeric: false, disablePadding: false, label: "Date"},
    {id: "totalammount",  numeric: true, disablePadding: false, label: "Total Ammount"},
    {id: "quantity", numeric: true, disablePadding: false, label: "Total Qty" },
    

  ];

  // Define the rows
  const rows = [
    { id: 1,billnumber:323, suppliername: "Aman trader", date: "09/12/2024", totalammount:20000, quantity:1,},
    { id: 2,billnumber:3234, suppliername: "Rishabh trader", date: "09/12/2024", totalammount:100000, quantity:20,},
    // Add more rows as needed
  ];
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Screen
          onClick={() => {
            navigate(`/AddBill`);
          }}
          editButtonClick={handleOpenModal}
          headCells={headCells}
          rows={rows}
        />
        
      </Box>
      {/* {openModal && <AddBillModal isOpen={openModal} closeModal={closeModal} title={"Add New"} />} */}
    </div>
  );
};

export default PurchaseBill