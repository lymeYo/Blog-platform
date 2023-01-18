import { Button, ClickAwayListener } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import { useDispatch, useSelector } from "react-redux"
import LoginModal from "./LoginModal"
import React from "react"

function SignedUser(props: any) {
  const { avatarSrc, username } = useSelector(({ login }: any) => ({
    avatarSrc: login.avatarSrc,
    username: login.name,
  }))

  return (
    <div className="user-info">
      <div className="username"> {username} </div>
      <div className="avatar">
        <IconButton>
          <img src={avatarSrc} alt="" />
        </IconButton>
      </div>
    </div>
  )
}

function UnsignedUser(props: any) {
  const loginPopupOpen = () => {
    props.handleModalOpen(true)
  }

  return (
    <IconButton onClick={loginPopupOpen} color="inherit">
      Login
    </IconButton>
  )
}

function LoginArea(props: any) {
  const { isAuth } = useSelector(({ login }: any) => ({
    isAuth: login.isAuth,
  }))

  const [isModalOpen, setModalOpen] = React.useState(false)
  const handleModalOpen = (openStatus: boolean) => {
    setModalOpen(openStatus)
  }

  const handleClickAway = () => {
    handleModalOpen(false)
  }

  const LoginProfile = isAuth ? SignedUser : UnsignedUser //TODO

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="login-area">
        <LoginModal handleOpen={handleModalOpen} isOpen={isModalOpen} />
        <LoginProfile handleModalOpen={handleModalOpen} />
      </div>
    </ClickAwayListener>
  )
}

export default LoginArea
