import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation('translations')
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  })

  return (
    <Container
      component="main"
      className={clsx({
        [classes.root]: true
      })}
    >
      <div>
        <AppBar className={classes.appBar} position="static">
          <Toolbar className={classes.toolbar}>
            <div>
              <IconButton
                color="inherit"
                onClick={() => setOpenSidebar(!openSidebar)}
                className={classes.drawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <RouterLink className={classes.sof} to="/">
                Soul of EOS Proxy
              </RouterLink>
            </div>

            <div>
              <RouterLink className={classes.menuLink} to="/">
                {t('home')}
              </RouterLink>
              <RouterLink className={classes.menuLink} to="/">
                {t('about')}
              </RouterLink>
              <RouterLink className={classes.menuLink} to="/">
                {t('bPs')}
              </RouterLink>
              <RouterLink className={classes.menuLink} to="/">
                {t('exchanges')}
              </RouterLink>
              <RouterLink className={classes.menuLink} to="/">
                {t('eosHolder')}
              </RouterLink>
              <RouterLink className={classes.menuLink} to="/">
                {t('news')}
              </RouterLink>
            </div>
            <div>{topbarContent}</div>
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
      </div>
      <div className={classes.footer}>
        <span className={classes.titleFooter}>{t('joinCommunity')}</span>
        <div className={classes.iconWrapper}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              className={classes.socialIcons}
              alt="Logo"
              src="/images/discord.svg"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              className={classes.socialIcons}
              alt="Logo"
              src="/images/twitter.svg"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              className={classes.socialIcons}
              alt="Logo"
              src="/images/telegram.svg"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              className={classes.socialIcons}
              alt="Logo"
              src="/images/message.svg"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              className={classes.socialIcons}
              alt="Logo"
              src="/images/medium.svg"
            />
          </a>
        </div>
        <span className={classes.titleFooter}>{t('copyRight')}</span>
      </div>
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
