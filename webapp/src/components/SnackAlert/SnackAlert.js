import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const SnackAlert = ({
  openSnack,
  handleClose,
  severity,
  children,
  classes
}) => {
  const style =
    severity === 'success'
      ? { width: '100%', backgroundColor: 'rgb(56, 142, 60)' }
      : { width: '100%' }
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={openSnack}
      onClose={handleClose}
      classes={classes}
    >
      <Alert onClose={handleClose} severity={severity} sx={style}>
        {children}
      </Alert>
    </Snackbar>
  )
}

SnackAlert.propTypes = {
  classes: PropTypes.any,
  children: PropTypes.any,
  severity: PropTypes.string,
  handleClose: PropTypes.func,
  openSnack: PropTypes.bool
}

SnackAlert.defaultProps = {
  classes: {},
  children: null,
  severity: 'warning',
  handleClose: () => {},
  openSnack: false
}

export default SnackAlert
