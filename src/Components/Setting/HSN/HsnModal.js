import React from "react";
import ModalForm from "../../common/ModalForm/ModalForm";
import { Grid, TextField, Typography } from "@mui/material";
import Field from "../../common/Field";

const HsnModal = (props) => {
  return (
    <div>
      <ModalForm
        isOpen={props.isOpen}
        closeModal={props.closeModal}
        title={props.title}
        Content={
          <Grid container direction="column" spacing={1} sx={{paddingRight:12}}>
            <Grid item>
             <Field label="HSN Code"/>
            </Grid>
            <Grid item>
            <Field label="Tax %"/>
            </Grid>
          </Grid>
        }
      />
    </div>
  );
};

export default HsnModal;
