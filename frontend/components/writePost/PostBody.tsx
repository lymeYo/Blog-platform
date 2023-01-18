import React, {useState} from "react"
import { useRouter } from "next/router"
import { TextField } from "@mui/material"


function Title(props: any) {
  const NONECLASS = "none"
  const NEARLYCLASS = "nearly"
  const STOPCLASS = "stop"
  const [maxLengthClass, changeMaxLengthClass] = React.useState(NONECLASS)
  const [wordsAmount, changeWordsAmount] = React.useState(0)
  const nearlyTitleLength = 30
  const maxTitleLength = 50

  const inputChange = (event): any => {
    const inputValue: any = props.myRef?.current.value || "" //?подчеркивает value
    const valueLength = Number(inputValue.length)

    if (inputValue.split("").reverse()[0] == "\n") {
      return
    }

    if (valueLength >= maxTitleLength + 1) {
      maxLengthClass == STOPCLASS ? "" : changeMaxLengthClass(STOPCLASS)
      changeWordsAmount(props.value.length)
      return
    }

    if (maxLengthClass != NEARLYCLASS && valueLength < nearlyTitleLength) {
      maxLengthClass == NONECLASS ? "" : changeMaxLengthClass(NONECLASS)
    }

    if (valueLength > nearlyTitleLength && valueLength <= maxTitleLength) {
      maxLengthClass == NEARLYCLASS ? "" : changeMaxLengthClass(NEARLYCLASS)
    }

    props.setValue(inputValue)
    changeWordsAmount(valueLength)
  }

  return (
    <div className="text-title">
      <textarea
        style={{textAlign: 'center'}}
        value={props.value}
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
  const handleChange = () => {
    props.setValue(props.myRefMui.current.value)
  }

  return (
    <div>
      <TextField
        inputRef={props.myRefMui}
        value={props.value}
        onChange={handleChange}
        id="outlined-multiline-flexible"
        label="Multiline"
        fullWidth
        multiline
      />
    </div>
  )
}

function PostBody(props: any) {
  const [titleValue, setTitleValue] = useState(props.initialTitle)
  const [bodyValue, setBodyValue] = useState(props.initialBody)

  return (
    <div className="text">
      <Title value={titleValue} setValue={setTitleValue} myRef={props.titleRef} />
      <TemporaryEditor value={bodyValue} setValue={setBodyValue} myRefMui={props.textRefMui} />
    </div>
  )
}

export default PostBody
