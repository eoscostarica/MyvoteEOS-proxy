import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import IconButton from '@mui/material/IconButton'
import { useTranslation } from 'react-i18next'
import FingerprintIcon from '@mui/icons-material/Fingerprint'
import LogoutIcon from '@mui/icons-material/ExitToApp'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import LanguageSelector from 'components/LanguageSelector'

import styles from './styles'

const useStyles = makeStyles(styles)

const DashboardTopbar = ({ user, onLogout, onLogin }) => {
  const classes = useStyles()
  const { t } = useTranslation('translations')

  return (
    <Box className={classes.box}>
      <LanguageSelector />
      {user && (
        <Box>
          <IconButton color="inherit">
            <AccountCircleIcon />
            <Typography className={classes.sessionText} variant="subtitle1">
              {user.accountName}
            </Typography>
          </IconButton>
          <IconButton color="inherit" onClick={onLogout}>
            <LogoutIcon />
          </IconButton>
        </Box>
      )}
      {!user && (
        <IconButton color="inherit" onClick={onLogin}>
          <FingerprintIcon />
          <Typography className={classes.sessionText} variant="subtitle1">
            {t('login')}
          </Typography>
        </IconButton>
      )}
    </Box>
  )
}

DashboardTopbar.propTypes = {
  user: PropTypes.object,
  onLogout: PropTypes.func,
  onLogin: PropTypes.func
}

export default DashboardTopbar
