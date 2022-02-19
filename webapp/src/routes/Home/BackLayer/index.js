import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, Switch } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'

import HomeBackLayer from './Home'
import styles from '../styles'

const useStyles = makeStyles(styles)

const BackLayer = ({ ual }) => {
  const classes = useStyles()

  return (
    <Box className={classes.layer}>
      <Switch>
        <Route exact path="/home" component={HomeBackLayer} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Box>
  )
}

BackLayer.propTypes = {
  ual: PropTypes.object
}

export default BackLayer
