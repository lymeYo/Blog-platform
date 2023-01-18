import React from 'react'

import Router, { useRouter } from 'next/router'
import PostItem from '../../components/posts/PostItem'


function FullPost (props: any) {
  const router = useRouter()
  const postId = router.query.id  
  console.log(router)
  
  return (
    <PostItem postId={postId} isFullPost={true} />
  )
}

export default FullPost