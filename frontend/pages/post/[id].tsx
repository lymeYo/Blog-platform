import React from 'react'

import {GetServerSideProps} from "next";
import {MyApi} from "../../utils/api";
import {TcommentResult, TpostResult} from "../../utils/api/types";
import PostItem from "../../components/posts/postItem";


interface FullPostProps {
  post: TpostResult,
  comments: TcommentResult
}
function FullPost (props: FullPostProps) {

  return (
    <PostItem comments={props.comments} post={props.post} isFullPost={true} />
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const post = await MyApi(ctx).post.getPostById(ctx.query.id as string)
  const comments = post.comments
  if (!post) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
  return {
    props: {
      post,
      comments,
    }
  }
}

export default FullPost