import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Close, PropaneTankSharp } from "@mui/icons-material";
import { Divider, Grid, IconButton, Tooltip } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 480,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 20,
  borderRadius: 1,
};
const titleStyle = {
  color: "#3D3D3D",
  opacity: 1,
  fontSize: 16,
  fontWeight: 600,
  padding: 1,
  paddingTop: 1.5,
};
const contentStyle = {
  flex: 1,
  flexDirection: "column",
  overflowY: "auto",
  // paddingBottom: (props) =>
  //   props.contentPaddingBottom ? props.contentPaddingBottom : 16,
  // paddingTop: (props) =>
  //   props.contentPaddingTop ? props.contentPaddingTop : 6,
  outline: 0,
  // overflowX: "hidden"
};

const paddingContent = {
  paddingLeft: 16,
  paddingRight: 16,
  paddingBottom: 16,
  paddingTop: 6,
};

export default function ModalForm(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const closeModal = () => {
    props.closeModal();
  };

  return (
    <div>
      <Modal
        // aria-labelledby="transition-modal-title"
        // aria-describedby="transition-modal-description"
        open={props.isOpen}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 100,
          },
        }}
      >
        <Fade in={props.isOpen}>
          <Box sx={style}>
            <Grid container direction="column" spacing={1}>
              {/* modal header */}
              <Grid
                item
                sx={{
                  borderBottom: "1px solid rgba(112, 112, 112, .5)",
                  outline: 0,
                  paddingBottom: "0.5vh",
                  flexDirection: "row",
                  paddingTop: "1vh",
                }}
              >
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography sx={titleStyle}>{props.title}</Typography>
                  </Grid>

                  <Grid item>
                    <Tooltip title={"Close"}>
                      <IconButton
                        size="medium"
                        aria-label="toggle password visibility"
                        onClick={closeModal}
                        tabIndex={0}
                        disableFocusRipple
                      >
                        <Close />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Grid>
              {/* modal content */}
              <Grid
                item
                sx={{
                  borderBottom: "1px solid rgba(112, 112, 112, .5)",
                  outline: 0,
                  paddingBottom: "0.5vh",
                  flexDirection: "row",
                  paddingTop: "1vh",
                }}
              >
                <div
                  sx={{
                    height: props.containerHeight
                      ? props.containerHeight
                      : null,
                    width: props.containerWidth ? props.containerWidth : null,
                    maxHeight: props.maxHeight ? props.maxHeight : "85vh",
                    overflowY: "auto",
                  }}
                >
                  <div sx={props.NoContentPadding ? null : paddingContent}>
                    {props.Content}
                  </div>
                </div>
              </Grid>
              {/* modal footer */}
              <Grid
                item
                sx={{
                  borderBottom: "1px solid rgba(112, 112, 112, .5)",
                  outline: 0,
                  paddingBottom: "1.5vh",
                  flexDirection: "row",
                  paddingTop: "1vh",
                }}
              >
                <Grid container justifyContent="flex-end" spacing={1} sx={{paddingRight:1}}>
                  {/* Cancel btn */}
                  {!props.removeCancel && (
                    <Grid
                      item
                      alignItems="center"
                      // style={{ marginRight: "4px" }}
                    >
                      {/* <CustomTooltip title={"Cancel"}> */}
                      <Button
                        id={`abc_modal_Form_Cancel_Button`}
                        color="inherit"
                        size="small"
                        variant="outlined"
                        onClick={closeModal}
                        // btnCancelTitle={props.btnCancelTitle}
                      >
                        Cancel
                      </Button>
                    </Grid>
                  )}
                  {/* btn1  */}

                  <Grid item alignItems="center">
                    <Button
                      id={`abc_modal_Form_Button1`}
                      size="small"
                      variant="contained"
                      onClick={props.onClick1}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
