import logo from "./logo.svg";

import "./App.css";
import TopAppBar from "./Components/Bars/AppBar/AppBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Supplier from "./Components/Ledger/Supplier/Supplier";
import Sale from "./Components/Sale/Sale";
import Dashboard from "./Components/Dashboard/Dashboard";
import Category from "./Components/Setting/Category/Category";
import SideBar from "./Components/Bars/SideBar/SideBar";
import { Grid } from "@mui/material";
import Unit from "./Components/Setting/Unit/Unit";
import Hsn from "./Components/Setting/HSN/Hsn";
import Product from "./Components/Setting/Product/Product";
import Customer from "./Components/Ledger/Customer/Customer";
import Inventory from "./Components/Inventory/Inventory";
import PurchaseBill from "./Components/Purchase/PurchaseBill/PurchaseBill";
import AddBill from "./Components/Purchase/AddBill/AddBill";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashboard />}></Route>
          <Route path="/Dashboard" exact element={<Dashboard />}></Route>
          <Route path="/Inventory" exact element={<Inventory />}></Route>
          <Route path="/Supplier" exact element={<Supplier />}></Route>
          <Route path="/Customer" exact element={<Customer />}></Route>
          <Route path="/Purchase Bill" exact element={<PurchaseBill />}></Route>
          <Route path="/AddBill" exact element={<AddBill />}></Route>
          <Route path="/Sale" exact element={<Sale />}></Route>
          <Route path="/Category" exact element={<Category />}></Route>
          <Route path="/Product" exact element={<Product />}></Route>
          <Route path="/Unit" exact element={<Unit />}></Route>
          <Route path="/Hsn" exact element={<Hsn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
