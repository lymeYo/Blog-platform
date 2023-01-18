import React from "react"
import Router, { useRouter } from "next/router"
import { useSelector } from "react-redux"
import PostItem from "./postItem"
import {TpostResult} from "../../utils/api/types";

function PostsList(props: any) {
  const list = props.posts.map((post: TpostResult) => {
    return <PostItem comments={post.comments} post={post} isFullPost={false} />
  })
  
  return (
    <ul className="list">
      { list }
    </ul>
  )
}

export default PostsList
