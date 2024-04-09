import React from "react";
import ModalForm from "../../common/ModalForm/ModalForm";
import { Grid, TextField, Typography } from "@mui/material";
import Field from "../../common/Field";

const CustomerModal = (props) => {
  return (
    <div>
      <ModalForm
        isOpen={props.isOpen}
        closeModal={props.closeModal}
        title={props.title}
        Content={
          <Grid container direction="column" spacing={1} sx={{paddingRight:12}}>
            <Grid item>
             <Field label="Name"/>
            </Grid>
            <Grid item>
             <Field label="Mobile No."/>
            </Grid>
            <Grid item>
             <Field label="GSTIN"/>
            </Grid>
            <Grid item>
             <Field label="State"/>
            </Grid>
            <Grid item>
            <Field label="City"/>
            </Grid>
          </Grid>
        }
      />
    </div>
  );
};

export default CustomerModal;
