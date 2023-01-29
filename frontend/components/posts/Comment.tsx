import React, { useState } from 'react'
import {
  Avatar,
  ClickAwayListener,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

import StatisticsButtons from '../universal/StatisticsButtons'
import { TcommentRequest } from '../../utils/api/types'
import { MyApi } from '../../utils/api'

function OptionList(props: any) {
  const deleteCommentRender = (event) => {
    props.handleClick(event)
  }

  return (
    <>
      <MenuItem onClick={deleteCommentRender}>Delete comment</MenuItem>
    </>
  )
}

function CommentButtons(props: any) {
  const anchorRef = React.useRef(null)
  const [open, setOpen] = React.useState(false)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  return (
    <div className="comment-buttons">
      <div>Ответить</div>
      <div>
        <IconButton
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MoreHorizIcon />
        </IconButton>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <OptionList commentId={props.commentId} handleClick={handleClose} />
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  )
}

function Comment(props: any) {
  const { name, time, rating, text, id } = props
  const [curRating, setCurRating] = useState(rating)
  const ratingRender = async (isRatingUp: boolean) => {
    const newRating = isRatingUp ? rating + 1 : rating - 1
    const commentData: Partial<TcommentRequest> = {
      text,
      rating: newRating,
    }
    setCurRating(newRating)
    await MyApi().comment.updateStatistics(commentData, id)
  }
  const downClick = () => ratingRender(false)
  const upClick = () => ratingRender(true)

  return (
    <div className="comment">
      <div className="comment-info">
        <div className="comment-avatar">
          <Avatar
            alt="Ramil Javadi"
            src="https://leonardo.osnova.io/8769cf2e-070c-59a2-bc6b-89f31a89a9eb/-/scale_crop/64x64/-/format/webp/"
          />
        </div>
        <div className="comment-profile">
          <div className="comment-name">{name}</div>
          <div className="comment-time">{time}</div>
        </div>
        <StatisticsButtons rating={curRating} downClick={downClick} upClick={upClick} />
      </div>
      <div className="comment-text">{text}</div>
      <CommentButtons commentId={id} />
    </div>
  )
}

export default Comment
