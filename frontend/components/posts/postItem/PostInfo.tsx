import React from 'react'
import { useSelector } from 'react-redux'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import PostBody from './PostBody'

function InfoButtons() {
  return (
    <div className="buttons">
      <div className="subscribe">
        <IconButton>
          <AddIcon />
        </IconButton>
      </div>
      <div className="parameters">
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </div>
    </div>
  )
}

function PostInfo() {
  const { userName, avatarSrc } = useSelector(({ login }) => ({
    userName: login.name,
    avatarSrc: login.avatarSrc,
  }))

  return (
    <div className="info">
      <div className="info-row">
        <div className="category">Игры</div>
        <div className="avatar">
          <img src={avatarSrc} alt="" />
        </div>
        <div className="username">{userName}</div>
        <div className="timepost">2 часа</div>
      </div>
      <InfoButtons />
    </div>
  )
}

export default PostInfo
