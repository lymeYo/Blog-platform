import React from "react"
import { Avatar, Paper } from "@mui/material"
import { useSelector } from "react-redux"

import AddCommentArea from "../universal/AddCommentArea"
import Comment from "./Comment"
import { PostIdContext } from "./PostItem"

function CommentsList(props: any) {
  // const text =
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, placeat? Blanditiis modi fuga fugiat atque esse unde cupiditate nobis omnis."
  const postId = React.useContext(PostIdContext)
  
  
  const { commentsDataList } = useSelector(({ posts }) => ({
    commentsDataList: posts.getPostById(postId).comments,
  }))
  const commentsList = commentsDataList.map((comment) => {
    
    return (
      <li>
        <Comment
          time={comment.publishTime}
          name={"#NAME"}
          text={comment.text}
          rating={comment.rating}
          commentId={comment.id}
          postId={postId}
          key={postId}
        />
      </li>
    )
  })
  return (
    <ul className="comments-list">
      { commentsList }
      {/* <li>
        <Comment
          time={"2 часа"}
          name={"Ramil Javadi"}
          text={text}
          rate={12345}
        />
      </li>
      <li>
        <Comment
          time={"2 часа"}
          name={"Ramil Javadi"}
          text={text}
          rate={12345}
        />
      </li>
      <li>
        <Comment
          time={"2 часа"}
          name={"Ramil Javadi"}
          text={text}
          rate={12345}
        />
      </li>
      <li>
        <Comment
          time={"2 часа"}
          name={"Ramil Javadi"}
          text={text}
          rate={12345}
        />
      </li> */}
    </ul>
  )
}

function PostComments(props: any) {
  return (
    <div className="comments">
      <Paper variant="elevation" square>
        <AddCommentArea />
        <CommentsList />
      </Paper>
    </div>
  )
}

export default PostComments
