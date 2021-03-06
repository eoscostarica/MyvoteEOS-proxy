import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

import { useSharedState } from '../../context/state.context'

import styles from './styles'

const useStyles = makeStyles(styles)

const Message = () => {
  const [open, setOpen] = useState(false)
  const [{ message }, { hideMessage }] = useSharedState()
  const classes = useStyles()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
    hideMessage()
  }

  useEffect(() => {
    if (open === !!message) {
      return
    }

    setOpen(!!message)
  }, [message])

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      onClose={handleClose}
    >
      <Alert
        severity={message?.type || 'info'}
        variant="filled"
        onClose={handleClose}
        className={classes.alert}
      >
        {message?.content}
      </Alert>
    </Snackbar>
  )
}

export default Message
