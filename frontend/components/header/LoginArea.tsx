import { Button } from "@mui/material"
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch, useSelector } from "react-redux"
import LoginModal from "./LoginModal"
import React from "react"


function SignedUser(props: any) {

   return (
      <IconButton>#USERAVATAR</IconButton>
   )
}

function UnsignedUser(props: any) {
   const loginPopupOpen = () => {
      props.handleModalOpen(true)
   }
   
   return (
      <IconButton onClick={loginPopupOpen} color="inherit">Login</IconButton> 
   )
}

function LoginArea(props: any) {
   const { isAuth } = useSelector(({ login }: any) => ({
      isAuth: login.isAuth,
   }))

   const [isModalOpen, setModalOpen] = React.useState(false)
   const handleModalOpen = (openStatus = !isModalOpen) => setModalOpen(openStatus)
   
   const CurLoginArea = isAuth ? SignedUser : UnsignedUser //TODO
      
   return (
      <div className="login-area">
         <LoginModal handleOpen={handleModalOpen} isOpen={isModalOpen}/>
         <CurLoginArea handleModalOpen={handleModalOpen} />
      </div>
   )
}

export default LoginArea