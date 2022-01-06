import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import useMediaQuery from '@mui/material/useMediaQuery'
import { makeStyles, useTheme } from '@mui/styles'
import { useLocation } from 'react-router-dom'
import { Backdrop } from '@eoscostarica/eoscr-components'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

import BackLayer from '../BackLayer'
import FrontLayer from '../FrontLayer'
import styles from '../styles'

const STATIC_PAGES = ['/product']

const useStyles = makeStyles(styles)

const MainPageBackdrop = ({ ual }) => {
  const { t, i18n } = useTranslation('translations')
  const theme = useTheme()
  const classes = useStyles()
  const location = useLocation()
  const [title, setTitle] = useState('headerTitle')
  const [layerHeightUp, setLayerHeightUp] = useState(51)
  const [isStaticPage, setIsStaticPage] = useState(false)
  const [message, setMessage] = useState()
  const isLandscape = useMediaQuery('(orientation: landscape)')
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true
  })

  const height = window.innerHeight

  useEffect(() => {
    if (STATIC_PAGES.includes(location.pathname)) {
      setLayerHeightUp(isLandscape && height < 450 ? 150 : 270)
      setTitle('')
      setIsStaticPage(true)

      return
    }

    setIsStaticPage(false)

    if (isMobile) {
      setTitle('headerTitle')
      setLayerHeightUp(60)

      return
    }

    setLayerHeightUp(isLandscape && height < 450 ? 80 : 470)
    setTitle('headerTitle')
  }, [isMobile, location.pathname, isLandscape, height])

  useEffect(() => {
    if (STATIC_PAGES.includes(location.pathname)) {
      setTitle('')
    } else {
      setTitle('headerTitle')
    }
  }, [i18n.language, location.pathname])

  return (
    <Backdrop
      className={classes.backdrop}
      classes={{
        frontLayer: classes.frontLayerRoot,
        root: classes.root,
        backLayer: classes.backLayer,
        headerBox:
          isStaticPage || isMobile || (isLandscape && height < 450)
            ? classes.headerBox
            : classes.headerBoxNone
      }}
      backLayer={
        <>
          <BackLayer
            ual={ual}
            pathname={location.pathname}
            showMessage={setMessage}
          />
          <Snackbar
            open={!!message}
            autoHideDuration={30000}
            onClose={() => setMessage(null)}
          >
            <Alert
              onClose={() => setMessage(null)}
              severity={message?.type}
              className={classes?.alert}
            >
              {message?.content}
            </Alert>
          </Snackbar>
        </>
      }
      frontLayer={<FrontLayer />}
      headerText={
        <Typography className={classes.labelBackdrop}>{t(title)}</Typography>
      }
      layerHeightUp={layerHeightUp}
      isStaticPage={isStaticPage}
    />
  )
}

MainPageBackdrop.propTypes = {
  ual: PropTypes.object
}

MainPageBackdrop.defaultProps = {
  ual: {}
}

export default MainPageBackdrop
