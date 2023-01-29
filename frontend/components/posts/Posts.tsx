import React from 'react'

import PostsList from './PostsList'

function Posts(props: any) {
  return (
    <div className="posts">
      <PostsList posts={props.posts} />
      <div className="comments">comments</div>
    </div>
  )
}

export default Posts
