import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Button from '@mui/material/Button'
import HouseIcon from '@mui/icons-material/Home'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import FingerprintIcon from '@mui/icons-material/Fingerprint'
import InputIcon from '@mui/icons-material/Input'
import InfoIcon from '@mui/icons-material/Info'
import GridViewIcon from '@mui/icons-material/GridView'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import GroupIcon from '@mui/icons-material/Group'

import CustomRouterLink from 'components/CustomRouterLink'

import styles from './styles'

const useStyles = makeStyles(styles)

const PAGES = [
  {
    title: 'home',
    href: '/home',
    useLink: false,
    icon: <HouseIcon />
  },
  {
    title: 'about',
    href: '#about',
    useLink: true,
    icon: <InfoIcon />
  },
  {
    title: 'bPs',
    href: '#bps',
    useLink: true,
    icon: <GridViewIcon />
  },
  {
    title: 'exchanges',
    href: '#exchanges',
    useLink: true,
    icon: <TrendingUpIcon />
  },
  {
    title: 'eosHolder',
    href: '#holders',
    useLink: true,
    icon: <GroupIcon />
  },
  {
    title: 'news',
    href: 'https://medium.com/@MyvoteEOS',
    useLink: false,
    icon: <NewspaperIcon />
  }
]

const DashboardSidebarContent = ({
  user,
  onLogout,
  onLogin,
  setOpenSidebar
}) => {
  const history = useHistory()
  const classes = useStyles()
  const { t } = useTranslation('translations')
  const [route, setRoute] = useState({ hash: null, path: '/' })

  useEffect(() => {
    setRoute({ hash: history.location.hash, path: history.location.pathname })

    return history.listen((location) => {
      setRoute({ hash: location.hash, path: location.pathname })
    })
  }, [history])

  return (
    <>
      <List className={classes.nav}>
        {PAGES.map((page) => (
          <ListItem className={classes.item} disableGutters key={page.title}>
            {page.useLink ? (
              <Link
                className={classes.button}
                underline="none"
                href={page.href}
                onClick={() => setOpenSidebar(false)}
              >
                <div
                  className={clsx(classes.noLinkBox, {
                    [classes.active]: page.href === route.hash
                  })}
                >
                  <div className={classes.icon}>{page.icon}</div>
                  {t(page.title)}
                </div>
              </Link>
            ) : (
              <Button
                activeClassName={clsx({
                  [classes.active]:
                    route.path === page.href && !route.hash?.length
                })}
                className={classes.button}
                component={CustomRouterLink}
                to={page.href}
                onClick={() => setOpenSidebar(false)}
              >
                <div className={classes.icon}>{page.icon}</div>
                {t(page.title)}
              </Button>
            )}
          </ListItem>
        ))}
        {!user && (
          <ListItem className={classes.item} disableGutters>
            <Button
              className={classes.button}
              color="inherit"
              onClick={() => {
                onLogin()
                setOpenSidebar(false)
              }}
            >
              <div className={classes.icon}>
                <FingerprintIcon />
              </div>
              {t('login')}
            </Button>
          </ListItem>
        )}
        {user && (
          <ListItem className={classes.item} disableGutters key="logoutOption">
            <Button
              className={classes.button}
              color="inherit"
              onClick={() => {
                setOpenSidebar(false)
                onLogout()
              }}
            >
              <div className={classes.icon}>
                <InputIcon />
              </div>
              {t('logout')}
            </Button>
          </ListItem>
        )}
      </List>
    </>
  )
}

DashboardSidebarContent.propTypes = {
  user: PropTypes.object,
  onLogout: PropTypes.func,
  onLogin: PropTypes.func,
  setOpenSidebar: PropTypes.func
}

export default DashboardSidebarContent
