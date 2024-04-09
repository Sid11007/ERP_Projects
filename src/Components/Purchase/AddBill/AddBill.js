import React, { useState, useEffect } from "react";
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
  Paper,
} from "@mui/material";
import TopAppBar from "../../Bars/AppBar/AppBar";
import SideBar from "../../Bars/SideBar/SideBar";
import { Box, width } from "@mui/system";
import { useLocation } from "react-router-dom";
import Field from "../../common/Field";
import { Add, Delete, Remove } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const AddBillPage = () => {
  const [products, setProducts] = useState([]);
  const datePicker = new Date();
  const [currentDate, setCurrentDate] = useState(null);
  const location = useLocation();
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [subTotal, setsubTotal] = useState(0)
 
  // Function to calculate the total quantity

  const [newProduct, setNewProduct] = useState({
    category: "",
    productType: "",
    qty: 0,
    purchaseRate: 0,
    mkCharge: 0,
    discount: 0,
    amount: 0,
  });

  
  const handleAddProduct = () => {
    const amount =
      newProduct.qty * newProduct.purchaseRate +
      newProduct.mkCharge -
      (newProduct.discount / 100) * newProduct.purchaseRate * newProduct.qty;

    // Create a new product object with the calculated amount
    const productWithAmount = {
      ...newProduct,
      amount: amount,
    };

    // Add the new product to the products list
    setProducts([...products, productWithAmount]);

    setNewProduct({
      category: "",
      productType: "",
      qty: 0,
      purchaseRate: 0,
      mkCharge: 0,
      discount: 0,
      amount: 0,
    });
    calculateTotalQuantity();
  };
  
  const calculateTotalQuantity = () => {
    let total = 0;
    products.forEach((product) => {
      total += parseInt(product.qty);
    });
    setTotalQuantity(total);
    calculateSubtotal();
    
  };
  const calculateSubtotal = () => {
    let total = 0;
    products.forEach((product) => {
      total += parseInt(product.amount);
    });
    setsubTotal(total);
    
    
    
  };
 



  const handleDeleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };
  useEffect(() => {
    calculateTotalQuantity();
 
    calculateSubtotal ();
  
  }, [products]);


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
                  width: "81vw",
                 
                 
                }}
              >
                <Grid
                  container
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item>
                    <Typography variant="h5" sx={{ fontWeight: 600 ,color:'#002f67'}}>
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
                    <Grid container sx={{ mt: 4 }}>
                      <Grid item  >
                       
                        <Field label="Supplier Name"  size="large"/>
                      </Grid>
                      <Grid item>
                        <Field  label="Bill No."  size="large" />
                      </Grid>
                      <Grid item sx={{ padding: 1, paddingLeft: 25 }}>
                        <Typography variant="h5">Date:</Typography>
                      </Grid>
                      <Grid item>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                           
                            inputFormat="MM/dd/yyyy"
                            defaultValue={currentDate}
                            onChange={(newValue) => setCurrentDate(newValue)}
                            sx={{width:'175px'
                            }}
                          />
                        </LocalizationProvider>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item >
                    <Table sx={{marginTop: '20px'}}>
                      <TableHead sx={{backgroundColor:'#002f67'}}>
                        <TableRow >
                          <TableCell sx={{color: "white", fontSize:'18px'}}>Category</TableCell>
                          <TableCell sx={{color: "white", fontSize:'18px'}}>Product Type</TableCell>
                          <TableCell sx={{color: "white", fontSize:'18px'}}>Qty (g)</TableCell>
                          <TableCell sx={{color: "white", fontSize:'18px'}}>Purchase</TableCell>
                          <TableCell sx={{color: "white", fontSize:'18px'}}>Mk Charge</TableCell>
                          <TableCell sx={{color: "white", fontSize:'18px'}}>Discount</TableCell>
                          <TableCell sx={{color: "white", fontSize:'18px'}}>Amount </TableCell>
                          <TableCell sx={{color: "white", fontSize:'18px'}} >Action</TableCell>
                        </TableRow>
                      </TableHead>

                      <TableRow>
                        <TableCell>
                          <TextField
                            fullWidth
                            value={newProduct.category}
                            onChange={(e) =>
                              setNewProduct({
                                ...newProduct,
                                category: e.target.value,
                              })
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                           
                            fullWidth
                            value={newProduct.productType}
                            onChange={(e) =>
                              setNewProduct({
                                ...newProduct,
                                productType: e.target.value,
                              })
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            
                            type="number"
                            fullWidth
                            value={newProduct.qty}
                            onChange={(e) =>{

                              const inputValue = e.target.value;
                              if(inputValue>=0)
                              setNewProduct({
                                ...newProduct,
                                qty: inputValue,
                              })
                            }
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                          
                            type="number"
                            fullWidth
                            value={newProduct.purchaseRate}
                            onChange={(e) =>
                              setNewProduct({
                                ...newProduct,
                                purchaseRate: parseFloat(e.target.value),
                              })
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                         
                            type="number"
                            fullWidth
                            value={newProduct.mkCharge}
                            onChange={(e) =>
                              setNewProduct({
                                ...newProduct,
                                mkCharge: parseFloat(e.target.value),
                              })
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                          
                            type="number"
                            fullWidth
                            value={newProduct.discount}
                            onChange={(e) =>
                              setNewProduct({
                                ...newProduct,
                                discount: parseFloat(e.target.value),
                              })
                            }
                          />
                        </TableCell>
                        
                        <TableCell>
                            
                              {newProduct.qty*newProduct.purchaseRate+newProduct.mkCharge-(newProduct.discount/100*newProduct.purchaseRate*newProduct.qty)}
                            </TableCell>
                        
                        <TableCell>
                          <Grid item xs={1}>
                          <IconButton onClick={handleAddProduct}>
                                  <Add color="primary" />
                                </IconButton>
                          </Grid>
                        </TableCell>
                      </TableRow>

                            
                        {products.map((product, index) => (
                          
                          <TableRow>
                            <TableCell>

                                <Typography>{product.category}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{product.productType}</Typography>

                            </TableCell>
                            <TableCell>
                                <Typography>{product.qty}</Typography>
                              
                            </TableCell>
                            <TableCell>
                                <Typography>{product.purchaseRate}</Typography>
                              
                            </TableCell>
                            <TableCell>
                                <Typography>{product.mkCharge}</Typography>
                              
                            </TableCell>
                            <TableCell>
                                <Typography>{product.discount}</Typography>
                              
                              </TableCell>
                              <TableCell>
                                <Typography>{product.amount}</Typography>
                              
                            </TableCell>
                            <TableCell>
                                <IconButton
                                  onClick={() => handleDeleteProduct(index)}
                                >
                                  <Delete />
                                </IconButton>
                              
                            </TableCell>
                          </TableRow>
                           
                         
                        ))}
                     
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
                            <Typography sx={{ fontSize: "16px" ,  fontWeight: "bold",color: '#002f67' }}>
                              Total Items : {products.length}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography sx={{ fontSize: "16px" , fontWeight: "bold",color: '#002f67' }}>
                              Total Qty : {totalQuantity}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <TextField id="outlined" label="Remark"  sx={{ width: '30ch',}}/>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        xs
                        sx={{ paddingLeft: "42vw", paddingTop: "7vh" }}
                      >
                      <Table sx={{width: "30ch" }} >
                        <TableRow>
                          <TableCell sx={{ fontSize: "18px" , border:'1px', fontWeight: "bold", color: '#002f67'}}>
                          Sub Total :
                          </TableCell>
                          <TableCell  sx={{ fontSize: "18px", borderBottom:' 2px solid #002f67'}}> 
                          ₹ {subTotal}
                          </TableCell>
                        </TableRow>
                      
                        <TableRow>
                          <TableCell  sx={{ fontSize: "17px" , border:'1px', fontWeight: "bold",color: '#002f67' }}>
                          IGST(5%) : 
                          </TableCell>
                          <TableCell  sx={{ fontSize: "18px" , borderBottom:' 2px solid #002f67'}}>
                          ₹ {subTotal*0.05}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell  sx={{ fontSize: "18px",border:'1px',  fontWeight: "bold" , color: '#002f67' }}>
                          Grand Total : 
                          </TableCell>
                          <TableCell sx={{ fontSize: "18px", borderBottom:' 2px solid #002f67' }}>
                          ₹ {subTotal+(subTotal*5/100)}
                          </TableCell>
                        </TableRow>
                      </Table>
                            
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
