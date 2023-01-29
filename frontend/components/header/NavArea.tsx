import { Button } from '@mui/material'
import React, { useContext } from 'react'

import { InputFocusContext } from './Appbar'
import CreateButton from './CreateButton'
import LoginArea from './login_area/LoginArea'

function NavArea(props: any) {
  const isInputFocus = useContext(InputFocusContext)

  return (
    <div className={`nav-area ${isInputFocus ? 'invisible' : ''}`}>
      <CreateButton />
      <LoginArea />
    </div>
  )
}

export default NavArea
