import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import LogoutIcon from '@mui/icons-material/ExitToApp'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LanguageSelector from 'components/LanguageSelector'

import styles from './styles'

const useStyles = makeStyles(styles)

const DashboardTopbar = ({ user, onLogout, onLogin }) => {
  const classes = useStyles()

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
        <Button
          color="inherit"
          variant="outlined"
          onClick={onLogin}
          className={classes.loginBtn}
        >
          <Typography className={classes.sessionText} variant="subtitle1">
            login
          </Typography>
        </Button>
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
