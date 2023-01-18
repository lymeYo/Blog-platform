import Router from "next/router"
import AddIcon from "@mui/icons-material/Add"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import IosShareIcon from "@mui/icons-material/IosShare"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import { Button, IconButton } from "@mui/material"
import PostComments from "./PostComments"
import StatisticsButtons from "../universal/StatisticsButtons"
import { useDispatch, useSelector } from "react-redux"
import { postRatingRender } from "../../redux/reducers/posts/postsCreators"
import React from "react"


export const PostIdContext = React.createContext('')


function InfoButtons(props: any) {
  return (
    <div className="buttons">
      <div className="subscribe">
        <IconButton>
          <AddIcon />
        </IconButton>
      </div>
      <div className="parametrs">
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </div>
    </div>
  )
}

function PostInfo(props: any) {
  const { userName, avatarSrc } = useSelector(({ login }: any) => ({
    userName: login.name ,
    avatarSrc: login.avatarSrc,
  }))
  
  return (
    <div className="info">
      <div className="info-row">
        <div className="category">Игры</div>
        <div className="avatar">
          <img src={avatarSrc} alt="" />
        </div>
        <div className="username">{ userName }</div>
        <div className="timepost">2 часа</div>
      </div>
      <InfoButtons />
    </div>
  )
}

function PostContent(props: any) {
  let text: string = props.text

  if (!props.isFullPost) { // урезаю количество слов, не обрезая слово поплам, если пост не открыт 
    console.log(text);
    
    let maxPreviewTextLength = 20
    text = text.substring(0, maxPreviewTextLength)
    
    while (text[text.length - 1] != " " && maxPreviewTextLength > 0) {
      maxPreviewTextLength--
      text = text.substring(0, maxPreviewTextLength)
    }

    text += '...'
  }
  
  return (
    <div className="content">
      { text }
    </div>
  )
}

function PostBody(props: any) {
  const { title, text } = useSelector(({ posts }: any) => ({
    title: posts.getPostById(props.postId).title,
    text: posts.getPostById(props.postId).text,
  }))
  
  console.log(title);
  

  return (
    <div onClick={props.openPost} className="body">
      <div className="title">{title}</div>
      <PostContent text={text} isFullPost={props.isFullPost} />
      {/* <div className="image">
        <img
          src="https://leonardo.osnova.io/9df8fe85-93b5-592c-a3b2-641e4fc752b0/"
          alt=""
        />
      </div> */}
    </div>
  )
}

function ButtonsRow(props: any) {
  return (
    <div className="row">
      <div className="row-comments">
        <IconButton>
          <ChatBubbleOutlineIcon />
        </IconButton>
      </div>
      <div className="row-share">
        <IconButton>
          <IosShareIcon />
        </IconButton>
      </div>
      <div className="row-bookmark">
        <IconButton>
          <BookmarkBorderIcon />
        </IconButton>
      </div>
    </div>
  )
}

function PostButtons(props: any) {
  const dispatch = useDispatch()
  const { postRating } = useSelector(({ posts }: any) => ({
    postRating: posts.getPostById(props.postId).rating,
  }))
  
  const upClickFunction = () => {
    dispatch(postRatingRender(true, props.postId))
  }
  const downClickFunction = () => {
    dispatch(postRatingRender(false, props.postId))
  }

  return (
    <div className="buttons">
      <ButtonsRow />
      <StatisticsButtons
        rating={postRating}
        downClick={downClickFunction}
        upClick={upClickFunction}
      />
    </div>
  )
}


export default function PostItem(props: any) {
  const { isFullPost, postId } = props

  const openPost = () => {
    Router.push(`/post/${postId}`)
  }

  let Content = (
    <div className="post-item">
      <PostInfo />
      <PostBody openPost={openPost} postId={postId} isFullPost={isFullPost} />
      <PostButtons postId={postId} />
      {isFullPost ? <PostComments /> : ""}
    </div>
  )

  if (isFullPost) Content = <div className="post-item-wrapper">{Content}</div>

  return (
    <>
      <PostIdContext.Provider value={postId}>
        {" "}
        {Content}{" "}
      </PostIdContext.Provider>
    </>
  )
}