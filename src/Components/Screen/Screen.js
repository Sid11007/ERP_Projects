import { Grid } from "@mui/material";
import React, { useState } from "react";
import SideBar from "../Bars/SideBar/SideBar";
import Sidebar_temp from "../Bars/SideBar/Sidebar_temp";
import Content from "../Content/Content";
import TopAppBar from "../Bars/AppBar/AppBar";

const Screen = (props) => {
  return (
    <div>
      <Grid container direction="row" spacing={2}>
        <Grid item>
          <SideBar />
        </Grid>
        <Grid item>
          {!props.hideContent && (
            <Content
              onClick={props.onClick}
              headCells={props.headCells}
              rows={props.rows}
              hideButton={props.hideButton}
              editButtonClick={props.editButtonClick}
            />
          )}
        </Grid>
      </Grid>
      <TopAppBar />
    </div>
  );
};

export default Screen;
