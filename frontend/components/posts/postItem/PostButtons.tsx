import React from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { IconButton } from '@mui/material'
import IosShareIcon from '@mui/icons-material/IosShare'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'

import StatisticsButtons from '../../universal/StatisticsButtons'

function ButtonsRow(props: any) {
  return (
    <div className="row">
      <div className="row-comments">
        <IconButton>
          <ChatBubbleOutlineIcon />
        </IconButton>
      </div>
      <div className="row-share">
        <IconButton>
          <IosShareIcon />
        </IconButton>
      </div>
      <div className="row-bookmark">
        <IconButton>
          <BookmarkBorderIcon />
        </IconButton>
      </div>
    </div>
  )
}

function PostButtons(props: any) {
  const upClickFunction = () => {
    props.renderRating(true)
  }
  const downClickFunction = () => {
    props.renderRating(false)
  }

  return (
    <div className="buttons">
      <ButtonsRow />
      <StatisticsButtons
        rating={props.rating}
        downClick={downClickFunction}
        upClick={upClickFunction}
      />
    </div>
  )
}

export default PostButtons
