import { Box, Button, Input, Modal, Tabs, TextField, Tab, ClickAwayListener } from "@mui/material"
import { Controller, useForm } from "react-hook-form";
import React from "react";
import * as Yup from 'yup'
import LoginField from "./LoginField";


const modalStyles = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 500,
  maxWidth: 600,
  width: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}


function FormTabs(props: any) {
  const [value, setValue] = React.useState(0) //login - 0; register - 1

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const changeTabTo = (type: 'login' | 'registration') => {
    setValue(type == 'login' ? 0 : 1)
  } 

  const TabPanel = (props: any) => {
    return props.value == props.index ? props.children : ""
  }

  return (
    <div className="login-tab-panels">
      <Box
        sx={{ marginBottom: "20px", borderBottom: 1, borderColor: "divider" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Вход" id="0" />
          <Tab label="Регистрация" id="1" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <LoginField
          modalClose={props.modalClose}
          changeTabTo={changeTabTo}
          type={"login"}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LoginField
          modalClose={props.modalClose}
          changeTabTo={changeTabTo}
          type={"registration"}
        />
      </TabPanel>
    </div>
  )
}

function LoginModal(props: any) {
  const handleClose = () => {
    if (props.isOpen) props.handleOpen(false)
  }
  
  return (
    <div className="modal-wrapper">
      <Modal
        open={props.isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyles}>
          <FormTabs modalClose={handleClose} />
        </Box>
      </Modal>
    </div>
  )
}

export default LoginModal