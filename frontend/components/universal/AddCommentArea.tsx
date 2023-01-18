import React from "react"
import { Button, IconButton } from "@mui/material"
import CollectionsIcon from "@mui/icons-material/Collections"

import {TcommentRequest} from "../../utils/api/types";
import {MyApi} from "../../utils/api";

function AddCommentInput(props: any) {
  const inputRef: any = React.createRef()
  const handleChange = () => {
    props.setCommentText(inputRef.current.value)
  }
  
  return (
    <div>
      <input value={props.value} ref={inputRef} onChange={handleChange} type="text" />
    </div>
  )
}

function AddCommentButtons(props: any) {
  const handlePublish = () => {
    props.uploadComment()
  }
  
  
  return (
    <div style={{ visibility: props.isVisible? "visible" : "hidden" }} className="add-comment-buttons">
      <div className="icons">
        <IconButton>
          <CollectionsIcon />
        </IconButton>
      </div>
      <div onClick={handlePublish} className="published-btn">
        <Button>Опубликовать</Button>
      </div>
    </div>
  )
}

function AddCommentArea(props: any) {
  const [isButtonsVisible, setButtonsVisible] = React.useState(false)
  React.useEffect(() => {
    const clickHandler = (event: any) => {
      if (
        event.target &&
        !event.target.closest(".add-comment-area") &&
        !event.target.classList.contains("add-comment-area")
      ) {
        setButtonsVisible(false)
      } else {
        setButtonsVisible(true)
      }
    }
    document.addEventListener("click", clickHandler)

    return () => {document.removeEventListener("click", clickHandler)}
  }, []) //закрытие блока с комментариями по нажатию (не стал использовать mui оболочку)

  const [commentText, setCommentText] = React.useState("")

  const uploadComment = async () => {
    const data: TcommentRequest = {
      postId: props.postId,
      text: commentText,
      rating: 0,
    }
    await MyApi().comment.create(data)
    setCommentText("")
  }

  return (
    <div className="add-comment-area">
      <AddCommentInput value={commentText} setCommentText={setCommentText} />

      <AddCommentButtons
        uploadComment={uploadComment}
        isVisible={isButtonsVisible}
      />
    </div>
  )
}

/* function AddCommentArea(props: any) {
  const dispatch = useDispatch()
  const postId: string = React.useContext(PostIdContext)

  const [isButtonsVisible, setButtonsVisible] = React.useState(false)
  const { authorId } = useSelector(({ login }: any) => ({
    authorId: login.userId,
  }))

  React.useEffect(() => {
    const clickHandler = (event: any) => {
      if (
        event.target &&
        !event.target.closest(".add-comment-area") &&
        !event.target.classList.contains("add-comment-area")
      ) {
        setButtonsVisible(false)
      } else {
        setButtonsVisible(true)
      }
    }
    document.addEventListener("click", clickHandler)

    return () => {document.removeEventListener("click", clickHandler)}
  }, [])

  const [commentText, setCommentText] = React.useState("")

  const uploadComment = () => {
    const commentFullTime = (new Date()).toString().split(" ")
    const commentTime =
      commentFullTime[1] + " "
      + commentFullTime[2] + " "
      + commentFullTime[3] + " " + commentFullTime[4].substring(0, 5) //беру строку даты и беру нужные элементы
    const commentData: postCommentInterface = {
      authorId: authorId,
      id: uuidv4(),
      text: commentText,
      rating: 0,
      publishTime: commentTime,
      isAnswer: false,
      answeredCommentId: "",
    }

    dispatch(publishComment(commentData, postId))
    setCommentText("")
  }

  return (
    <div className="add-comment-area">
      <AddCommentInput value={commentText} setCommentText={setCommentText} />

      <AddCommentButtons
        uploadComment={uploadComment}
        isVisible={isButtonsVisible}
      />
    </div>
  )
} */

export default AddCommentArea