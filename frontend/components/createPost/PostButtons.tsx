import { Button } from "@mui/material"
import React from "react"

function PostButtons(props: any) {
  let publishingPost = () => {
    props.setEditorSaving(true)
  }

  return (
    <div className="buttons">
      <Button onClick={publishingPost} variant="contained">
        Опубликовать
      </Button>
    </div>
  )
}


export default PostButtons