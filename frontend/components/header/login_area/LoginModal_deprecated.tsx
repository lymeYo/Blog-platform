import { Box, Button, Input, Modal, Tabs, TextField, Tab } from "@mui/material"
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from 'yup'

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

function CustomField(props: any) {
   const { name, label, value, handleChange, handleBlur } = props
   
   return (
      <TextField
         sx={{margin:"10px 0"}}
         name={name} 
         label={label} 
         value={value}
         onChange={handleChange}
         onBlur={handleBlur}
         variant="outlined"
         fullWidth
      />
   )
}

function TabPanel(props: any) {
   
   return props.value == props.index ? props.children : ""
}

function FormTabs(props: any) {
   const [value, setValue] = React.useState(0)

   const handleChange = (event, newValue) => {
      console.log(event, newValue);
      
      setValue(newValue);
   }

   return (
      <div className="login-tab-panels">
         <Box sx={{ marginBottom:"20px", borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
               <Tab label="Вход" id="0" />
               <Tab label="Регистрация" id="1" />
            </Tabs>
         </Box>
         <TabPanel value={value} index={0}>
            <InputForm type={"login"} />
         </TabPanel>
         <TabPanel value={value} index={1}>
            <InputForm type={"registration"} />
         </TabPanel>
      </div>
   )
}

function InputForm(props: any) {
   const type: "login" | "registration" = props.type
   
   return (
      type == "login" ?
         <Formik
            initialValues={{ nickName: '', email: '' }}
            onSubmit={data => {
               console.log(data)
            }}
         >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
               <form onSubmit={handleSubmit}>
                  <CustomField
                     name="nickName"
                     label="nickName"
                     value={values.nickName}
                     handleChange={handleChange}
                     handleBlur={handleBlur}
                  />
                  <CustomField
                     name="email"
                     label="email"
                     value={values.email}
                     handleChange={handleChange}
                     handleBlur={handleBlur}
                  />

                  <div>
                  </div>
                     <Button sx={{marginTop: "10px"}} type="submit" fullWidth>Вход</Button> 

               </form>
            )}
         </Formik>
      :
         <Formik
            initialValues={{ fullName: '', nickName: '', email: '' }}
            onSubmit={data => {
               console.log(data)
            }}
         >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
               <form onSubmit={handleSubmit}>
                  <CustomField
                     name="fullName"
                     label="fullName"
                     value={values.fullName}
                     handleChange={handleChange}
                     handleBlur={handleBlur}
                  />
                  <CustomField
                     name="nickName"
                     label="nickName"
                     value={values.nickName}
                     handleChange={handleChange}
                     handleBlur={handleBlur}
                  />
                  <CustomField
                     name="email"
                     label="email"
                     value={values.email}
                     handleChange={handleChange}
                     handleBlur={handleBlur}
                  />

                  <div>
                     <Button sx={{ marginTop: "10px" }} fullWidth>Регистрация</Button>
                  </div>

               </form>
            )}
         </Formik>
   )
}

function LoginModal(props: any) {
   const handleClose = () => props.handleOpen(false)
   
   return (
      <div className="modal-wrapper">
         <Modal
            open={props.isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
               <FormTabs />
               {/* <ul className="login-area-list"> */}
                  {/* <li>
                     <Button fullWidth>Google</Button>
                  </li>
                  <li>
                     <Button fullWidth>Facebook</Button>
                  </li>
                  <li>
                     <Button fullWidth>Instagram</Button>
                  </li> */}
               {/* </ul> */}
            </Box>
         </Modal>
      </div>
   )
}

export default LoginModal