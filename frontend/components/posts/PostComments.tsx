import React, { useState } from 'react'
import { Paper } from '@mui/material'
import { useSelector } from 'react-redux'

import AddCommentArea from '../universal/AddCommentArea'
import Comment from './Comment'
import { selectLoginStatus } from '../../redux/slices/login'
import { MyApi } from '../../utils/api'
import { TcommentRequest, TcommentResult } from '../../utils/api/types'

function CommentsList(props: any) {
  return (
    <ul className="comments-list">
      {props.dataList.map((data: TcommentResult) => (
        <Comment
          time={data.createdAt}
          name={data.user.username}
          text={data.text}
          rating={data.rating}
          id={data.id}
        />
      ))}
    </ul>
  )
}

function PostComments(props: any) {
  const isLogin = useSelector(selectLoginStatus)
  const [dataList, pushDataList] = useState<TcommentResult[]>(props.comments)

  const addNewComment = async (reqData: TcommentRequest) => {
    const data = await MyApi().comment.create(reqData)
    pushDataList([...dataList, data])
  }

  return (
    <div className="comments">
      <Paper variant="elevation" square>
        {isLogin ? <AddCommentArea addNewComment={addNewComment} postId={props.postId} /> : ''}
        <CommentsList dataList={dataList} />
      </Paper>
    </div>
  )
}

export default PostComments
