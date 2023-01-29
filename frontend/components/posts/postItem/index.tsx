import React, { useState } from 'react'
import Router from 'next/router'

import PostComments from '../PostComments'
import { TcommentResult, TpostRequest, TpostResult } from '../../../utils/api/types'
import PostInfo from './PostInfo'
import PostBody from './PostBody'
import PostButtons from './PostButtons'
import { MyApi } from '../../../utils/api'

interface PostItemProps {
  post: TpostResult
  comments: TcommentResult[]
  isFullPost: boolean
}
function PostItem(props: PostItemProps) {
  const { id, title, body, rating } = props.post

  const openPost = async () => {
    await Router.push(`/post/${id}`)
  }

  const [curRating, setCurRating] = useState(rating)

  const renderRating = async (isRatingUp: boolean) => {
    const newRating = isRatingUp ? rating + 1 : rating - 1
    const postData: TpostRequest = {
      title,
      body,
      rating: newRating,
    }
    setCurRating(newRating)
    await MyApi().post.updateStatistics(postData, id.toString())
  }

  const Content = () => (
    <div className="post-item">
      <PostInfo />
      <PostBody openPost={openPost} title={title} body={body} isFullPost={props.isFullPost} />
      <PostButtons renderRating={renderRating} rating={curRating} postId={id} />
      {props.isFullPost ? <PostComments postId={id} comments={props.comments} /> : ''}
    </div>
  )

  return (
    <>
      {props.isFullPost ? (
        <div className="post-item-wrapper">
          <Content />
        </div>
      ) : (
        <Content />
      )}
    </>
  )
}

export default PostItem
