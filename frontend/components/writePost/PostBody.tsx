import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { TextField } from '@mui/material'

function Title(props: any) {
  const classes = {
    none: 'none',
    nearly: 'nearly',
    stop: 'stop'
  }
  const [titleClass, setTitleClass] = React.useState(classes.none)
  const nearlyLength = 30
  const maxLength = 50

  const inputChange = () => {
    const inputValue: string = props.myRef?.current.value || '' //подчеркивает value
    const length = Number(inputValue.length)

    if (inputValue.split('').reverse()[0] == '\n') return

    if (length > nearlyLength && length < maxLength) {
      if (titleClass != classes.nearly) setTitleClass(classes.nearly)
    }

    if (length > maxLength) {
      if (titleClass != classes.stop) setTitleClass(classes.stop)
      return
    }

    if (length < nearlyLength) {
      if (titleClass != classes.none) setTitleClass(classes.none)
    }

    props.setValue(inputValue)
  }

  return (
    <div className="text-title">
      <textarea
        style={{ textAlign: 'center' }}
        value={props.value}
        cols={30}
        rows={3}
        ref={props.myRef}
        onChange={inputChange}
        placeholder="Заголовок"
      />
      <div className={titleClass}>{maxLength - props.value.length}</div>
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
