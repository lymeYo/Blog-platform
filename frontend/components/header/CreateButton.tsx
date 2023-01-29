import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { useRouter } from 'next/router'

function CreateButton(props: any) {
  const router = useRouter()

  const renderCreatePost = async () => {
    await router.push('/write')
  }

  return (
    <div className="create-button">
      <div onClick={renderCreatePost} className="body">
        <div className="icon">
          <AddIcon />
        </div>
        <div className="text">Создать</div>
      </div>
    </div>
  )
}

export default CreateButton
