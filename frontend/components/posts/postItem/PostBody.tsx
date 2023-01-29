import { useSelector } from 'react-redux'
import React from 'react'

function PostContent(props: any) {
  let text: string = props.text

  if (!props.isFullPost) {
    // урезаю количество слов, не обрезая слово поплам, если пост не открыт
    let maxPreviewTextLength = 20
    text = text.substring(0, maxPreviewTextLength)

    while (text[text.length - 1] != ' ' && maxPreviewTextLength > 0) {
      maxPreviewTextLength--
      text = text.substring(0, maxPreviewTextLength)
    }

    text += '...'
  }

  return <div className="content">{text}</div>
}

function PostBody(props: any) {
  return (
    <div onClick={props.openPost} className="body">
      <div className="title">{props.title}</div>
      <PostContent text={props.body} isFullPost={props.isFullPost} />
      {/* <div className="image">
        <img
          src="https://leonardo.osnova.io/9df8fe85-93b5-592c-a3b2-641e4fc752b0/"
          alt=""
        />
      </div> */}
    </div>
  )
}

export default PostBody
