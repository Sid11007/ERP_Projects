import { PropaneSharp } from "@mui/icons-material";
import { Grid, TextField, Typography } from "@mui/material";
import { fontSize, height } from "@mui/system";
import React, { useState } from "react";

const Field = (props) => {
  const [value, setValue] = useState("");

  const handleOnChangeFunction = (e) => {
    console.log(e.target.value, "valuee");
    setValue(e.target.value);
  };

  const TextInputProps = {
    id: "outlined-basic",
    variant: "outlined",
    size: props.size ? props.size : "small",
    disabled: props.disabled,
    select: props.dropdown,
    value: props.value,
    placeholder: props.placeholder,
    fullWidth: true,
    
    onChange: (e) => {
      handleOnChangeFunction(e);
      // props.onChange(e)
      // if (props.onChangeEvent) {
      //   props.onChangeEvent(e);
      // }
    },
    // multiline: props.multiline,
    // helperText: props.error ? null : props.helperText,
  };

  return (
    <div>
      <Grid container alignItems="center" spacing={1} sx={{ paddingBottom: 1 }}>
        <Grid item xs>
          <Grid container alignItems="flex-end" justifyContent="flex-end">
            <Grid item>
              <Typography sx={{fontSize:props.fontSize || "15px"}}>{props.label}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container justifyContent="flex-start" alignItems="flex-start">
            <Grid item>
              <TextField {...TextInputProps} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Field;
