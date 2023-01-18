import React from "react"
import { Avatar, Paper } from "@mui/material"
import { useSelector } from "react-redux"

import AddCommentArea from "../universal/AddCommentArea"
import Comment from "./Comment"
import { PostIdContext } from "./postItem"
import {GetServerSideProps} from "next";

function CommentsList(props: any) {
  const postId = React.useContext(PostIdContext)
  const commentsList = props.comments.map((comment) => {

    return (
      <li>
        <Comment
          time={comment.createdAt}
          name={comment.user.username}
          text={comment.text}
          rating={comment.rating}
          id={comment.id}
          key={comment.id}
        />
      </li>
    )
  })
  return (
    <ul className="comments-list">
      { commentsList }
    </ul>
  )
}

function PostComments(props: any) {
  console.log(props)
  return (
    <div className="comments">
      <Paper variant="elevation" square>
        <AddCommentArea postId={props.postId} />
        <CommentsList comments={props.comments} />
      </Paper>
    </div>
  )
}

export default PostComments
