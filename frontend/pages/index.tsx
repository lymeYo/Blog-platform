import React from 'react';
import { useRouter } from 'next/router'

import Posts from '../components/posts/Posts';
import { MyApi } from '../utils/api';



function HomePage(props) {
  const router = useRouter()
  console.log(props.postsData)
  return (
    <>
      <Posts posts={props.postsData} />
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const postsData = await MyApi().post.getAll()
  
  return {
    props: {
      postsData,
    },
  }
}

export default HomePage