import React from 'react'
import { makeStyles } from '@mui/material/styles'
import PropTypes from 'prop-types'
import Alert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'
import Box from '@mui/material/Box'
import CloseIcon from '@mui/icons-material/Close'

import styles from './styles'

const useStyles = makeStyles(styles)

const TransitionAlert = ({ data, setData }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Collapse in={data.show}>
        <Alert
          severity={data.severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setData({ ...data, show: false })
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {data.message}
        </Alert>
      </Collapse>
    </Box>
  )
}

TransitionAlert.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func
}

TransitionAlert.defaultProps = {
  data: {
    show: false,
    isError: false,
    message: 'Error',
    severity: 'warning'
  },
  setData: () => {}
}

export default TransitionAlert
