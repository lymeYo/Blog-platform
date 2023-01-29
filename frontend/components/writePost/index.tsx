import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { GetServerSideProps } from 'next'

import { MyApi } from '../../utils/api'
import { setNewPost } from '../../redux/reducers/posts/postsCreators'
import AccountParams from './/AccountParams'
import PostBody from './/PostBody'
import PostButtons from './/PostButtons'
import { useAppDispatch, wrapper } from '../../redux/store'
import { TpostRequest } from '../../utils/api/types'

export type TcreatePost = {
  isEdit: boolean
  initialTitle?: string
  initialBody?: string
}

function WritePost(props: TcreatePost) {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const { userId } = useSelector(({ login }: any) => ({
    userId: login.id,
  }))

  const titleRef: any = React.createRef() //для обычного инпута
  const textRefMui: any = React.useRef() //для mui component

  const setEditorSaving = async () => {
    const dataForPost: TpostRequest = {
      title: titleRef.current.value,
      body: textRefMui.current.value,
      rating: 0,
    }
    // dispatch(setNewPost(dataForPost))

    props.isEdit
      ? await MyApi().post.update(dataForPost, router.query.id as string)
      : await MyApi().post.create(dataForPost)
    await router.push('/') //выходит на главную страницу
  }

  return (
    <div className="create-post">
      <div className="body">
        <AccountParams />
        <PostBody
          initialTitle={props.isEdit ? props.initialTitle : ''}
          initialBody={props.isEdit ? props.initialBody : ''}
          titleRef={titleRef}
          textRefMui={textRefMui}
        />
        <PostButtons setEditorSaving={setEditorSaving} />
      </div>
    </div>
  )
}

export default WritePost
