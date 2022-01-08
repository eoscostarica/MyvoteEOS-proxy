import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles, useTheme } from '@mui/styles'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import useMediaQuery from '@mui/material/useMediaQuery'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import styles from './styles'

const useStyles = makeStyles(styles)

const Main = ({
  children,
  sidebarContent,
  topbarContent,
  openSidebar,
  setOpenSidebar
}) => {
  const classes = useStyles()
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  })

  return (
    <Container
      component="main"
      maxWidth="xl"
      className={clsx({
        [classes.root]: true
      })}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => setOpenSidebar(!openSidebar)}
            className={classes.drawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <RouterLink to="/">
            <img
              className={classes.logo}
              alt="Logo"
              src="/images/logo-dark.png"
            />
          </RouterLink>
          {topbarContent}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
        onClose={() => setOpenSidebar(false)}
        open={openSidebar}
        variant="temporary"
        className={clsx({
          [classes.drawer]: true,
          [classes.drawerDesktop]: isDesktop && openSidebar
        })}
      >
        <div className={classes.drawerContent}>{sidebarContent}</div>
      </Drawer>
      {children}
    </Container>
  )
}

Main.propTypes = {
  children: PropTypes.node,
  sidebarContent: PropTypes.node,
  topbarContent: PropTypes.node,
  openSidebar: PropTypes.bool,
  setOpenSidebar: PropTypes.func
}

Main.defaultProps = {
  openSidebar: false,
  setOpenSidebar: () => {}
}

export default Main
