import React from 'react'

import { GetServerSideProps } from 'next'

import WritePost from '../../components/writePost'
import { MyApi } from '../../utils/api'

function EditPost(props: any) {
  return (
    <WritePost
      initialBody={props.initialBody}
      initialTitle={props.initialTitle}
      isEdit={true}
    /> //<WritePost isEdit={false} />
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query
  const { title, body } = await MyApi(ctx).post.getPostById(id as string)

  const user = await MyApi(ctx).user.getProfile()
  const post = await MyApi(ctx).post.getPostById(id as string)

  if (user.id != post.user.id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      initialTitle: title,
      initialBody: body,
    },
  }
}

export default EditPost
