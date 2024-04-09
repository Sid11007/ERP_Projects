import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { Search } from "@mui/icons-material";
import EnhancedTable from "../common/Table";
import Field from "../common/Field";
// import EnhancedTable from "../common/TemporaryTable";
// import App from "../common/testingtable"

const Content = (props) => {
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);
  console.log(location);
  const trimmedPathname = decodeURIComponent(
    location.pathname.substring(1).trim()
  );
  console.log(trimmedPathname);
  return (
    <div>
      <Grid container direction="column" spacing={3} justifyContent="center">
        <Grid item>
          <Box
            sx={{
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
              backgroundColor: "#FFFFFF",
              opacity: 1,
              padding: 2,
              marginTop: 12,
              border: "solid black 1px",
              width: "75vw",
            }}
          >
            <Grid container>
              <Grid item>
                <Typography>
                  {decodeURIComponent(location.pathname.substring(1).trim())}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item>
          <Grid container spacing={1} justifyContent="space-between">
            {!props.hideButton && (
              <Grid item>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => props.onClick()}
                >
                  Create New
                </Button>
              </Grid>
            )}
            <Grid item>
              {/* <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder="Search"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              /> */}
              <Field placeholder="Search"/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <EnhancedTable
            headCells={props.headCells}
            rowsData={props.rows}
            editButtonClick={props.editButtonClick}
          />
          {/* <App/> */}
          {/* <TempTable/> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Content;
