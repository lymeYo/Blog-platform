import React from "react"
import Router, { useRouter } from "next/router"
import { useSelector } from "react-redux"
import PostItem from "./PostItem"

function PostsList(props: any) {
  const { postsList } = useSelector(({ posts }: any) => ({
    postsList: posts.postsList,
  }))

  const list = postsList.map((postData) => {
    return (
      <PostItem postId={postData.postId} isFullPost={false} />
    )
  })
  
  return (
    <ul className="list">
      { list }
      {/* <PostItem isFullPost={false} />
      <PostItem isFullPost={false} />
      <PostItem isFullPost={false} /> */}
    </ul>
  )
}

export default PostsList
