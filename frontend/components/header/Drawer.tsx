import React from 'react'
import DrawerMui from '@mui/material/Drawer'
import SearchIcon from '@mui/icons-material/Search'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { useRouter } from 'next/router'

interface methodInteface {
  (): void
}

interface RoutingMethodsInterface {
  routePopular: methodInteface
}

function DrawerList(props: any) {
  const router = useRouter()

  const RoutingMethods: RoutingMethodsInterface = {
    routePopular: () => {
      router.push('/')
    },
  }

  const itemButtonClick = (methodForRoute) => {
    methodForRoute()
    props.drawerClose()
  }

  const getListItem = (
    text: string,
    iconForText: ReactJSXElement,
    routeMethod: methodInteface
  ) => (
    <div className="drawer-list-item" key={text}>
      <ListItem
        sx={{
          margin: '0 10px',
        }}
      >
        <ListItemButton onClick={() => itemButtonClick(routeMethod)}>
          <ListItemIcon>{iconForText}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </div>
  )

  return (
    <List
      sx={{
        padding: '0 20px 0 0',
      }}
      className="drawer-list"
    >
      {getListItem('Популярное', <WhatshotIcon />, RoutingMethods.routePopular)}
      {getListItem('Свежее', <AccessTimeIcon />, RoutingMethods.routePopular)}
      {getListItem('Моя лента', <AnalyticsIcon />, RoutingMethods.routePopular)}
      {getListItem('Закладки', <BookmarkIcon />, RoutingMethods.routePopular)}
    </List>
  )
}

function Drawer(props: any) {
  const isDrawerOpen = props.isDrawerOpen
  const renderDrawerOpen = props.renderDrawerOpen
  const toggleDrawer = () => {
    console.log('toggle drawer process')
  }

  return (
    <div className="drawer">
      <DrawerMui
        variant="temporary"
        anchor={'left'}
        open={isDrawerOpen}
        onClose={renderDrawerOpen}
      >
        <DrawerList drawerClose={renderDrawerOpen} />
      </DrawerMui>
    </div>
  )
}

export default Drawer
