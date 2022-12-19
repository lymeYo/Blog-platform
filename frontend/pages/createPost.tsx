import React from "react"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { v4 as uuidv4 } from "uuid"

import { setNewPost } from "../redux/reducers/posts/postsCreators"
import AccountParams from "../components/createPost/AccountParams"
import PostBody from "../components/createPost/PostBody"
import PostButtons from "../components/createPost/PostButtons"

function createPost(props: any) {
  const dispatch = useDispatch()
  const Router = useRouter()

  const { userId } = useSelector(({ login }: any) => ({
    userId: login.userId,
  }))

  const titleRef: any = React.createRef() //для обычного инпута
  const textRefMui: any = React.useRef() //для mui component

  const setEditorSaving = () => {
    const dataForPost = {
      title: titleRef.current.value,
      text: textRefMui.current.value,
      authorId: userId,
      postId: uuidv4(),
      rating: 0,
      comments: [],
    }
    dispatch(setNewPost(dataForPost))
    Router.push(`/`) //выходит на главную страницу
  }

  return (
    <div className="create-post">
      <div className="body">
        <AccountParams />
        <PostBody titleRef={titleRef} textRefMui={textRefMui} />
        <PostButtons setEditorSaving={setEditorSaving} />
      </div>
    </div>
  )
}

export default createPost