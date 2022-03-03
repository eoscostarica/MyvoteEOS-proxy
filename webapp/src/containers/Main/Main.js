import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import Link from '@mui/material/Link'
import { makeStyles, useTheme } from '@mui/styles'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import useMediaQuery from '@mui/material/useMediaQuery'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import Message from '../../components/Message'

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
  const history = useHistory()
  const { t } = useTranslation('translations')
  const [route, setRoute] = useState({ hash: null, path: '/' })
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  })

  useEffect(() => {
    setRoute({ hash: history.location.hash, path: history.location.pathname })

    return history.listen((location) => {
      setRoute({ hash: location.hash, path: location.pathname })
    })
  }, [history])

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
            <div className="logoName">
              <IconButton
                color="inherit"
                onClick={() => setOpenSidebar(!openSidebar)}
                className={classes.drawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <RouterLink className={classes.sof} to="/home">
                {t('myVoteEos')}
              </RouterLink>
            </div>

            <div className="menuDesktop">
              <RouterLink
                className={clsx(classes.menuLink, {
                  [classes.active]:
                    route.path === '/home' && !route.hash?.length,
                  [classes.noActive]:
                    route.path !== '/home' || route.hash?.length
                })}
                to="/home"
              >
                {t('home')}
              </RouterLink>
              <Link
                className={clsx(classes.menuLink, {
                  [classes.active]: route.hash === '#about',
                  [classes.noActive]: route.hash !== '#about'
                })}
                underline="none"
                href="#about"
              >
                {t('about')}
              </Link>
              <Link
                className={clsx(classes.menuLink, {
                  [classes.active]: route.hash === '#bps',
                  [classes.noActive]: route.hash !== '#bps'
                })}
                underline="none"
                href="#bps"
              >
                {t('bPs')}
              </Link>
              <Link
                className={clsx(classes.menuLink, {
                  [classes.active]: route.hash === '#exchanges',
                  [classes.noActive]: route.hash !== '#exchanges'
                })}
                underline="none"
                href="#exchanges"
              >
                {t('exchanges')}
              </Link>
              <Link
                className={clsx(classes.menuLink, {
                  [classes.active]: route.hash === '#holders',
                  [classes.noActive]: route.hash !== '#holders'
                })}
                underline="none"
                href="#holders"
              >
                {t('eosHolder')}
              </Link>
              <Link
                className={clsx(classes.menuLink, {
                  [classes.active]:
                    route.hash === 'https://medium.com/@MyvoteEOS',
                  [classes.noActive]:
                    route.hash !== 'https://medium.com/@MyvoteEOS'
                })}
                underline="none"
                href="https://medium.com/@MyvoteEOS"
                target="_blank"
              >
                {t('news')}
              </Link>
            </div>
            <div>{topbarContent}</div>
          </Toolbar>
        </AppBar>
        <Message />
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
      <div className={classes.footerBox}>
        <div className={classes.footer}>
          <div className={classes.footerLogo}>
            <span className={classes.noVote}>{t('myVoteEos')}</span>
            <img alt="Logo" src="/images/logo-dark.png" />
          </div>
          <div className={classes.socialWrapper}>
            <div>
              <span className={classes.socialTitle}>{t('quicklinks')}</span>
              <Link
                href="#"
                underline="none"
                className={clsx(classes.menuLink, classes.menuLinkFooter)}
              >
                {t('home')}
              </Link>
              <Link
                href="#bps"
                underline="none"
                className={clsx(classes.menuLink, classes.menuLinkFooter)}
              >
                {t('bPs')}
              </Link>
              <Link
                href="#exchanges"
                underline="none"
                className={clsx(classes.menuLink, classes.menuLinkFooter)}
              >
                {t('exchanges')}
              </Link>
              <Link
                href="#holders"
                underline="none"
                className={clsx(classes.menuLink, classes.menuLinkFooter)}
              >
                {t('eosHolder')}
              </Link>
              <a
                href="https://medium.com/@MyvoteEOS"
                target="_blank"
                className={clsx(classes.menuLink, classes.menuLinkFooter)}
                rel="noopener noreferrer"
              >
                {t('news')}
              </a>
            </div>

            <div>
              <span className={classes.socialTitle}>{t('social')}</span>
              <a
                href="https://medium.com/@MyvoteEOS"
                target="_blank"
                className={clsx(classes.menuLink, classes.menuLinkFooter)}
                rel="noopener noreferrer"
              >
                {t('blog')}
              </a>
              <a
                href="https://twitter.com/MyvoteEOS"
                target="_blank"
                className={clsx(classes.menuLink, classes.menuLinkFooter)}
                rel="noopener noreferrer"
              >
                {t('twitter')}
              </a>
              <a
                href="https://discord.gg/EuZS6wbPWt"
                target="_blank"
                className={clsx(classes.menuLink, classes.menuLinkFooter)}
                rel="noopener noreferrer"
              >
                {t('discord')}
              </a>
              <a
                href="https://github.com/eoscostarica/MyvoteEOS-proxy"
                target="_blank"
                className={clsx(classes.menuLink, classes.menuLinkFooter)}
                rel="noopener noreferrer"
              >
                {t('github')}
              </a>
            </div>

            <div>
              <span className={classes.socialTitle}>{t('assets')}</span>
              <a
                href="https://docs.google.com/document/d/1-dtaq09xMlxctpZ-1vvrBnFLkiLd4hXmozPvf7jsuqA/edit#"
                target="_blank"
                className={clsx(classes.menuLink, classes.menuLinkFooter)}
                rel="noopener noreferrer"
              >
                {t('litepaper')}
              </a>
              <a
                href="#"
                target="_blank"
                className={clsx(classes.menuLink, classes.menuLinkFooter)}
                rel="noopener noreferrer"
              >
                {t('deck')}
              </a>
            </div>
          </div>
        </div>
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
