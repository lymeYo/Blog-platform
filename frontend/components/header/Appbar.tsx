//@ts-nocheck
//!ругается на color='header в параметрах AppBar

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { TextField } from '@mui/material'

import React, { useState } from 'react'

import SearchArea from './SearchArea'
import CreateButton from './CreateButton'
import NavArea from './NavArea'

export const InputFocusContext = React.createContext(null)

function Appbar(props: any) {
  const renderDrawerOpen = props.renderDrawerOpen
  const [isInputFocus, setInputFocus] = useState(false)

  const handleInputFocus = (isFocus: boolean) => {
    setInputFocus(isFocus)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="header" position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={renderDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <SearchArea
            isInputFocus={isInputFocus}
            setInputFocus={handleInputFocus}
          />

          <InputFocusContext.Provider value={isInputFocus}>
            <NavArea isInputFocus={isInputFocus} />
          </InputFocusContext.Provider>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Appbar
