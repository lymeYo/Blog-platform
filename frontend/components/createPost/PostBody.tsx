import React from "react"
import { useRouter } from "next/router"
import { TextField } from "@mui/material"


function Title(props: any) {
  const NONECLASS = "none"
  const NEARLYCLASS = "nearly"
  const STOPCLASS = "stop"
  const [maxLengthClass, changeMaxLengthClass] = React.useState(NONECLASS)
  const [wordsAmount, changeWordsAmount] = React.useState(0)
  const [curValue, setCurValue] = React.useState("")
  const nearlyTitleLength = 30
  const maxTitleLength = 50

  const inputChange = (event): any => {
    console.log(props.myRef)

    const inputValue: any = props.myRef?.current.value || "" //?подчеркивает value
    const valueLength = Number(inputValue.length)

    if (inputValue.split("").reverse()[0] == "\n") {
      return
    }

    if (valueLength >= maxTitleLength + 1) {
      maxLengthClass == STOPCLASS ? "" : changeMaxLengthClass(STOPCLASS)
      changeWordsAmount(curValue.length)
      return
    }

    if (maxLengthClass != NEARLYCLASS && valueLength < nearlyTitleLength) {
      maxLengthClass == NONECLASS ? "" : changeMaxLengthClass(NONECLASS)
    }

    if (valueLength > nearlyTitleLength && valueLength <= maxTitleLength) {
      maxLengthClass == NEARLYCLASS ? "" : changeMaxLengthClass(NEARLYCLASS)
    }

    setCurValue(inputValue)
    changeWordsAmount(valueLength)
  }

  return (
    <div className="text-title">
      <textarea
        value={curValue}
        cols={30}
        rows={3}
        ref={props.myRef}
        onChange={inputChange}
        placeholder="Заголовок"
      />
      <div className={maxLengthClass}>{maxTitleLength - wordsAmount}</div>
    </div>
  )
}

function TemporaryEditor(props: any) {

  return (
    <div>
      <TextField
        inputRef={props.myRefMui}
        id="outlined-multiline-flexible"
        label="Multiline"
        fullWidth
        multiline
      />
    </div>
  )
}

function PostBody(props: any) {
  return (
    <div className="text">
      <Title myRef={props.titleRef} />
      <TemporaryEditor myRefMui={props.textRefMui} />
    </div>
  )
}

export default PostBody
