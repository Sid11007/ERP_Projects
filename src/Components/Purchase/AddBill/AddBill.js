import React, { useState } from "react";
import {
  TextField,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import TopAppBar from "../../Bars/AppBar/AppBar";
import SideBar from "../../Bars/SideBar/SideBar";
import { Box } from "@mui/system";
import { useLocation } from "react-router-dom";
import Field from "../../common/Field";
import EnhancedTable from "../../common/Table";
import { Add, Remove } from "@mui/icons-material";
import { DatePicker } from "@mui/lab";

const AddBillPage = () => {
  const [supplierName, setSupplierName] = useState("");
  const [billNumber, setBillNumber] = useState("");
  const [defaultProductRow, setDefaultProductRow] = useState({
    category: "",
    productType: "",
    qty: 0,
    purchase: 0,
    mkCharge: 0,
    discount: 0,
    amount: 0,
  });
  const [products, setProducts] = useState([defaultProductRow]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const location = useLocation();

  const handleAddProduct = () => {
    setProducts([...products, { ...defaultProductRow }]);
  };

  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
  };
  const handleRemoveProduct = (index) => {
    if (products.length > 1) {
      const updatedProducts = [...products];
      updatedProducts.splice(index, 1); // Remove the last added row
      setProducts(updatedProducts);
    }
  };

  const headCells = [
    { id: "category", numeric: false, disablePadding: true, label: "Category" },
    {
      id: "producttype",
      numeric: false,
      disablePadding: true,
      label: "product Type",
    },
    { id: "qty", numeric: false, disablePadding: false, label: "Qty" },
    {
      id: "purchaserate",
      numeric: true,
      disablePadding: false,
      label: "Purchase Rate",
    },
    {
      id: "mkcharge",
      numeric: true,
      disablePadding: false,
      label: "Mk. Charge",
    },
    { id: "discount", numeric: true, disablePadding: false, label: "Discount" },
    { id: "ammount", numeric: true, disablePadding: false, label: "Ammount" },
  ];

  // Define the rows
  const rows = [
    {
      id: 1,
      category: "Gold",
      producttype: "Jhumki",
      qty: "1",
      purchaserate: 20000,
      mkcharge: 2121,
      discount: 1,
      ammount: 2323233,
    },
    {
      id: 2,
      category: "Gold",
      producttype: "necklace",
      qty: "1",
      purchaserate: 2000000,
      mkcharge: 213321,
      discount: 10,
      ammount: 232333233,
    },
    // Add more rows as needed
  ];
  // const currentDate = new Date().toLocaleDateString("en-US", {
  //   day: "2-digit",
  //   month: "2-digit",
  //   year: "numeric",
  // });

  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <TopAppBar />
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <SideBar />
            </Grid>
            <Grid item>
              <Box
                sx={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                  backgroundColor: "#FFFFFF",
                  opacity: 1,
                  padding: 2,
                  marginTop: 10,
                  //   border: "solid black 1px",
                  width: "75vw",
                }}
              >
                <Grid
                  container
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item>
                    <Typography sx={{ fontWeight: 600 }}>
                      {decodeURIComponent(
                        location.pathname.substring(1).trim()
                      )}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid
                  container
                  direction={"column"}
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item>
                    {" "}
                    <Grid container>
                      <Grid item>
                        <Field label="Supplier Name" />
                      </Grid>
                      <Grid item>
                        <Field label="Bill No." />
                      </Grid>
                      <Grid item sx={{ padding: 1, paddingLeft: 25 }}>
                        <Typography>Date:</Typography>
                      </Grid>
                      <Grid item>
                        <DatePicker
                          label="Select Date"
                          inputFormat="MM/dd/yyyy"
                          value={currentDate}
                          onChange={(newValue) => setCurrentDate(newValue)}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Category</TableCell>
                          <TableCell>Product Type</TableCell>
                          <TableCell>Qty</TableCell>
                          <TableCell>Purchase</TableCell>
                          <TableCell>Mk Charge</TableCell>
                          <TableCell>Discount</TableCell>
                          <TableCell>Amount</TableCell>
                          <TableCell>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {products.map((product, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <TextField
                                value={product.category}
                                onChange={(e) =>
                                  handleProductChange(
                                    index,
                                    "category",
                                    e.target.value
                                  )
                                }
                                size={"small"}
                              />
                            </TableCell>
                            <TableCell>
                              <TextField
                                value={product.productType}
                                onChange={(e) =>
                                  handleProductChange(
                                    index,
                                    "productType",
                                    e.target.value
                                  )
                                }
                                size={"small"}
                              />
                            </TableCell>
                            <TableCell>
                              <TextField
                                type="number"
                                value={product.qty}
                                onChange={(e) =>
                                  handleProductChange(
                                    index,
                                    "qty",
                                    parseInt(e.target.value, 10)
                                  )
                                }
                                size={"small"}
                              />
                            </TableCell>
                            <TableCell>
                              <TextField
                                type="number"
                                value={product.purchase}
                                onChange={(e) =>
                                  handleProductChange(
                                    index,
                                    "purchase",
                                    parseFloat(e.target.value)
                                  )
                                }
                                size={"small"}
                              />
                            </TableCell>
                            <TableCell>
                              <TextField
                                type="number"
                                value={product.mkCharge}
                                onChange={(e) =>
                                  handleProductChange(
                                    index,
                                    "mkCharge",
                                    parseFloat(e.target.value)
                                  )
                                }
                                size={"small"}
                              />
                            </TableCell>
                            <TableCell>
                              <TextField
                                type="number"
                                value={product.discount}
                                onChange={(e) =>
                                  handleProductChange(
                                    index,
                                    "discount",
                                    parseFloat(e.target.value)
                                  )
                                }
                                size={"small"}
                              />
                            </TableCell>
                            <TableCell>
                              {product.qty * product.purchase}
                            </TableCell>
                            <TableCell>
                              {index === 0 ? (
                                <IconButton onClick={handleAddProduct}>
                                  <Add color="primary" />
                                </IconButton>
                              ) : (
                                <IconButton onClick={handleRemoveProduct}>
                                  <Remove color="error" />
                                </IconButton>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      justifyContent="space-evenly"
                      alignItems="center"
                    >
                      <Grid item xs>
                        <Grid
                          container
                          direction="column"
                          justifyContent="center"
                          spacing={1}
                        >
                          <Grid item>
                            <Typography sx={{ fontSize: "14px" }}>
                              Total Items :
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography sx={{ fontSize: "14px" }}>
                              Total Qty. :
                            </Typography>
                          </Grid>
                          <Grid item>
                            <TextField id="outlined" label="Remark" />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        xs
                        sx={{ paddingLeft: "36vw", paddingTop: "5vh" }}
                      >
                        <Field label="Sub Total" />
                        <Field label="SGST" />
                        <Field label="CGST" />
                        <Field label="Grand Total" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      justifyContent="flex-end"
                      alignItems="flex-end"
                      spacing={2}
                    >
                      <Grid item>
                        <Button variant="contained" color="primary">
                          Add Bill
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="outlined" color="info">
                          Cancel
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddBillPage;
