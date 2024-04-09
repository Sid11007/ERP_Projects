import { Box } from "@mui/system";
import React from "react";
import Sidebar from "../Bars/SideBar/SideBar";
import TopAppBar from "../Bars/AppBar/AppBar";
import Content from "../Content/Content";
import { Grid } from "@mui/material";
import Screen from "../Screen/Screen";

const Dashboard = () => {
  return (
    <>
      <Screen onclick={()=>{console.log("dashboard")}} hideContent/>
    </>
  );
};

export default Dashboard;
