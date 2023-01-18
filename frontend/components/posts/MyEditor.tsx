import React from "react";

//подключил библиотеку editor
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from "@editorjs/list"
import ImageTool from "@editorjs/image"
import SimpleImage from "@editorjs/simple-image"

function MyEditorInner(props: any) {

  async function editorRender(isSaving): Promise<any> {
    const editor = new EditorJS({
      holder: "editorjs",
      tools: {},
    })

    await editor.isReady

    if (isSaving) { 
      const data = await editor.save()
    }

    return editor
  }

  React.useEffect(() => {editorRender(props.isEditorSaving)})
  
  return (
    <div id="editorjs"></div>
  )
}



export function MyEditor(props: any) {
  // if (props.isEditorSaving) editorSaving()

  return (
    <></>
    )
  }
  
  // <EditorSavingContext.Consumer>
    {/* {(value) => <TemporaryEditor isSaving={value} />} */}
  {/* </EditorSavingContext.Consumer> */}
  //   {(value) => <MyEditorInner isEditorSaving={value} />}