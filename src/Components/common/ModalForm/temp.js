<Fade in={props.isOpen}>
        {/* modal container */}
        <Grid className={classes.container}>
          {/* modal header  */}
          <div
            style={{
              paddingBottom: props.Steps || props.TabOptions ? 0 : "1vh",
            }}
            className={classes.modalHeader}
          >
            <div className={classes.padding}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Typography data-testId={props.dataTestIdTitle} className={classes.title}>
                    {props.title}
                  </Typography>
                </Grid>


                <Grid item style={{ paddingLeft: "1vw" }}>
                  <CustomTooltip title={t("Close")}>
                    <IconButton
                      id={`abc_modal_Form_Close_Button`}
                      size="small"
                      aria-label="toggle password visibility"
                      onClick={closeModal}
                      tabIndex={0}
                      disableFocusRipple
                      className={classes.bluemark}
                    >
                      <CloseIcon
                        style={{
                          width: "12px",
                          height: "12px",
                          cursor: "pointer",
                        }}
                      />
                    </IconButton>
                  </CustomTooltip>
                </Grid>
              </Grid>
            </div>
            <Grid
              container
              justifyContent="start"
              style={{
                paddingLeft: props.paddingLeft ? props.paddingLeft : 10,
              }}
            >
              {/* Steps  */}
              {props.Steps &&
                props.Steps.map((value, index) => {
                  return (
                    <Grid key={index} item>
                      <Grid
                        container
                        key={index}
                        alignItems="center"
                        justifyContent="start"
                        direction="row"
                        spacing={2}
                      >
                        {index !== 0 && (
                          <Grid item>
                            <ArrowForwardIos className={classes.forwardIcon} />
                          </Grid>
                        )}
                        <Grid item>
                          <Box
                            className={
                              props.activeState === index
                                ? classes.selectedUnderline
                                : null
                            }
                            children={
                              <div style={{ padding: 2 }}>
                                {index < props.activeState ? (
                                  <CheckCircleRounded
                                    fontSize="small"
                                    style={{ color: "green", padding: 0 }}
                                  />
                                ) : (
                                  <Avatar
                                    style={{
                                      height: "18px",
                                      width: "18px",
                                      fontSize: 12,
                                      backgroundColor: "#606060",
                                    }}
                                  >
                                    {index + 1}
                                  </Avatar>
                                )}
                              </div>
                            }
                          />
                        </Grid>


                        <Grid item>
                          <Typography
                            className={[
                              classes.text,
                              props.activeState === index
                                ? classes.boldText
                                : null,
                            ]}
                          >
                            {value}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                })}
              {/* Tab options */}
              {props.TabOptions &&
                props.TabOptions.map((value, index) => {
                  return (
                    <Grid key={index} item>
                      <Grid
                        container
                        key={index}
                        alignItems="center"
                        justify="start"
                        direction="row"
                        spacing={2}
                      >
                        <Grid item>
                          <Button
                            onClick={() => props.changeState(index)}
                            type="text"
                            className={[
                              props.activeState === index
                                ? classes.text
                                : classes.text2,
                              props.activeState === index
                                ? classes.boldText
                                : null,
                              props.activeState === index
                                ? classes.selectedUnderline
                                : null,
                            ]}
                          >
                            {value}
                          </Button>


                          {/* <Typography
                              onClick={() => alert("hi")}
                              className={[
                                classes.text,
                                props.activeState === index
                                  ? classes.boldText
                                  : null,
                                props.activeState === index
                                  ? classes.selectedUnderline
                                  : null,
                              ]}
                            >
                              {value}
                            </Typography> */}
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                })}
              {/* {props.headerCloseBtn && ( */}


              {/* )} */}
            </Grid>
          </div>


          {/* modal content  */}
          <div
            style={{
              height: props.containerHeight ? props.containerHeight : null,
              width: props.containerWidth ? props.containerWidth : null,
              maxHeight: props.maxHeight ? props.maxHeight : "85vh",
              overflowY: "auto",
            }}
            className={classes.content}
          >
            <div className={props.NoContentPadding ? null : classes.paddingContent}>
              {props.Content}
            </div>
          </div>


          {/* modal footer  */}
          <div className={classes.modalFooter}>
            <div className={classes.padding}>
              <Grid container justify="flex-end" spacing={1}>
                {/* Cancel btn */}
                {!props.removeCancel && (
                  <Grid item alignItems="center" style={{ marginRight: "4px" }}>
                    {/* <CustomTooltip title={"Cancel"}> */}
                    <LoadingButton
                      id={`abc_modal_Form_Cancel_Button`}
                     
                      btnType={"BUTTON-OUTLINED-CANCEL"}
                      size="small"
                      variant="contained"
                      title={t("Cancel")}
                      onClick={closeModal}
                      btnCancelTitle={props.btnCancelTitle}
                      DataTestId={props.dataTestId}
                    />
                    {/* <Button
                      style={customStyle.cancelbtn}
                      variant="outlined"
                      size="small"
                      onClick={closeModal}
                    >
                      {t("Cancel")}
                    </Button> */}
                    {/* </CustomTooltip> */}
                  </Grid>
                )}
                {/* btn1  */}
                {props.btn1Title && (
                  <Grid item alignItems="center">
                    <LoadingButton
                      id={`abc_modal_Form_Button1`}
                      btnType={
                        props.btn1disabled
                          ? "BUTTON-DISABLED"
                          : props.btn1Type
                          ? props.btn1Type
                          : "BUTTON-FILLED"
                      }
                      size="small"
                      variant="contained"
                      loading={props.btn1isLoading}
                      title={props.btn1Title}
                      disabled={props.btn1disabled}
                      onClick={props.onClick1}
                      data-testid={props.dataTestBtn1Id}
                    />
                  </Grid>
                )}
                {/* btn2 */}
                {props.btn2Title && (
                  <Grid item alignItems="center">
                    <LoadingButton
                      id={`abc_modal_Form_Button2`}
                      // data-testid="modalFormButton2"
                      btnType={
                        props.btn2disabled
                          ? "BUTTON-DISABLED"
                          : props.btn2Type
                          ? props.btn2Type
                          : "BUTTON-FILLED"
                      }
                      size="small"
                      variant="contained"
                      loading={props.btn2isLoading}
                      title={props.btn2Title}
                      data-testid={props.dataTestBtn2Id}
                      disabled={props.btn2disabled}
                      onClick={props.onClick2}


                    />
                  </Grid>
                )}
              </Grid>
            </div>
          </div>
        </Grid>
      </Fade>